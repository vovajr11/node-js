const express = require('express');
const router = express.Router();
const fnContacts = require('../../model/index');

router.get('/', async (req, res, next) => {
  fnContacts.listContacts().then(data => {
    res.status(200).json(JSON.parse(data));
  });
});

router.get('/:contactId', async (req, res, next) => {
  const contactId = req.params.contactId;
  const foundContact = fnContacts.getContactById(Number(contactId));

  foundContact.then(data => {
    data
      ? res.status(200).json(data)
      : res.status(404).json({ message: 'no such contact was found' });
  });
});

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' });
});

router.delete('/:contactId', async (req, res, next) => {
  const contactId = req.params.contactId;

  fnContacts.removeContact(contactId).then(data => {
    res.status(200).json(data);
  });
});

router.patch('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' });
});

module.exports = router;
