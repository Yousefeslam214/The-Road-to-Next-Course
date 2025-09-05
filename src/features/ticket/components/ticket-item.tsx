import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ticketPath } from "@/app/path";
import { TICKET_ICONS } from "../constants";
import { LucideTrash, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Ticket } from "@prisma/client";
// import { prisma } from "@/lib/prisma";
import { deleteTicket } from "../actions/delete-ticket";

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const detailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link prefetch href={ticketPath(ticket.id)} className="text-sm underline">
        <SquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );

  const deleteButton = (
    <form action={deleteTicket.bind(null, ticket.id)}>
      <Button variant="outline" size="icon">
        <LucideTrash className="h-4 w-4" />
      </Button>
    </form>
  );

  return (
    <div
      className={clsx(`w-full flex gap-x-1`, {
        "max-w-[580px]": isDetail,
        "max-w-[420px]": !isDetail,
      })}>
      <Card className="w-full">
        <CardHeader>
          <div className="text-xs">{TICKET_ICONS[ticket.status]}</div>
          <CardTitle className="text-lg font-semibold truncate">
            {ticket.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={clsx("whitespace-break-spaces", {
              "line-clamp-3": !isDetail,
            })}>
            {ticket.content}
          </span>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-y-1">
        {isDetail ? deleteButton : detailButton}
      </div>
    </div>
  );
};

export { TicketItem };
