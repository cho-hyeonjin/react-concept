import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from "./basic/components/Products";

const queryClient = new QueryClient();

export default function AppReactQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <Products />
    </QueryClientProvider>
  );
}
