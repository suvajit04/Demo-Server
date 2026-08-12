import {
    findAll,
    findById
} from "../repositories/user.repository.js";

export async function findAllUsers() {
    return await findAll();
}

export async function findUserById(id: number) {
    return await findById(id);
}