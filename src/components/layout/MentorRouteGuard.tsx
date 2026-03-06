import { Navigate } from "react-router-dom";
import { useMentor } from "@/hooks/use-mentor";

interface MentorRouteGuardProps {
  children: React.ReactNode;
}

const MentorRouteGuard = ({ children }: MentorRouteGuardProps) => {
  const { isMentor, isLoadingRole } = useMentor();

  if (isLoadingRole) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isMentor) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default MentorRouteGuard;
