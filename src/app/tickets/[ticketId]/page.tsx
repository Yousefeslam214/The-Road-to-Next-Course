import { ticketsPath } from "@/app/path";
import { Placeholder } from "@/components/placeholder";
import { RedirectToast } from "@/components/redirect-toast";
import { Button } from "@/components/ui/button";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import Link from "next/dist/client/link";

type TicketPageProps = {
  params: { ticketId: string };
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const ticket = await getTicket(params.ticketId);
  if (!ticket) {
    return (

      <Placeholder
        label="Ticket not found"
        button={
          <Button>
            <Link href={ticketsPath()}>go to tickets</Link>
          </Button>
        }
      />
    );
  }
  return (
    <>
    <div className="flex justify-center animate-fade-in-from-top">
      <TicketItem ticket={ticket} isDetail />
    </div>
    <RedirectToast />
    </>
  );
};

export default TicketPage;
