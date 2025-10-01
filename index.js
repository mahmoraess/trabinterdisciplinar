const app = require("./app.js");

const usuarioRoutes = require("./routes/usuarioRoutes.js");
app.use("/usuarios", usuarioRoutes);

app.listen(8000, () => {
    console.log("Aplicação rodando em localhost:8000");
});
