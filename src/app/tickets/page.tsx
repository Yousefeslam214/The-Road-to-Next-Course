import { Heading } from "@/components/heading";
import { Suspense } from "react";
import { TicketList } from "@/features/ticket/components/ticket-list";
import { Spinner } from "@/components/spinner";
import TicketCreateForm from "@/features/ticket/components/ticket-create-form";
import { CardCompact } from "@/components/ui/card-compact";


const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets Page" desc="All your tickets at one place" />

      <CardCompact
        title="Your Tickets"
        description="Manage your tickets"
        content={<TicketCreateForm />}
        className="w-full max-w-3xl self-center
        "
      />

      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default TicketsPage;
