import { LucideLoaderCircle } from "lucide-react";
import React from "react";

const Spinner = () => {
return (
    <div className="flex flex-1 self-center justify-center items-center h-full">
        <LucideLoaderCircle 
        className="h-16 w-16 animate-spin text-primary"
        />
    </div>
);
};

export { Spinner };
