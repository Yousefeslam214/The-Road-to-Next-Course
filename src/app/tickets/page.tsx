"use client";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import initialTickets from "../data";
import { Heading } from "@/components/heading";
import { useEffect, useState } from "react";
import { getTickets } from "@/features/ticket/queries/get-tickets";
import { Ticket } from "@/features/ticket/type";
const TicketsPage = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const data = await getTickets();
      setTickets(data);
    };
    fetchTickets();
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets Page" desc="All your tickets at one place" />

      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top ">
        {initialTickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
