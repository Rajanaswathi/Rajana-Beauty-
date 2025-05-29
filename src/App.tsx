
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Import Layout
import Index from "./pages/Index";
import ServicesPage from "./pages/Services";
import AboutUsPage from "./pages/AboutUs"; // Import AboutUsPage
import GalleryPage from "./pages/Gallery"; // Import GalleryPage
import BookingPage from "./pages/Booking"; // Import BookingPage
import ContactPage from "./pages/Contact"; // Import ContactPage
import NotFound from "./pages/NotFound";
// Import Firebase (optional here, but good for app-wide access if needed)
import { app as firebaseApp } from "./firebaseConfig"; 

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout> {/* Wrap Routes with Layout */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutUsPage />} /> {/* Updated route */}
            <Route path="/gallery" element={<GalleryPage />} /> {/* Updated route */}
            <Route path="/booking" element={<BookingPage />} /> {/* Updated route */}
            <Route path="/contact" element={<ContactPage />} /> {/* Updated route */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
