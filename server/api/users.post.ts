import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

// create data 

export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  let user = null

  if(body.username)
  await prisma.users.create({
    data: {
      level: body.level,
      username: body.username,
      password: body.password,
      email: body.email
    },
  }).then((response) => {
    user = response
  })

  return {
    api: user
  }
})
