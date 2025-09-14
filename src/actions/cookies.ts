"use server";
import { cookies } from "next/headers";

export const getCookieByKey = async (key: string) => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(key);
  if (!cookie) return null;
  return cookie.value;
};

export async function setCookieByKey(key: string, value: string) {
  cookies().set(key, value);
}

export async function deleteCookieByKey(key: string) {
  cookies().delete(key);
}
