import { Outlet } from "react-router-dom";
import { QueryClientProvider, QueryClient, Query } from "react-query";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;
