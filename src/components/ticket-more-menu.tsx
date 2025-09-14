"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Ticket, TicketStatus } from "@prisma/client";
import { LucideTrash } from "lucide-react";
import { TICKET_STATUS_LABELS } from "@/features/ticket/constants";
import { updateTicketStatus } from "@/features/ticket/actions/update-ticket-status";
import { deleteTicket } from "@/features/ticket/actions/delete-ticket";
import { toast } from "sonner";
import { useConfirmDialog } from "./confirm-dialog";
import { Button } from "./ui/button";

type TicketMoreMenuProps = {
  ticket: Ticket;
  trigger: React.ReactNode;
};

const TicketMoreMenu = ({ ticket, trigger }: TicketMoreMenuProps) => {
  const [deleteButton, deleteDialog] = useConfirmDialog({
    action: deleteTicket.bind(null, ticket.id),
    trigger: (
      <DropdownMenuItem>
        <LucideTrash className="h-4 w-4" />
        <span>Delete</span>
      </DropdownMenuItem>
    ),
  });

  // const deleteButton = (
  //   <DropdownMenuItem>
  //     <LucideTrash className="mr-2 h-4 w-4" />
  //     <span>Delete</span>
  //   </DropdownMenuItem>
  // );
  // const deleteButton = (
  //   <ConfirmDialog
  //     action={deleteTicket.bind(null, ticket.id)}
  //     trigger={
  //       <Button variant="outline" size="icon">
  //         <LucideTrash className="h-4 w-4" />
  //       </Button>
  //     }
  //   />
  // );
  const handleUpdateTicketStatus = async (value: string) => {
    const promise = updateTicketStatus(ticket.id, value as TicketStatus);
    toast.promise(promise, { loading: "Updating ticket status..." });
    const result = await promise;
    if (result.status === "ERROR") {
      toast.error(result.message || "Failed to update ticket status");
    } else if (result.status === "SUCCESS") {
      toast.success(result.message || "Ticket status updated successfully");
    }
  };

  const TicketStatusRadioGroupItems = (
    <DropdownMenuRadioGroup
      value={ticket.status}
      onValueChange={handleUpdateTicketStatus}>
      {(Object.keys(TICKET_STATUS_LABELS) as Array<TicketStatus>).map(
        (status) => (
          <DropdownMenuRadioItem key={status} value={status}>
            {TICKET_STATUS_LABELS[status]}
          </DropdownMenuRadioItem>
        )
      )}
    </DropdownMenuRadioGroup>
  );

  return (
    <>
      {deleteDialog}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" side="right">
          {TicketStatusRadioGroupItems}
          <DropdownMenuSeparator />
          {deleteButton}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export { TicketMoreMenu };
