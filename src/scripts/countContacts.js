import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    console.log('Кількість контактів:', contacts.length);
  } catch (error) {
    console.log('Помилка отримання кількocті контактів:', error);
  }
};

console.log(await countContacts());
