import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Contact from "@/pages/Contact";
import WhoWeAre from "@/pages/WhoWeAre";

function AppRoutes() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/who-we-are" component={WhoWeAre} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRoutes />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
