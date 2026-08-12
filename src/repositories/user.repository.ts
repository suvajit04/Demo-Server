import { prisma } from "../configs/db.config.js";

export async function findAll() {
    return await prisma.user.findMany();
}

export async function findById(id: number) {
    return await prisma.user.findUnique({
        where: { id }
    });
}