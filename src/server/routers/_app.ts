import { z } from "zod";
import { procedure, router } from "../trpc";
export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const count = await ctx.prisma.book.count();
      return {
        message: `Books: ${count}`,
      };
    }),

  createBook: procedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.book.create({
        data: {
          name: input.name,
          description: input.description,
        },
      });
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
