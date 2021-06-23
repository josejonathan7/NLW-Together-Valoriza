import { Router } from "express";
import { CreatUserController } from "./controllers/CreatUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmins";

const router = Router();
const creatUserController = new CreatUserController()
const creatTagController = new CreateTagController()

router.post("/users", creatUserController.handle)
router.post("/tags", ensureAdmin, creatTagController.handle)

export {router}