const express = require("express");
const app = express();

const usuarioRoutes = require("./routes/usuarioRoutes.js"); 

app.use(express.json());

app.use("/usuarios", usuarioRoutes); 

app.get("/hello", (req, res) => {
    res.json({ msg: "Hello World" });
});

app.post("/soma", (req, res) => {
    res.json({ resultado: req.body.a + req.body.b });
});

module.exports = app;

const mesaRoutes = require("./routes/mesaRoutes");
const reservaRoutes = require("./routes/reservaRoutes");

app.use("/mesas", mesaRoutes);
app.use("/reservas", reservaRoutes);
