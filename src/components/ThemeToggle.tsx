import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";

export const ThemeToggle = () => {
  const { isDark, toggle } = useDarkMode();

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-xl bg-muted transition-colors hover:bg-muted/80"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};
