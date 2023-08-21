import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

// read data 

export default defineEventHandler(async (event) => {

  return await prisma.users.findMany()

})
