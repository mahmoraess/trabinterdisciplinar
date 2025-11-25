const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class MesaController {
  static async criarMesa(req, res) {
    const { numero, lugares } = req.body;

    const mesa = await prisma.mesa.create({
      data: { numero, lugares },
    });

    res.json(mesa);
  }

  static async listarMesas(req, res) {
    const mesas = await prisma.mesa.findMany({
      include: { reservas: true },
    });

    res.json(mesas);
  }
}

module.exports = MesaController;
