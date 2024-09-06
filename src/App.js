const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();
const FRONTEND_URL = "https://rick-and-morty-app-chi-nine.vercel.app/";
const corsOptions = {
  origin: FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  optionsSuccessStatus: 200,
};

//*MIDDLEWARES
server.use(morgan("dev"));
server.use(express.json());
server.use(cors(corsOptions));

// Middleware para agregar "/rickandmorty" antes de cada ruta
server.use(router);

module.exports = server;
