import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    const contacts = await fs;
  } catch (error) {
    console.log('Помилка видалення контактів:', error);
  }
};

await removeAllContacts();
