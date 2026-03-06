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
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import EventDetailPage from "./pages/EventDetailPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/admin-login" element={<AdminLoginPage />} />
          <Route element={<AppLayout><Dashboard /></AppLayout>} path="/dashboard" />
          <Route element={<AppLayout><NetworkPage /></AppLayout>} path="/network" />
          <Route element={<AppLayout><ResourcesPage /></AppLayout>} path="/resources" />
          <Route element={<AppLayout><HubPage /></AppLayout>} path="/hub" />
          <Route element={<AppLayout><ProfilePage /></AppLayout>} path="/profile" />
          <Route element={<AppLayout><OnboardingPage /></AppLayout>} path="/onboarding" />
          <Route element={<AppLayout><EventApplicationPage /></AppLayout>} path="/event-application" />
          <Route element={<AppLayout><EventReportPage /></AppLayout>} path="/event-report" />
          <Route element={<AppLayout><MentorValidationPage /></AppLayout>} path="/validation" />
          <Route element={<AppLayout><EventDetailPage /></AppLayout>} path="/event/:id" />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
