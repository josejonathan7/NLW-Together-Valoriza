import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UserRepositories } from "../repositories/UsersRepositories"

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string
}

class CreateComplimentService {

    async execute( { user_sender, message, tag_id, user_receiver }: IComplimentRequest ){
        const complimentRepositorie = getCustomRepository(ComplimentsRepositories)
        const userRepositories = getCustomRepository(UserRepositories)

        if(user_sender === user_receiver){
            throw new Error("Incorrect user receiver")
        }

        const userReceiverExists = await userRepositories.findOne(user_receiver)

        if(!userReceiverExists){
            throw new Error("User receiver does not exists")
        }

        const compliment = complimentRepositorie.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        })

        await complimentRepositorie.save(compliment)

        return compliment;
    }
}

export { CreateComplimentService }
