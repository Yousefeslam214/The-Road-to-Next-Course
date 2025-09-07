import { ActionState } from "./utils/to-action-state";

const FieldError = ({
  actionState,
  name,
}: {
  actionState: ActionState;
  name: string;
}) => {
  const errors = actionState.fieldErrors[name];

  if (!errors || errors.length === 0) return null;

  return <span className="text-sm text-red-500">{errors.join(", ")}</span>;
};

export { FieldError };
