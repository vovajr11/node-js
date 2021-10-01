const fs = require('fs/promises');
const path = require('path');
const Joi = require('joi');

const getAllContacts = fs.readFile(
  path.resolve(__dirname, './contacts.json'),
  'utf-8',
);

const listContacts = async () => {
  return await getAllContacts;
};

const getContactById = async contactId => {
  const contacts = JSON.parse(await getAllContacts);

  return contacts.find(item => item.id === contactId);
};

const removeContact = async contactId => {
  const contacts = JSON.parse(await getAllContacts);

  const newContacts = contacts.filter(({ id }) => id !== contactId);

  console.log('Delete contact');
  console.table(newContacts);

  return newContacts;
};

const addContact = async body => {
  // const createContactRules = Joi.object({
  //   name: Joi.string().required(),
  //   email: Joi.string().required(),
  //   phone: Joi.string().required(),
  // });

  // const result = Joi.valid(body, createContactRules);
  // console.log(contacts, 'contacts top');
  const contacts = JSON.parse(await getAllContacts);

  const newContact = {
    ...body,
    id: contacts.length + 1,
  };

  contacts.push(newContact);

  fs.writeFile(
    path.resolve(__dirname, './contacts.json'),
    JSON.stringify(contacts),
    error => {
      if (error) {
        return console.log(error);
      }
    },
  );

  return contacts;
};

const updateContact = async (contactId, body) => {
  const contacts = JSON.parse(await getAllContacts);
  const targetContactIdx = contacts.findIndex(
    contact => contact.id === contactId,
  );

  contacts[targetContactIdx] = {
    ...contacts[targetContactIdx],
    ...body,
  };

  fs.writeFile(
    path.resolve(__dirname, './contacts.json'),
    JSON.stringify(contacts),
    error => {
      if (error) {
        return console.log(error);
      }
    },
  );

  return contacts;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
