const fs = require('fs/promises');
const path = require('path');

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

  const newContacts = contacts.filter(item => item.id !== contactId);

  console.log('Contact deleted successfully! New list of contacts: ');
  console.table(newContacts);

  return newContacts;
};

const addContact = async body => {};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
