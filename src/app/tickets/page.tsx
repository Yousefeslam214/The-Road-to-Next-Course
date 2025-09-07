import { Suspense } from "react";
import { Heading } from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { CardCompact } from "@/components/ui/card-compact";
import { TicketList } from "@/features/ticket/components/ticket-list";
import TicketUpsertForm from "@/features/ticket/components/ticket-upsert-form";
import { RedirectToast } from "@/components/redirect-toast";

const TicketsPage = () => {
  return (
    <>
      <div className="flex-1 flex flex-col gap-y-8">
        <Heading title="Tickets Page" desc="All your tickets at one place" />

        <CardCompact
          title="Your Tickets"
          description="Manage your tickets"
          content={<TicketUpsertForm />}
          className="w-full max-w-[420px] self-center "
        />

        <Suspense fallback={<Spinner />}>
          <TicketList />
        </Suspense>
      </div>
      <RedirectToast />
    </>
  );
};

export default TicketsPage;
