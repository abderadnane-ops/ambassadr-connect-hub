import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import NetworkPage from "./pages/NetworkPage";
import ResourcesPage from "./pages/ResourcesPage";
import HubPage from "./pages/HubPage";
import OnboardingPage from "./pages/OnboardingPage";
import EventApplicationPage from "./pages/EventApplicationPage";
import EventReportPage from "./pages/EventReportPage";
import ProfilePage from "./pages/ProfilePage";
import MentorValidationPage from "./pages/MentorValidationPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/network" element={<NetworkPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/hub" element={<HubPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/event-application" element={<EventApplicationPage />} />
            <Route path="/event-report" element={<EventReportPage />} />
            <Route path="/validation" element={<MentorValidationPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
