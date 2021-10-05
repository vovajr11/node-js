const { Router } = require('express');
const ContactController = require('./contact.controller');

const contactRouter = Router();

contactRouter.post(
  '/',
  ContactController.validateCreateContact,
  ContactController.createContact,
);
contactRouter.get('/', ContactController.getContacts);
contactRouter.get(
  '/:id',
  ContactController.validateId,
  ContactController.getContactById,
);
contactRouter.delete(
  '/:id',
  ContactController.validateId,
  ContactController.deleteContactById,
);
contactRouter.patch(
  '/:id',
  ContactController.validateId,
  ContactController.validateUpdateContact,
  ContactController.updateContact,
);

module.exports = contactRouter;
