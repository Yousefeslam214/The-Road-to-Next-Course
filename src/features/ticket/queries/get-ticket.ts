// import { Ticket } from "../type";
import { prisma } from "@/lib/prisma";
import { Ticket } from "@prisma/client";
import { cache } from "react";

export const getTicket = cache(async (id: string): Promise<Ticket | null> => {
    console.log("Fetching ticket from DB" + id);

  return await prisma.ticket.findUnique({
    where: { id },
  });
});
