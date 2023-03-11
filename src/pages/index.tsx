import { trpc } from "@/utils/trpc";
import { Inter } from "next/font/google";
import { FormEvent, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = trpc.hello.useQuery({ text: "World!" });

  //Exemplo using mutation to post
  const { mutateAsync: createBook } = trpc.createBook.useMutation();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await createBook({
      name,
      description,
    });
  }

  return (
    <>
      <h1>tRPC + Next.js Testing</h1>
      <p>{data?.message}</p>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Criar</button>
      </form>
    </>
  );
}
