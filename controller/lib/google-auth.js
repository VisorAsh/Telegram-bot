// const axios = require("axios")
// const config = require("../config/config.json").web
import axios from "axios";
import configJson from "../config/config.json" assert { type: "json" };

const config = configJson.web;  // Extraire la propriété 'web' de l'objet config

function getNewLoginUrl() {
    const url = `https://accounts.google.com/o/oauth2/v2/auth?
    client_id=${config.client_id}&
    redirect_uri=${config.redirect_uris[0]}&
    access_type=offline&
    response_type=code&
    scope=https://www.googleapis.com/auth/photoslibrary.readonly&
    state=new_access_token&
    include_granted_scopes=true&
    prompt=consent&`;

    return axios.get(url);
}

function getRefreshToken(code) {
    var data = {
        client_id: config.client_id,
        client_secret: config.client_secret,
        code,
        grant_type: "authorization_code",
        redirect_uri: config.redirect_uris[0],
    };

    const axiosConfig = {
        method: "post",
        url: "https://oauth2.googleapis.com/token",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        params: data,
    };
    return axios(axiosConfig);
}

export { getNewLoginUrl, getRefreshToken };
