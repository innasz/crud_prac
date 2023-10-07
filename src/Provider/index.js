import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

export const ReactQueryProvider = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
