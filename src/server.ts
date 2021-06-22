import "reflect-metadata";
import express from "express";
import "./database";
import { router } from "./routes";

const app = express();

app.use(express.json())

app.use(router);

//http://localhost:3000
app.listen(3000, () => console.log("o servidor esta rodando NLW"));

/**
 * GET => Buscar uma informação
 * POST => Inserir(criar) uma informação
 * PUT => Alterar(atualizar) uma informação
 * DELETE => Deletar uma informação
 * PATCH => Alterar uma informação especifica
 */

/**
 * Tipos de parametros :
 * Routes Params => http://localhost:3000/produtos/7456478
 * Query Params => http://localhost:3000/produtos?name=teclado&description=tecladobom
 * Body Paramns => {
 *  "name" : "teclado",
 *  "description": "tecladobom"
 * }
 */

