"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { LucideMoon, LucideSun } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        variant="outline"
        size="icon">
        {theme === "light" ? <LucideSun /> : <LucideMoon />}
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
