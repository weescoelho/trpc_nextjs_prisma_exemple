import { prisma } from "@/utils/prisma";
import { inferAsyncReturnType } from "@trpc/server";

//Configuration to use Prisma with tRPC

export async function createContext() {
  return {
    prisma,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
