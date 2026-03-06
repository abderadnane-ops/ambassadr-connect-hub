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
import MenteesPage from "./pages/MenteesPage";
import ValidationHistoryPage from "./pages/ValidationHistoryPage";
import RegionalActivityPage from "./pages/RegionalActivityPage";
import LandingPage from "./pages/LandingPage";
import { MentorProvider } from "./hooks/use-mentor";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import EventDetailPage from "./pages/EventDetailPage";
import NotFound from "./pages/NotFound";
import PitchDeckPage from "./pages/PitchDeckPage";
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminAmbassadorsPage from "./pages/admin/AdminAmbassadorsPage";
import AdminMentorsPage from "./pages/admin/AdminMentorsPage";
import AdminRolesPage from "./pages/admin/AdminRolesPage";
import AdminValidationsPage from "./pages/admin/AdminValidationsPage";
import AdminReportsPage from "./pages/admin/AdminReportsPage";
import AdminImpactPage from "./pages/admin/AdminImpactPage";
import AdminEventsPage from "./pages/admin/AdminEventsPage";
import AdminResourcesPage from "./pages/admin/AdminResourcesPage";
import AdminAnnouncementsPage from "./pages/admin/AdminAnnouncementsPage";
import AdminRecognitionPage from "./pages/admin/AdminRecognitionPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminSettingsPage from "./pages/admin/AdminSettingsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <MentorProvider>
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
          <Route element={<AppLayout><MenteesPage /></AppLayout>} path="/mentees" />
          <Route element={<AppLayout><ValidationHistoryPage /></AppLayout>} path="/validation-history" />
          <Route element={<AppLayout><RegionalActivityPage /></AppLayout>} path="/regional-activity" />
          <Route element={<AppLayout><EventDetailPage /></AppLayout>} path="/event/:id" />

          {/* Admin routes */}
          <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboardPage /></AdminLayout>} />
          <Route path="/admin/ambassadors" element={<AdminLayout><AdminAmbassadorsPage /></AdminLayout>} />
          <Route path="/admin/mentors" element={<AdminLayout><AdminMentorsPage /></AdminLayout>} />
          <Route path="/admin/roles" element={<AdminLayout><AdminRolesPage /></AdminLayout>} />
          <Route path="/admin/validations" element={<AdminLayout><AdminValidationsPage /></AdminLayout>} />
          <Route path="/admin/reports" element={<AdminLayout><AdminReportsPage /></AdminLayout>} />
          <Route path="/admin/impact" element={<AdminLayout><AdminImpactPage /></AdminLayout>} />
          <Route path="/admin/events" element={<AdminLayout><AdminEventsPage /></AdminLayout>} />
          <Route path="/admin/resources" element={<AdminLayout><AdminResourcesPage /></AdminLayout>} />
          <Route path="/admin/announcements" element={<AdminLayout><AdminAnnouncementsPage /></AdminLayout>} />
          <Route path="/admin/recognition" element={<AdminLayout><AdminRecognitionPage /></AdminLayout>} />
          <Route path="/admin/analytics" element={<AdminLayout><AdminAnalyticsPage /></AdminLayout>} />
          <Route path="/admin/settings" element={<AdminLayout><AdminSettingsPage /></AdminLayout>} />

          <Route path="/pitch" element={<PitchDeckPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </MentorProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
