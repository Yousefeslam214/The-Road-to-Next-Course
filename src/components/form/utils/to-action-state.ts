import { ZodError } from "zod";

export type ActionState = {
  message: string;
  payload?: FormData;
  fieldErrors: Record<string, string[]>;
};
export const formErrorToActionState = (
  error: unknown,
  //   fieldErrors?: Record<string, string[]>,
  formData: FormData
): ActionState => {
  if (error instanceof ZodError) {
    console.log(error.flatten().fieldErrors);
    return {
      message: "",
      fieldErrors: error.flatten().fieldErrors,
      payload: formData,
    };
  } else if (error instanceof Error) {
    return {
      message: error.message || "Something went wrong",
      fieldErrors: {},
      payload: formData,
    };
  }
  return {
    message: "Something went wrong",
    fieldErrors: {},
    payload: formData,
  };
};
