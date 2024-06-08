import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const newData = JSON.parse(data).filter(() => Math.random() >= 0.5);
    await fs.writeFile(PATH_DB, JSON.stringify(newData, null, 2));
    console.log('Успішно виконано!');
  } catch (error) {
    console.log('Помилка:', error);
  }
};

await thanos();
