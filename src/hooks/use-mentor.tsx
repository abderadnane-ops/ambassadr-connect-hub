import { createContext, useContext, useState, ReactNode } from "react";

interface MentorContextType {
  isMentor: boolean;
  setIsMentor: (v: boolean) => void;
}

const MentorContext = createContext<MentorContextType>({ isMentor: false, setIsMentor: () => {} });

export const MentorProvider = ({ children }: { children: ReactNode }) => {
  const [isMentor, setIsMentor] = useState(true); // default true for demo
  return (
    <MentorContext.Provider value={{ isMentor, setIsMentor }}>
      {children}
    </MentorContext.Provider>
  );
};

export const useMentor = () => useContext(MentorContext);
