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
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminAmbassadorsPage from "./pages/admin/AdminAmbassadorsPage";
import AdminValidationsPage from "./pages/admin/AdminValidationsPage";
import AdminEventsPage from "./pages/admin/AdminEventsPage";
import AdminReportsPage from "./pages/admin/AdminReportsPage";
import AdminOpportunitiesPage from "./pages/admin/AdminOpportunitiesPage";
import AdminCommunicationsPage from "./pages/admin/AdminCommunicationsPage";
import AdminRegionsPage from "./pages/admin/AdminRegionsPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminSettingsPage from "./pages/admin/AdminSettingsPage";

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

          {/* Admin routes */}
          <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboardPage /></AdminLayout>} />
          <Route path="/admin/ambassadors" element={<AdminLayout><AdminAmbassadorsPage /></AdminLayout>} />
          <Route path="/admin/validations" element={<AdminLayout><AdminValidationsPage /></AdminLayout>} />
          <Route path="/admin/events" element={<AdminLayout><AdminEventsPage /></AdminLayout>} />
          <Route path="/admin/reports" element={<AdminLayout><AdminReportsPage /></AdminLayout>} />
          <Route path="/admin/opportunities" element={<AdminLayout><AdminOpportunitiesPage /></AdminLayout>} />
          <Route path="/admin/communications" element={<AdminLayout><AdminCommunicationsPage /></AdminLayout>} />
          <Route path="/admin/regions" element={<AdminLayout><AdminRegionsPage /></AdminLayout>} />
          <Route path="/admin/analytics" element={<AdminLayout><AdminAnalyticsPage /></AdminLayout>} />
          <Route path="/admin/settings" element={<AdminLayout><AdminSettingsPage /></AdminLayout>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
