import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <div>StarCurry Website - Coming Soon</div>} />
      <Route component={() => <div>404 - Not Found</div>} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <Router />
      </div>
    </QueryClientProvider>
  );
}
