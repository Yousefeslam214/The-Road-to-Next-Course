import React from "react";
import { ActionState } from "./utils/to-action-state";
import { useActionFeedback } from "./hooks/use-action-feedback";
import { toast } from "sonner";

type FormProps = {
  action: (payload: FormData) => void;
  actionState?: ActionState;
  children: React.ReactNode;
};

const Form = ({ action, actionState, children }: FormProps) => {
  if (actionState.message) {
    useActionFeedback(actionState, {
      onSuccess: ({ actionState }) => {
        toast.success(actionState.message);
      },
      onError: ({ actionState }) => {
        toast.error(actionState.message);
      },
    });
  }
  return (
    <form action={action} className="flex flex-col gap-y-2">
      {children}
    </form>
  );
};

export default Form;
