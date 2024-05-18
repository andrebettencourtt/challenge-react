import React from "react";
import "./App.css";
import { Header } from "./components/header";
import { Card } from "./components/card";
import { Footer } from "./components/footer";

import { QueryClient, QueryClientProvider } from "react-query";
import { Products } from "./components/products";

const queryClient = new QueryClient();

function App() {
  return (
  <QueryClientProvider client={ queryClient }>
    <Header />
    <Products />
    <Footer />
  </QueryClientProvider>
  )
}

export default App;
