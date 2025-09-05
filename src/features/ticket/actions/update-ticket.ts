"use server";

import { ticketsPath } from "@/app/path";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const updateTicket = async (id: string, formData: FormData) => {
  const data = {
    title: formData.get("title")?.toString(),
    content: formData.get("content")?.toString(),
  };
  await prisma.ticket.update({
    where: { id },
    data: {
      title: data.title as string,
      content: data.content as string,
    },
  });
  revalidatePath(ticketsPath());
  redirect(ticketsPath());
};
