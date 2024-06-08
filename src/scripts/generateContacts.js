import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    let newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }
    const newData = contacts.concat(newContacts);
    await fs.writeFile(PATH_DB, JSON.stringify(newData, null, 2), 'utf-8');
  } catch (error) {
    console.log('Error handling db.json:', error);
  }
};

await generateContacts(5);
