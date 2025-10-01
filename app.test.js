const request = require("supertest");
const app = require("./app"); 

describe("Testes de Login", () => {
  it("Deve retornar erro quando o e-mail não existe", async () => {
    const res = await request(app)
      .post("/usuarios/login")
      .send({ email: "naoexiste@email.com", senha: "123456" });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("msg", "Usuário não encontrado!");
  });

  it("Deve retornar erro quando a senha está incorreta", async () => {
    await request(app)
      .post("/usuarios/cadastro")
      .send({ nome: "Teste", email: "teste@email.com", senha: "123456" });

    const res = await request(app)
      .post("/usuarios/login")
      .send({ email: "teste@email.com", senha: "errada" });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("msg", "Senha incorreta!");
  });
});
