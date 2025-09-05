"use server";

import { ticketsPath } from "@/app/path";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createTicket = async (formData: FormData) => {
  const data = {
    title: formData.get("title")?.toString(),
    content: formData.get("content")?.toString(),
  };
  await prisma.ticket.create({
    data: {
      title: (data.title as string) || "No title",
      content: (data.content as string) || "No content",
    },
  });
  revalidatePath(ticketsPath());

  console.log("create ticket", data);
};
