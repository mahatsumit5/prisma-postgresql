import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function main() {
  // await prisma.user.deleteMany();
  const user = await prisma.user.create({
    data: {
      age: 14,
      name: "sumit",
      email: "sumit2@test.com",
    },
    select: {
      id: true,
      name: true,
    },
  });

  console.log(user);
}

export async function findAllUser() {
  const users = await prisma.user.findMany({
    orderBy: {
      age: "desc",
    },
  });
  console.log(users);
}
findAllUser();

export async function findUnique() {
  const user = await prisma.user.findUnique({
    where: {
      // age_name: {
      //   age: 12,
      //   name: "sumit",
      // },

      email: "sumit@test.com",
    },
  });
  console.log(user);
}

export async function deleteall() {
  console.log("deleted");
  await prisma.user.deleteMany();
}
export async function findByName() {
  const user = await prisma.user.findFirst({
    where: {
      name: "sumit",
    },
  });
  console.log(user);
}
