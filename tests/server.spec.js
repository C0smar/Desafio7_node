import request from 'supertest';
import server from '../src/server.js';

describe("Operaciones CRUD de cafes", () => {
    it("Debería obtener todos los cafes con status 200 y un arreglo con al menos 1 objeto", async () => {
        const response = await request(server).get("/cafes").send();
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
    });

    it("Debería devolver un código 404 al intentar eliminar un café con un id que no existe", async () => {
        const jwt = "token";
        const idInexistente = 999;
        const response = await request(server)
            .delete(`/cafes/${idInexistente}`)
            .set("Authorization", jwt)
            .send();
        expect(response.status).toBe(404);
    });

    it("Debería agregar un nuevo café y devolver un código 201", async () => {
        const nuevoCafe = { id: 5, nombre: "Latte" };
        const response = await request(server).post("/cafes").send(nuevoCafe);
        expect(response.status).toBe(201);
        expect(response.body).toContainEqual(nuevoCafe);
    });

    it("Debería devolver un código 400 si el id del parámetro no coincide con el id del payload", async () => {
        const cafeActualizado = { id: 1, nombre: "Cortado Actualizado" };
        const idParametro = 2;
        const response = await request(server)
            .put(`/cafes/${idParametro}`)
            .send(cafeActualizado);
        expect(response.status).toBe(400);
    });
});