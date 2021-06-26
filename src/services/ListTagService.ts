import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"
import { classToPlain } from 'class-transformer'

class ListTagService {

    async execute(){
        const tagRepositories = getCustomRepository(TagsRepositories);

        const tag = await tagRepositories.find()
        

        return classToPlain(tag)
    }
}

export { ListTagService}
