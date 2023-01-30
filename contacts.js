import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const CONTACTS_PATH = resolve("./db/contacts.json");

export const listContacts = async () => {
  try {
    const contents = await readFile(CONTACTS_PATH, {
      encoding: "utf8",
    });

    console.log(JSON.parse(contents));
  } catch (err) {
    console.error(err.message);
  }
};

export const getContactById = async (contactId) => {
  try {
    const contents = await readFile(CONTACTS_PATH, {
      encoding: "utf8",
    });

    const parsContacts = JSON.parse(contents);

    console.log(parsContacts.find(({ id }) => id === contactId));
  } catch (err) {
    console.error(err.message);
  }
};

export const removeContact = async (contactId) => {
  try {
    const contents = await readFile(CONTACTS_PATH, {
      encoding: "utf8",
    });

    const parsContacts = JSON.parse(contents);

    const data = parsContacts.filter(({ id }) => id !== contactId);

    writeFile(CONTACTS_PATH, JSON.stringify(data));
  } catch (err) {
    console.error(err.message);
  }
};

export const addContact = async (id, name, email, phone) => {
  const contact = {
    id,
    name,
    email,
    phone,
  };

  try {
    const contents = await readFile(CONTACTS_PATH, {
      encoding: "utf8",
    });

    const newContacts = [...JSON.parse(contents), contact];

    writeFile(CONTACTS_PATH, JSON.stringify(newContacts));
  } catch (err) {
    console.error(err.message);
  }
};
