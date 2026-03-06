import { useNavigate } from "react-router-dom";
import { Users, ShieldCheck } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ConnexionMenuProps {
  children: React.ReactNode;
}

const ConnexionMenu = ({ children }: ConnexionMenuProps) => {
  const navigate = useNavigate();

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-72 p-2" align="end" sideOffset={8}>
        <div className="space-y-1">
          <button
            onClick={() => navigate("/login")}
            className="w-full flex items-start gap-3 rounded-xl p-3 hover:bg-accent transition-colors text-left"
          >
            <div className="w-9 h-9 rounded-lg bg-[#A6CE39]/15 flex items-center justify-center shrink-0 mt-0.5">
              <Users className="w-4.5 h-4.5 text-[#A6CE39]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Connexion ambassadeur</p>
              <p className="text-xs text-muted-foreground">Accéder à l'espace ambassadeur</p>
            </div>
          </button>
          <button
            onClick={() => navigate("/admin-login")}
            className="w-full flex items-start gap-3 rounded-xl p-3 hover:bg-accent transition-colors text-left"
          >
            <div className="w-9 h-9 rounded-lg bg-[#722D50]/10 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-4.5 h-4.5 text-[#722D50]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Connexion administration</p>
              <p className="text-xs text-muted-foreground">Accéder à l'espace d'administration</p>
            </div>
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ConnexionMenu;
