import express from "express";
import { userRouter } from "./routes/user.route.js";

const app = express();

app.get("/health", (_req, res) => {
    res.json({
        status: "OK"
    });
});

app.use("/api/users", userRouter);

export { app };