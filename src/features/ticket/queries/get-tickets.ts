<<<<<<< HEAD
import initialTickets from "@/app/data";
import { Ticket } from "../type";

export const getTickets = async (): Promise<Ticket[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return new Promise((resolve) => {
    resolve(initialTickets);
=======
import { prisma } from "@/lib/prisma";
import { Ticket } from "@prisma/client";

export const getTickets = async (): Promise<Ticket[]> => {
  return await prisma.ticket.findMany({
    orderBy: { createdAt: "desc" },
>>>>>>> backup-main
  });
};
