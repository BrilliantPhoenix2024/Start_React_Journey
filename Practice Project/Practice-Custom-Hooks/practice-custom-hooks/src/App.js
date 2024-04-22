import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cat from "./Components/CatComponent/CatComponent";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: true },
    },
  });
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Cat />
      </QueryClientProvider>
    </div>
  );
}

export default App;
