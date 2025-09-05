import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createTicket } from "../actions/create-ticket";

const TicketCreateForm = () => {
 
  return (
    <form action={createTicket} className="flex flex-col gap-y-2">
      <Label htmlFor="title">Title</Label>
      <Input type="text" id="title" name="title" />
      <Label htmlFor="content">Content</Label>
      <Input type="text" id="content" name="content" />
      <Button type="submit">Create Ticket</Button>
    </form>
  );
};

export default TicketCreateForm;
