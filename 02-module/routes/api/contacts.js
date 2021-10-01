const express = require('express');
const router = express.Router();
const fnContacts = require('../../model/index');

router.get('/', async (req, res, next) => {
  fnContacts.listContacts().then(data => {
    res.status(200).json(JSON.parse(data));
  });
});

router.get('/:contactId', async (req, res, next) => {
  const contactId = Number(req.params.contactId);
  const foundContact = fnContacts.getContactById(contactId);

  foundContact.then(data => {
    data
      ? res.status(200).json(data)
      : res.status(404).json({ message: 'no such contact was found' });
  });
});

router.post('/', async (req, res, next) => {
  const bd = req.body;

  fnContacts.addContact(bd).then(data => {
    console.log(data, 'data');
    data
      ? res.status(200).send(data)
      : res.status(404).json({ message: 'no such contact was found' });
  });
});

router.delete('/:contactId', async (req, res, next) => {
  const contactId = Number(req.params.contactId);

  fnContacts.removeContact(contactId).then(data => {
    res.status(200).json(data);
  });
});

router.patch('/:contactId', async (req, res, next) => {
  const contactId = Number(req.params.contactId);
  const bd = req.body;

  fnContacts.updateContact(contactId, bd).then(data => {
    data
      ? res.status(200).send(data)
      : res.status(404).json({ message: 'no such contact was found' });
  });
});

module.exports = router;
