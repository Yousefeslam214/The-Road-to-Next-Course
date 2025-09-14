import { prisma } from "@/lib/prisma";
import { Ticket } from "@prisma/client";

export const getTickets = async (): Promise<Ticket[]> => {
  const data = await prisma.ticket.findMany({
    orderBy: { createdAt: "desc" },
  });
  console.log("data");
  console.log(data);
  return data;
};
