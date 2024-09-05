`https://api.telegram.org/bot${MyToken}/${method}`;

My ngrok url (Create a new ngrok url when log in)
https://0463-196-171-101-56.ngrok-free.app

Use this template to update my webhook when i have a new ngrok url
`https://api.telegram.org/bot${YourBotToken}/setWebhook?url=${ngrok_url}`
https://api.telegram.org/bot${MyToken}/setWebhook?url={url_to_send_updates_to}
