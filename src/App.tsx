import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Login } from "./components/Login";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import "./App.css";

const queryClient = new QueryClient();

export const App: React.FC = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const isLoggedIn = queryParameters.get("isLoggedIn");

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      {isLoggedIn === "true" && <Form />}
      {isLoggedIn !== "true" && <Login />}
    </QueryClientProvider>
  );
};
