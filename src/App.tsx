import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import AyahReflection from "./pages/AyahReflection.tsx";
import ReflectionWrite from "./pages/ReflectionWrite.tsx";
import ActionStep from "./pages/ActionStep.tsx";
import ReflectionComplete from "./pages/ReflectionComplete.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ayah" element={<AyahReflection />} />
          <Route path="/reflect" element={<ReflectionWrite />} />
          <Route path="/action" element={<ActionStep />} />
          <Route path="/complete" element={<ReflectionComplete />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
