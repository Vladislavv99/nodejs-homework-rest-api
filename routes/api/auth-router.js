import express from "express";

import authControllers from "../../controllers/auth-controllers.js";

import { validateBody } from "../../decorators/index.js";

import usersSchemas from "../../schemas/users-schemas.js";

import { authenticate } from "../../middlewares/index.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(usersSchemas.userSingUpSchema),
  authControllers.singup
);

authRouter.post(
  "/login",
  validateBody(usersSchemas.userSingInSchema),
  authControllers.singin
);

authRouter.get("/current", authenticate, authControllers.getCurrent);

authRouter.post("/logout", authenticate, authControllers.logout);

export default authRouter;
