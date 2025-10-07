const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const client = new PrismaClient();

class UsuarioController {

  static async cadastrar(req, res) {
    const { nome, email, senha } = req.body;

    const salt = bcryptjs.genSaltSync(8);
    const hashSenha = bcryptjs.hashSync(senha, salt);

    const usuario = await client.usuario.create({
      data: {
        nome,
        email,
        senha: hashSenha,
      },
    });

    const token = jwt.sign({ id: usuario.id }, process.env.SENHA_SERVIDOR, {
      expiresIn: "1h",
    });

    res.json({
      erro: false,
      msg: "Usuário cadastrado com sucesso!",
      token: token,
    });
  }

  static async login(req, res) {
    const { email, senha } = req.body;

    const usuario = await client.usuario.findUnique({
      where: { email: email },
    });

    if (!usuario) {
      return res.json({
        erro: true,
        msg: "Usuário não encontrado!",
      });
    }

    const senhaCorreta = bcryptjs.compareSync(senha, usuario.senha);
    if (!senhaCorreta) {
      return res.json({
        erro: true,
        msg: "Senha incorreta!",
      });
    }

    const token = jwt.sign({ id: usuario.id }, process.env.SENHA_SERVIDOR, {
      expiresIn: "1h",
    });

    res.json({
      erro: false,
      msg: "Autenticado!",
      token: token,
    });
  }
}

module.exports = UsuarioController;
