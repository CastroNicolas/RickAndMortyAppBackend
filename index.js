const server = require("./src/App");
const { conn } = require("./src/DB_connection");
require("dotenv").config();

const DB_PORT = 5000;

server.listen(DB_PORT, async () => {
  await conn.sync({ force: true });
  console.log("Server raised in port: " + DB_PORT);
});
