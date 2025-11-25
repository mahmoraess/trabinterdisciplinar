const router = require("express").Router();
const MesaController = require("../controllers/MesaController");

router.post("/", MesaController.criarMesa);
router.get("/", MesaController.listarMesas);

module.exports = router;
