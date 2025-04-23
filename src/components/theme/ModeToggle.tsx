
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // On component mount, get the current theme
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  // Update the DOM when the theme changes
  const setMode = (mode: "light" | "dark") => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    setTheme(mode);
    localStorage.setItem("theme", mode);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="relative duration-300 hover:bg-accent/80 hover:scale-105"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end"
        className="animate-in zoom-in-90 duration-300"
      >
        <DropdownMenuItem 
          onClick={() => setMode("light")}
          className="flex items-center gap-2 cursor-pointer transition-colors hover:bg-accent/80 focus:bg-accent/80"
        >
          <Sun className="h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setMode("dark")}
          className="flex items-center gap-2 cursor-pointer transition-colors hover:bg-accent/80 focus:bg-accent/80"
        >
          <Moon className="h-4 w-4" />
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
