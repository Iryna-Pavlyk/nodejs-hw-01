import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const currentContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    currentContacts.push(createFakeContact());
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(currentContacts, null, 2),
      'utf-8',
    );
  } catch (error) {
    console.log('Contact don`t added:', error);
  }
};

await addOneContact();
