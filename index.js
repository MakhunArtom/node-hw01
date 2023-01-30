import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts.js";

import { argv } from "node:process";

const [, , ...args] = argv;

const invokeAction = ([action, id, name, email, phone]) => {
  console.log(action, id, name, email, phone);
  switch (action) {
    case "list":
      listContacts();
      break;

    case "get":
      getContactById(id);
      break;

    case "add":
      addContact(id, name, email, phone);
      break;

    case "remove":
      removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(args);
