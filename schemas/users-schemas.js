import Joi from "joi";

const userSingUpSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string(),
});

const userSingInSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const userEmailSchema = Joi.object({
  email: Joi.string().required(),
});

export default {
  userSingUpSchema,
  userSingInSchema,
  userEmailSchema,
};
