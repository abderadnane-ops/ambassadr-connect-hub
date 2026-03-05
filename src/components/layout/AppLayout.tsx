import TopBar from "./TopBar";
import BottomNav from "./BottomNav";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <main className="pt-14 pb-20">{children}</main>
      <BottomNav />
    </div>
  );
};

export default AppLayout;
