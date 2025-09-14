export type Ticket = {
  id: string;
  title: string;
  content: string;
  deadline: string;
  bounty: number;
  status: "OPEN" | "IN_PROGRESS" | "DONE";
};
