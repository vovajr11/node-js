const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

// TODO: задокументировать каждую функцию
function listContacts() {
  fs.readFile("s.json", (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.table(student);
  });
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
  listContacts,
};
