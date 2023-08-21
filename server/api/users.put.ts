import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

// delete data 

export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  const id = body.id
  const uname = body.username

  if(!(id&&uname))
    return createError({ statusCode: 400, statusMessage: "missing id and username" });

  let user = null

  if(id && uname)
    user = await prisma.users.update({
      where: {
        id: id,
      },
      data: {
        username: uname,
      },
    })

  return user
})
