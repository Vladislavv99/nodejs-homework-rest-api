import Joi from "joi";

const contactAddSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `"name" must be exist`,
    "string.empty": `"name" must be filled`,
  }),
  email: Joi.string().required().messages({
    "any.required": `"email" must be exist`,
    "string.empty": `"email" must be filled`,
  }),
  phone: Joi.string().required().messages({
    "any.required": `"phone" must be exist`,
    "string.empty": `"phone" must be filled`,
  }),
});

export default {
  contactAddSchema,
};
