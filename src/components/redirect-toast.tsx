"use client";

import { toast } from "sonner";
import { useEffect } from "react";
import {  deleteCookieByKey, getCookieByKey } from "@/actions/cookies";

const RedirectToast = () => {
  useEffect(() => {
    const showCookieToast = async () => {
      const msg = await getCookieByKey("toast");
      console.log(msg);
      if (msg) {
        toast.success(msg);
         deleteCookieByKey("toast");
      }
    };
    showCookieToast();
  }, []);
  return null;
};

export { RedirectToast };
