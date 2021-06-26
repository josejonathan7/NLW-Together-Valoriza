import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticate(request: Request, response: Response, next: NextFunction){
    //receber o token
    const authToken = request.headers.authorization

    //validar se o token esta preenchido
    if(!authToken){
        return response.status(401).end();
    }

    const [,token] = authToken.split(" ")

    //validar se o token é válido
    try {
        const { sub } = verify(token, "dasdewasdasdsadas") as IPayload

        //recuperar informações do usuário
        request.user_id = sub;

        return next();

    } catch (error) {
    return response.status(401).end();        
    }

}

