import { stat } from "fs";
import { ZodError } from "zod";

export type ActionState = {
  status?: "SUCCESS" | "ERROR";
  message: string;
  payload?: FormData;
  fieldErrors: Record<string, string[]>;
  timestamp?: number;
};

export const EMPTY_ACTION_STATE: ActionState = {
  message: "",
  fieldErrors: {},
  timestamp: Date.now(),
};
export const formErrorToActionState = (
  error: unknown,
  formData: FormData
): ActionState => {
  if (error instanceof ZodError) {
    console.log(error.flatten().fieldErrors);
    return {
      status: "error",
      message: "",
      fieldErrors: error.flatten().fieldErrors,
      payload: formData,
      timestamp: Date.now(),
    };
  } else if (error instanceof Error) {
    return {
      status: "error",
      message: error.message || "Something went wrong",
      fieldErrors: {},
      payload: formData,
      timestamp: Date.now(),
    };
  }
  return {
    status: "error",
    message: "Something went wrong",
    fieldErrors: {},
    payload: formData,
    timestamp: Date.now(),
  };
};

export const toActionState = (
  status: ActionState["status"],
  message: string,
  formData?: FormData
): ActionState => {
  return {
    status,
    message,
    fieldErrors: {},
    payload: formData,
    timestamp: Date.now(),
  };
};
