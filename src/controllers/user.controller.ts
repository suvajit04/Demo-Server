import { Request, Response, NextFunction } from "express";

import {
    findAllUsers,
    findUserById
} from "../services/user.services.js";

export async function getAllUsersController(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const users = await findAllUsers();

        res.status(200).json({
            message: "OK",
            status: 200,
            data: users
        });
    } catch (error) {
        next(error);
    }
}

export async function getUserByIdController(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({
                message: "Invalid user ID",
                status: 400
            });
        }

        const user = await findUserById(id);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                status: 404
            });
        }

        res.status(200).json({
            message: "OK",
            status: 200,
            data: user
        });
    } catch (error) {
        next(error);
    }
}