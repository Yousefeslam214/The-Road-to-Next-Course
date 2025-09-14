import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { ticketPath } from "@/app/path";
import { TICKET_ICONS } from "../constants";
import { LucidePencil, LucideTrash, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Ticket } from "@prisma/client";
// import { prisma } from "@/lib/prisma";
import { deleteTicket } from "../actions/delete-ticket";
import { toCurrencyFromCent } from "@/utils/currency";
import React from "react";
import { TicketMoreMenu } from "@/components/ticket-more-menu";

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  console.log("ticket" + ticket.deadline);
  const detailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link href={ticketPath(ticket.id)} className="text-sm underline">
        <SquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );

  const editButton = (
    <Button variant="outline" size="icon" asChild>
      <Link
        prefetch
        href={ticketPath(ticket.id) + "/edit"}
        className="text-sm underline">
        <LucidePencil className="h-4 w-4" />
      </Link>
    </Button>
  );
  // const deleteButton = (
  //   <form action={deleteTicket.bind(null, ticket.id)}>
  //     <Button variant="outline" size="icon">
  //       <LucideTrash className="h-4 w-4" />
  //     </Button>
  //   </form>
  // );

  // const deleteButton = (
  //     <ConfirmDialog
  //     action={deleteTicket.bind(null, ticket.id)}
  //     trigger={
  //       <Button variant="outline" size="icon">
  //         <LucideTrash className="h-4 w-4" />
  //       </Button>
  //     }
  //   />
  // );

  const moreMenu = (
    <TicketMoreMenu
      ticket={ticket}
      trigger={
        <Button variant="outline" size="icon">
          <span>⋮</span>
        </Button>
      }
    />
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
        <CardFooter className="flex justify-between">
          <p className="text-sm text-muted-foreground">
            Deadline: {ticket.deadline}
          </p>
          <p className="text-sm text-muted-foreground">
            Bounty: ${toCurrencyFromCent(ticket.bounty)}
          </p>
        </CardFooter>
      </Card>
      <div className="flex flex-col gap-y-1">
        {isDetail ? (
          <>
            {editButton}
            {moreMenu}
          </>
        ) : (
          <>
            {detailButton}
            {editButton}
          </>
        )}
      </div>
    </div>
  );
};

export { TicketItem };
