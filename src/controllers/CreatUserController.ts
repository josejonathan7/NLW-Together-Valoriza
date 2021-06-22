import { Request, Response} from "express"
import { CreateUserService } from "../services/CreateUserService";


class CreatUserController {
    async handle(request: Request, response: Response) {
        const { name, email, admin } = request.body;

        const creatUserService = new CreateUserService;

        const user = await creatUserService.execute({name, email, admin})

        return response.json(user)

    }
}

export {CreatUserController}