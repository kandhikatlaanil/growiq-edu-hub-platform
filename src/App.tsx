import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import DemoPage from "./pages/DemoPage";
import ContactPage from "./pages/ContactPage";
import FeaturesPage from "./pages/FeaturesPage";
import SchoolManagement from "./pages/SchoolManagement";
import CollegeManagement from "./pages/college-management";
import ELearning from "./pages/e-learning";
import NotFound from "./pages/NotFound";
import About from "./pages/about";
import InsideGrowIQ from "./pages/inside-growiq";
import TechnologyStack from "./pages/technology-stack";
import Innovation from "./pages/innovation";
import LifeAtGrowIQ from "./pages/life-at-growiq";
import Schools from "./pages/industries/schools";
import Colleges from "./pages/industries/colleges";
import Coaching from "./pages/industries/coaching";
import Government from "./pages/industries/government";
import Corporate from "./pages/industries/corporate";
import Whitepapers from "./pages/resources/whitepapers";
import Help from "./pages/resources/help";
import AuthPage from "./pages/AuthPage";
import ControlSystemLayout from "./components/control-system/Layout";
import Dashboard from "./pages/control-system/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/school-management" element={<SchoolManagement />} />
          <Route path="/college-management" element={<CollegeManagement />} />
          <Route path="/e-learning" element={<ELearning />} />
          <Route path="/about" element={<About />} />
          <Route path="/inside-growiq" element={<InsideGrowIQ />} />
          <Route path="/technology-stack" element={<TechnologyStack />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/life-at-growiq" element={<LifeAtGrowIQ />} />
          <Route path="/industries/schools" element={<Schools />} />
          <Route path="/industries/colleges" element={<Colleges />} />
          <Route path="/industries/coaching" element={<Coaching />} />
          <Route path="/industries/government" element={<Government />} />
          <Route path="/industries/corporate" element={<Corporate />} />
          <Route path="/resources/whitepapers" element={<Whitepapers />} />
          <Route path="/resources/help" element={<Help />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/control-system" element={<ControlSystemLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
