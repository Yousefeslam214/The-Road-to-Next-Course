import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createTicket } from "../actions/create-ticket";
import { Ticket } from "@prisma/client";
import { updateTicket } from "../actions/update-ticket";

interface TicketUpdateFormProps {
  ticket: Ticket;
}

const TicketUpdateForm = ({ ticket }: TicketUpdateFormProps) => {
  return (
    <form
      action={updateTicket.bind(null, ticket.id)}
      className="flex flex-col gap-y-2">
      {/* <Input type="hidden" id="id" name="id" value={ticket.id} /> */}

      <Label htmlFor="title">Title</Label>
      <Input type="text" id="title" name="title" defaultValue={ticket.title} />

      <Label htmlFor="content">Content</Label>
      <Input
        type="text"
        id="content"
        name="content"
        defaultValue={ticket.content}
      />

      <Button type="submit">Update Ticket</Button>
    </form>
  );
};

export default TicketUpdateForm;
