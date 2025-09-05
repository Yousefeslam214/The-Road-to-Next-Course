import React from "react";
import Link from "next/link";
import { homePath, ticketsPath } from "@/app/path";
import { buttonVariants } from "./ui/button";
import ThemeSwitcher from "./theme/theme-switcher";
import { LucideKanban } from "lucide-react";

const Header: React.FC = () => (
  <nav
    className="
            supports-backdrop-blur:bg-background/60 
            
            fixed left-0 right-0 z-20 border-b
            bg-background/95 backdrop-blur w-full
            flex py-2.5 px-5 justify-between
        ">
    <div>
      <Link
        href={homePath()}
        className={buttonVariants({ variant: "ghost" })}>
       <LucideKanban />
       <h1 className="ml-2 text-lg font-bold">Ticket App</h1>
      </Link>
    </div>
    <div>
      <div className="flex items-center space-x-2">
        <ThemeSwitcher />
        <Link
          href={ticketsPath()}
          className={buttonVariants({ variant: "default" })}>
        Tickets
      </Link>
          </div>
    </div>
  </nav>
);

export default Header;
