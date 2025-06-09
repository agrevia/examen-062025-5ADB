const express = require("express");
const cors = require("cors");
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");
const db = require("./services/db");
const app = express();
require("dotenv").config();

const swaggerDocument = JSON.parse(fs.readFileSync("./services/swagger.json"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());
app.use(express.json());

// GET alle bomen
app.get("/bomen", async (req, res) => {
  try {
    const bomen = await db("olijfbomen");
    res.status(200).json(bomen);
  } catch {
    res.status(500).json({ error: "Serverfout" });
  }
});

// GET boom op ID
app.get("/bomen/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const boom = await db("olijfbomen").where({ id }).first();
    if (boom) res.status(200).json(boom);
    else res.status(404).json({ error: "Boom niet gevonden" });
  } catch {
    res.status(500).json({ error: "Fout bij ophalen" });
  }
});

// POST boom toevoegen


// PUT boom aanpassen


// DELETE boom


app.listen(3333, () => {
  console.log("API draait op http://localhost:3333");
});
