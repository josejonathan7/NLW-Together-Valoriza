
import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

class ListUserReceiverComplimentController {

    async handle(request: Request, response: Response){
        const { user_id } = request;
        const listReceiverSendComplimentService = new ListUserReceiveComplimentsService()

        const compliments = await listReceiverSendComplimentService.execute(user_id)

        return response.json(compliments)
    }
}

export {ListUserReceiverComplimentController}
