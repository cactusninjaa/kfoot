import fs from 'fs';
import csv from 'csv-parser';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

fs.createReadStream('question.csv')
  .pipe(csv())
  .on('data', async (row) => {
    try {
      await prisma.question.create({
        data: {
          question : row.question,
          link : row.link,
          type: row.type,
          difficulty : row.difficulty,
          answer : row.answer
        },
      });
    } catch (error) {
      console.error(error);
    }
  })
  .on('end', async () => {
    await prisma.$disconnect();
    console.log('Importation terminée.');
  });

