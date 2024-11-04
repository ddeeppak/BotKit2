const Application = require("./lib/app");
const Server = require("./lib/server");
const sdk = require("./lib/sdk");
const config = require("./config");

const app = new Application(null, config);
const server = new Server(config, app);

sdk.checkNodeVersion();

// Register only the bots you need
sdk.registerBot(require('./SimpleConversationalBot.js'));

const PORT = process.env.PORT || 8080;
server.start(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
