const express = require("express");
const app = express();

app.use(express.json()); 
app.get("/hello", (req, res) => {
 res.json({ msg: "Hello World" });
});
app.post("/soma", (req, res) => {
 res.json({ resultado: req.body.a + req.body.b });
});

module.exports = app;