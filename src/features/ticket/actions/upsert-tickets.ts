"use server";

import { setCookieByKey } from "@/actions/cookies";
import { ticketsPath } from "@/app/path";
import {
  ActionState,
  formErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { prisma } from "@/lib/prisma";
import { toCent } from "@/utils/currency";
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
  deadline: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "Deadline must be in YYYY-MM-DD format.",
  }),
  bounty: z.coerce.number(),
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
      deadline: formData.get("deadline")?.toString(),
      bounty: formData.get("bounty")?.toString(),
    });

    const dbData = {
      ...data,
      bounty: toCent(data.bounty),
    };
    await prisma.ticket.upsert({
      where: {
        id: id || "",
      },
      update: data,
      create: data,
    });
    // if (id) {
    //   // update
    //   await prisma.ticket.update({
    //     where: { id },
    //     data: dbData,
    //   });
    // } else {
    //   // create
    //   await prisma.ticket.create({
    //     data: dbData,
    //   });
    // }
  } catch (error) {
    return formErrorToActionState(error, formData);
    // return { message: "Something went wrong", payload: formData };
  }
  revalidatePath(ticketsPath());
  if (id) {
    setCookieByKey("toast", "Ticket updated!");
    redirect(ticketsPath());
  }
  setCookieByKey("toast", "Ticket created!");

  return toActionState("SUCCESS", "Ticket created!");

  // { message: "Ticket created!", fieldErrors: {} };
};
