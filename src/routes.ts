import { Router } from "express";
import { CreatUserController } from "./controllers/CreatUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateComplimentController } from "./controllers/CreateComplimentController"
import { ensureAdmin } from "./middlewares/ensureAdmins";
import { AuthenticateUserController } from "./controllers/AuthentucateUserController";

const router = Router();
const creatUserController = new CreatUserController()
const creatTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()

router.post("/users", creatUserController.handle)
router.post("/tags", ensureAdmin, creatTagController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliments", createComplimentController.handle)

export {router}