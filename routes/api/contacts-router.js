import express from "express";

import contactsControllers from "../../controllers/contacts-controllers.js";

import contactsSchemas from "../../schemas/contacts-schemas.js";

import { validateBody } from "../../decorators/index.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.contactsList);

contactsRouter.get("/:contactId", contactsControllers.getContactById);

contactsRouter.post(
  "/",
  validateBody(contactsSchemas),
  contactsControllers.addContact
);

contactsRouter.delete("/:contactId", contactsControllers.removeContact);

contactsRouter.put(
  "/:contactId",
  validateBody(contactsSchemas),
  contactsControllers.updateContact
);

export default contactsRouter;
