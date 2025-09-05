import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { upsertTicket } from "../actions/upsert-ticket";
import { Ticket } from "@prisma/client";
import { upsertTicket } from "../actions/upsert-tickets";

type TicketUpsertFormProps = {
  ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  return (
    <form
      action={upsertTicket.bind(null, ticket?.id)}
      className="flex flex-col gap-y-2">
      <Label htmlFor="title">Title</Label>
      <Input type="text" id="title" name="title" defaultValue={ticket?.title} />
      <Label htmlFor="content">Content</Label>
      <Input
        type="text"
        id="content"
        name="content"
        defaultValue={ticket?.content}
      />
      <Button type="submit">
        {ticket ? "Update Ticket" : "Create Ticket"}
      </Button>
    </form>
  );
};

export default TicketUpsertForm;
