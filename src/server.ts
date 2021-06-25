import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "./database";
import { router } from "./routes";
import 'express-async-error';

const app = express();

app.use(express.json())

app.use(router);

//uma maneira de tratar erro sem ser o try cath, normalmente utilizado em códigos mais longos onde fica cansativo usar try cath
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error){
        return response.status(400).json({error: err.message})
    }

    return response.status(500).json({
        status: "error",
        message: "Internal server error!"
    })
})

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

