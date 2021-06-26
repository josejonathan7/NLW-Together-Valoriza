import { Router } from "express";
import { CreatUserController } from "./controllers/CreatUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateComplimentController } from "./controllers/CreateComplimentController"
import { ensureAdmin } from "./middlewares/ensureAdmins";
import { AuthenticateUserController } from "./controllers/AuthentucateUserController";
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";
import { ListUserSendComplimentController } from "./controllers/ListUserSenderComplimentController";
import { ListUserReceiverComplimentController } from "./controllers/ListUserReceiverComplimentsController";
import { ListTagController } from "./controllers/ListTagController";
import { ListUserController } from "./controllers/ListUserController";

const router = Router();
const creatUserController = new CreatUserController()
const creatTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserSendComplimentController = new ListUserSendComplimentController()
const listUserReceiveComplimentController = new ListUserReceiverComplimentController()
const listTagController = new ListTagController()
const listUserController = new ListUserController()

router.post("/users", creatUserController.handle)
router.post("/tags", ensureAuthenticate, ensureAdmin, creatTagController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliments", ensureAuthenticate, createComplimentController.handle)

router.get("/users/compliments/send", ensureAuthenticate, listUserSendComplimentController.handle)
router.get("/users/compliments/receive", ensureAuthenticate, listUserReceiveComplimentController.handle)
router.get("/tags", ensureAuthenticate, listTagController.handle)
router.get("/users", ensureAuthenticate, listUserController.handle)

export {router}