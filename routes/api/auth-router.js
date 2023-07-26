import express from "express";

import authControllers from "../../controllers/auth-controllers.js";

import { validateBody } from "../../decorators/index.js";

import usersSchemas from "../../schemas/users-schemas.js";

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

export default authRouter;
