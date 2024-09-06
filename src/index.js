const server = require("./App");
const { conn } = require("./DB_connection");
require("dotenv").config();

const { DB_PORT } = process.env;

server.listen(DB_PORT, async () => {
  await conn.sync({ force: true });
  console.log("Server raised in port: " + DB_PORT);
});
