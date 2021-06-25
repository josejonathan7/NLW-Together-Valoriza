import { Request, Response} from "express"
import { CreateUserService } from "../services/CreateUserService";


class CreatUserController {
    async handle(request: Request, response: Response) {

        const { name, email, admin, password } = request.body;

        const creatUserService = new CreateUserService;

        const user = await creatUserService.execute({name, email, admin, password})

        return response.json(user)

    }
}

export {CreatUserController}