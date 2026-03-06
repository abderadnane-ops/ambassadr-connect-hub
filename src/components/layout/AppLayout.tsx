import TopBar from "./TopBar";
import BottomNav from "./BottomNav";
import FloatingActionButton from "./FloatingActionButton";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <main className="pt-14 pb-20">{children}</main>
      <FloatingActionButton />
      <BottomNav />
    </div>
  );
};

export default AppLayout;
