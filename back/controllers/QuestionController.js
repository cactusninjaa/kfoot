import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getQuestions = (req, res) => {
    prisma.question.findMany()
    .then((data) => res.json(data))
    .catch((error) => res.json(error))
}

