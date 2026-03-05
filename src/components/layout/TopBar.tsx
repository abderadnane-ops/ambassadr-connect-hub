import { Search, Bell } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import citizinLogo from "@/assets/citizin-logo.png";

const TopBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="flex items-center justify-between px-4 h-14">
        {searchOpen ? (
          <div className="flex-1 flex items-center gap-2 animate-fade-in">
            <Input
              placeholder="Rechercher..."
              className="h-9 bg-muted/50 border-none text-sm"
              autoFocus
              onBlur={() => setSearchOpen(false)}
            />
          </div>
        ) : (
          <>
            <div className="flex items-center gap-1.5">
              <img src={citizinLogo} alt="CitiZin" className="h-7 w-auto object-contain" />
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <Search className="w-5 h-5 text-muted-foreground" />
              </button>
              <button className="p-2 rounded-full hover:bg-muted transition-colors relative">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-secondary rounded-full" />
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default TopBar;
