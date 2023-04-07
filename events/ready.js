const client = require("../index");

client.on("ready", () =>
    client.user.setPresence({ activities: [{ name: 'With You' }], status: 'idle' }) &&
    console.log("Bot Is Ready To Run")
);
