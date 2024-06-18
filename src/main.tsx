import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser.ts");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Retry failed requests 3 times before showing an error
      retry: 3,
      // Refetch data every 1 minute while the component is focused
      refetchOnWindowFocus: true,
      // Refetch data if the component mounts and data is stale
      refetchOnMount: true,
      // Refetch data if the component reconnects and data is stale
      refetchOnReconnect: true,
      // Set the default stale time to 1 minute
      staleTime: 1000 * 60 * 1,
    },
    mutations: {
      // Retry failed mutations 3 times before showing an error
      retry: 3,
    },
  },
});
enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
});
