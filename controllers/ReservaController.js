const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ReservaController {
  static async criarReserva(req, res) {
    const { data, usuarioId, mesaId } = req.body;

    const reserva = await prisma.reserva.create({
      data: {
        data: new Date(data),
        usuarioId,
        mesaId,
      },
    });

    res.json(reserva);
  }

  static async listarReservas(req, res) {
    const reservas = await prisma.reserva.findMany({
      include: {
        usuario: true,
        mesa: true,
      },
    });

    res.json(reservas);
  }
}

module.exports = ReservaController;
