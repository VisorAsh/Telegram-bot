import { handleMessage } from "./lib/Telegram.js";
import { getNewLoginUrl, getRefreshToken } from "./lib/google-auth.js";

async function handler(req, method) {
    if (method === "GET") {
        if (req.url === "/test") {
            const data = await getNewLoginUrl();
            const parsedUrl = data.config.url.replace(/\s/g, "");
            return parsedUrl;
        }
        if (req.url.indexOf("/gtoken") !== -1) {
            const data = req.query;
            const refreshTokenData = await getRefreshToken(data.code);
            const access_token = refreshTokenData.data.access_token;
            // console.log(access_token);
            return access_token;
        }

        return "Unknown request";
    }

    const { body } = req; // ou const body = req.body
    // console.log("body: " + body);
    if (body && body.message) {
        const messageObj = body.message;
        // console.log("messageObj: " + messageObj);
        await handleMessage(messageObj);
    }
    return;
}

export { handler };
