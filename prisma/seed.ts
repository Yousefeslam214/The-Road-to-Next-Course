import { PrismaClient, TicketStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed Tickets
  await prisma.ticket.createMany({
    data: [
      {
        title: "First Ticket",
        content: "This is the first ticket.",
        status: TicketStatus.OPEN,
      },
      {
        title: "Second Ticket",
        content: "This ticket is in progress.",
        status: TicketStatus.IN_PROGRESS,
      },
      {
        title: "Third Ticket",
        content: "This ticket is done.",
        status: TicketStatus.DONE,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
