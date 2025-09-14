import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from "@/components/ui/dropdown-menu"
import { Ticket } from '@prisma/client'
import { Button } from './ui/button'
import { LucideMoreHorizontal, LucideTrash } from 'lucide-react'
import { TICKET_STATUS_LABELS } from '@/features/ticket/constants'

type TicketMoreMenuProps ={
    ticket: Ticket
}

const TicketMoreMenu = ({ticket}: TicketMoreMenuProps) => {
 const deleteButton = <DropdownMenuItem>
    <LucideTrash className="mr-2 h-4 w-4"/>
    <span>Delete</span></DropdownMenuItem>
    return (
    <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" size="icon">
        <LucideMoreHorizontal className="h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56" side="right" >
        {deleteButton}
  </DropdownMenuContent>
  <DropdownMenuSeparator />
        <DropdownMenuRadioGroup >
            {Object.keys(TICKET_STATUS_LABELS).map((status) => (
                <DropdownMenuRadioItem key={status} value={status}>
                    {TICKET_STATUS_LABELS[status]}
                </DropdownMenuRadioItem>
            ))}
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      
</DropdownMenu>
  )
}

export  {TicketMoreMenu} 