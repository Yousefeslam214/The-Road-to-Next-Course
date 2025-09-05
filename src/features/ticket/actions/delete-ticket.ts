"use server";

import { ticketsPath } from "@/app/path";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteTicket = async (id: string) => {
  await prisma.ticket.delete({
    where: { id },
  });
  revalidatePath(ticketsPath());
  redirect(ticketsPath());
};
