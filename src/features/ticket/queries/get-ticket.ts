// import { Ticket } from "../type";
import { prisma } from "@/lib/prisma";
import { Ticket } from "@prisma/client";

export const getTicket = async (id: string): Promise<Ticket | null> => {
  return await prisma.ticket.findUnique({
    where: { id },
  });
};
