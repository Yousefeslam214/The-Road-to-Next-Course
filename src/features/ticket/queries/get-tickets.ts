import { prisma } from "@/lib/prisma";
import { Ticket } from "../type";

export const getTickets = async (): Promise<Ticket[]> => {
  return await prisma.ticket.findMany({
    orderBy: { createdAt: "desc" },
  });
};
