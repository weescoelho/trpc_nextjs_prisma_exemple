import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  //Enable log for all queries to database
  log: ["query"],
});
