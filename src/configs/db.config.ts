import { PrismaClient } from "../../generated/prisma/client.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_PASSWORD ?? "",
    database: "demo_db",

    connectionLimit: 5,
    acquireTimeout: 10000,
    connectTimeout: 5000,
});

export const prisma = new PrismaClient({
    adapter,
});

export async function connectToDatabase() {
    try {
        await prisma.$connect();

        console.log("[Database]: Connected Successfully");
    } catch (error) {
        console.error("[Database]: Failed to connect");
        console.error(error);
        process.exit(1);
    }
}