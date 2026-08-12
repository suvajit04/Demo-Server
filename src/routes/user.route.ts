import { Router } from "express";

import {
    getAllUsersController,
    getUserByIdController
} from "../controllers/user.controller.js";

export const userRouter = Router();

userRouter.get("/:id", getUserByIdController);

userRouter.get("/", getAllUsersController);