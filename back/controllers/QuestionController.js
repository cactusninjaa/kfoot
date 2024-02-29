import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getQuestions = (req, res) => {
    prisma.question.findMany()
    .then((data) => res.json(data))
    .catch((error) => res.json(error))
}

const getQuestion = (req, res) => {
    prisma.question.findUnique({
        where: {
            id : Number(req.params.id)
        }
    })

    .then((data) => res.json(data))
    .catch((error) => res.json(error))
}



export { getQuestions, getQuestion }

