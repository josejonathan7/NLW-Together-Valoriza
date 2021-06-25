import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '../repositories/UsersRepositories';

interface IAuthenticateRequest{
    email: string;
    password: string;
}

class AuthenticateUserService {
    
    async execute({email, password}: IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UserRepositories)
        const user = await usersRepositories.findOne({email})

        //verificar se email existe
        if(!user){
            throw new Error("Email/Password incorrect")
        }

        //verificar se senha esta correta
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email/Password incorrect")
        }

        //gerar Token
        const token = sign({
            email: user.email
        }, "32fe1db801db87ee9742046508726b89", {
            subject: user.id,
            expiresIn: "1d"
        })

        return token;
    }

}

export { AuthenticateUserService }
