import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";

interface MentorContextType {
  isMentor: boolean;
  isLoadingRole: boolean;
  userRoles: string[];
}

const MentorContext = createContext<MentorContextType>({
  isMentor: false,
  isLoadingRole: true,
  userRoles: [],
});

export const MentorProvider = ({ children }: { children: ReactNode }) => {
  const [isMentor, setIsMentor] = useState(false);
  const [isLoadingRole, setIsLoadingRole] = useState(true);
  const [userRoles, setUserRoles] = useState<string[]>([]);

  useEffect(() => {
    const fetchRoles = async () => {
      setIsLoadingRole(true);
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const { data, error } = await supabase.rpc("get_user_roles", { _user_id: user.id });
          if (!error && data) {
            const roles = data as string[];
            setUserRoles(roles);
            setIsMentor(roles.includes("mentor"));
          }
        } else {
          // No authenticated user — check for demo mode
          const demoRole = localStorage.getItem("demo_role");
          if (demoRole === "mentor") {
            setIsMentor(true);
            setUserRoles(["ambassador", "mentor"]);
          } else {
            setIsMentor(false);
            setUserRoles(["ambassador"]);
          }
        }
      } catch {
        // Fallback to demo mode check
        const demoRole = localStorage.getItem("demo_role");
        if (demoRole === "mentor") {
          setIsMentor(true);
          setUserRoles(["ambassador", "mentor"]);
        } else {
          setIsMentor(false);
          setUserRoles(["ambassador"]);
        }
      }
      setIsLoadingRole(false);
    };

    fetchRoles();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      fetchRoles();
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <MentorContext.Provider value={{ isMentor, isLoadingRole, userRoles }}>
      {children}
    </MentorContext.Provider>
  );
};

export const useMentor = () => useContext(MentorContext);
