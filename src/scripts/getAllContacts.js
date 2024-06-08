import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    console.log('Список контактів:', contacts);
  } catch (error) {
    console.log('Помилка отримання списку контактів:', error);
  }
};

console.log(await getAllContacts());
