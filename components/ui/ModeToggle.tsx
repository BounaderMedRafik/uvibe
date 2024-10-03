"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme } = useTheme();
  return (
    <div>
      <div
        onClick={() => setTheme("light")}
        className=" hidden dark:block cursor-pointer transition-all duration-300 p-2 hover:bg-foreground/10  rounded-sm "
      >
        <div>
          <Sun size={15} />
        </div>
      </div>
      <div
        onClick={() => setTheme("dark")}
        className="block dark:hidden cursor-pointer transition-all duration-300 p-2 hover:bg-foreground/10  rounded-sm "
      >
        <div>
          <Moon size={15} />
        </div>
      </div>
    </div>
  );
}
