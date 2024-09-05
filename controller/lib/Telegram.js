import { axiosInstance } from "./axios.js";

function sendMessage(messageObj, messageText) {
    return axiosInstance.get("sendMessage", {
        chat_id: messageObj.chat.id,
        text: messageText
    });
}

function handleMessage(messageObj) {
    const messageText = messageObj.text || "";
    // console.log("messageText: " + messageText);

    if (messageText.charAt(0) === "/") {
        const command = messageText.substr(1);
        switch (command) {
            case "start":
                // Send  a welcome message
                return sendMessage(
                    messageObj,
                    "Salut bg ! Je peux t'aider ?"
                );

            default: sendMessage(messageObj, "Chef je ne connais pas cette commande")
                break;
        }
    } else {
        return sendMessage(messageObj, messageText)
    }
}

export { handleMessage };
