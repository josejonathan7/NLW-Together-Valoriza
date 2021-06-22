import { Router } from "express";
import { CreatUserController } from "./controllers/CreatUserController";

const router = Router();
const creatUserController = new CreatUserController()

router.post("/users", creatUserController.handle)


export {router}