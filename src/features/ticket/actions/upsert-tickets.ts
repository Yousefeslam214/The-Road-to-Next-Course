"use server";

import { ticketsPath } from "@/app/path";
import {
  ActionState,
  formErrorToActionState,
} from "@/components/form/utils/to-action-state";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const upsertTicketSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required." })
    .max(191, { message: "Title must be 191 characters or fewer." }),
  content: z
    .string()
    .min(5, { message: "Description must be at least 5 characters." })
    .max(1024, { message: "Description must be 1024 characters or fewer." }),
});

export const upsertTicket = async (
  id: string,
  _actionState: ActionState,
  formData: FormData
) => {
  try {
    const data = upsertTicketSchema.parse({
      title: formData.get("title")?.toString(),
      content: formData.get("content")?.toString(),
    });
    await prisma.ticket.upsert({
      where: { id: id || "" },
      update: data,
      create: data,
    });
  } catch (error) {
    return formErrorToActionState(error, formData);
    // return { message: "Something went wrong", payload: formData };
  }
  revalidatePath(ticketsPath());
  if (id) redirect(ticketsPath());

  return { message: "Ticket created!", fieldErrors: {} };
};
