import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// !IMPORTANT : 2:25 mark
// + In Development mode, when ever we use "const prisma", its gonna create a new DB connection. 
// + But for Production, we are going to have only one connection, and if its connected, dont create any other client, otherwise you will have thousands of clients on Production.

// + So initialize Prisma client like this : 
// EX: const prisma = new PrismaClient();

// + Then assign it to Global variable like this :
const prisma = globalForPrisma.prisma || new PrismaClient();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
