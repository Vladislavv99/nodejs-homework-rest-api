import express from "express";

import contactsControllers from "../../controllers/contacts-controllers.js";

import contactsSchemas from "../../schemas/contacts-schemas.js";

import { validateBody } from "../../decorators/index.js";

import { isValidId } from "../../middlewares/index.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.contactsList);

contactsRouter.get(
  "/:contactId",
  isValidId,
  contactsControllers.getContactById
);

contactsRouter.post(
  "/",
  validateBody(contactsSchemas.contactAddSchema),
  contactsControllers.addContact
);

contactsRouter.delete(
  "/:contactId",
  isValidId,
  contactsControllers.removeContact
);

contactsRouter.put(
  "/:contactId",
  isValidId,
  validateBody(contactsSchemas.contactAddSchema),
  contactsControllers.updateContact
);

contactsRouter.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(contactsSchemas.contactUpdateFavoriteSchema),
  contactsControllers.updateFavorite
);

export default contactsRouter;
