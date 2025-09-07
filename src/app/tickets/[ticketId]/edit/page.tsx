import { CardCompact } from "@/components/ui/card-compact";
import TicketUpsertForm from "@/features/ticket/components/ticket-upsert-form";
// import TicketUpdateForm from "@/features/ticket/components/ticket-update-form";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { notFound } from "next/navigation";

type TicketEditPageProps = {
  params: { ticketId: string };
};

const TicketsEditPage = async ({ params }: TicketEditPageProps) => {
  const ticket = await getTicket(params.ticketId);
  if (!ticket) {
    return notFound();
  }
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact
        title="Edit Ticket"
        description="Update the information for your ticket"
        content={<TicketUpsertForm ticket={ticket} />}
        className="w-full max-w-[420px] animate-fade-in-from-top"
      />
    </div>
  );
};

export default TicketsEditPage;
