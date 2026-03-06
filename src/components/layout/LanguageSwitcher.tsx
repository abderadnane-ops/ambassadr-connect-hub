import { useState } from "react";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const languages = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "ar", label: "العربية", flag: "🇲🇦" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("fr");

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full hover:bg-muted transition-all duration-200 hover:scale-105"
      >
        <Globe className="w-5 h-5 text-muted-foreground" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-2 z-50 bg-card border border-border rounded-xl shadow-elevated overflow-hidden animate-scale-in min-w-[160px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => { setCurrent(lang.code); setOpen(false); }}
                className={cn(
                  "w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors hover:bg-muted/50",
                  current === lang.code && "bg-primary/10 text-primary font-medium"
                )}
              >
                <span className="text-base">{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
