"use client";

import { toast } from "sonner";
import { useEffect } from "react";
import { deleteCookieByKey, getCookieByKey } from "@/actions/cookies";
import { usePathname } from "next/navigation";

const RedirectToast = () => {
  const pathname = usePathname();

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
  }, [pathname]);
  return null;
};

export { RedirectToast };
