import express, { json } from "express";
import { handler } from "./controller/index.js";
import * as dotenv from 'dotenv'

dotenv.config()

// console.log(process.env.PORT)
const PORT = process.env.PORT;

const app = express();
app.use(json())
app.post("*", async (req, res) => {
    console.log(req.body);

    res.send(await handler(req, "POST"));
});
app.get("*", async (req, res) => {
    res.send(await handler(req, "GET"));
});

app.listen(PORT, (err) => {
    if (err) console.log(err)
    console.log(`Server listening on port ${PORT}`)
});

// `https://api.telegram.org/bot${MyToken}/${method}`;

// My ngrok url
// https://0463-196-171-101-56.ngrok-free.app

// Use this template to update my webhook when i have a new ngrok url
// https://api.telegram.org/bot7458285009:AAGinO3R0bQlYvOaBcDT4Xf1djtrFZT0eC8/setWebhook?url=https://7886-196-171-101-56.ngrok-free.app

// Template
// https://api.telegram.org/bot${MyToken}/setWebhook?url={url_to_send_updates_to}
