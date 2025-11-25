const router = require("express").Router();
const ReservaController = require("../controllers/ReservaController");

router.post("/", ReservaController.criarReserva);
router.get("/", ReservaController.listarReservas);

module.exports = router;
