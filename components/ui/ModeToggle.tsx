"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme } = useTheme();
  return (
    <div>
      <div className=" hidden dark:block cursor-pointer transition-all duration-300 p-2 hover:bg-foreground/10  rounded-sm ">
        <div onClick={() => setTheme("light")}>
          <Sun size={15} />
        </div>
      </div>
      <div className="block dark:hidden cursor-pointer transition-all duration-300 p-2 hover:bg-foreground/10  rounded-sm ">
        <div onClick={() => setTheme("dark")}>
          <Moon size={15} />
        </div>
      </div>
    </div>
  );
}
