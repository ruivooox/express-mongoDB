import express from "express";
import AutorController from "../controllers/autorController.js";

const rotas = express.Router();

rotas.get("/autores", AutorController.listarAutores);
rotas.get("/autores/:id", AutorController.listaAutorById);
rotas.post("/autores", AutorController.cadastrarAutor);
rotas.put("/autores/:id", AutorController.atualizarAutor);
rotas.delete("/autores/:id", AutorController.deletarAutor);
export default rotas;
