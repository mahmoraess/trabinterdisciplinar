const request = require("supertest");
const app = require("./app");
test("GET /hello retorna Hello World", async () => {
 const res = await request(app).get("/hello");
 expect(res.status).toBe(200);
 expect(res.body.msg).toBe("Hello World");
});