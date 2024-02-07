import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { Login } from './components/Login';
import { Form } from './components/Form';
import "./App.css";

const queryClient = new QueryClient()

export const App: React.FC = () => {
    const queryParameters = new URLSearchParams(window.location.search)
    const isLoggedIn = queryParameters.get("isLoggedIn")

    return (
        <QueryClientProvider client={queryClient}>
            {isLoggedIn === 'true' &&
                <Form />
            }
            {isLoggedIn !== 'true' &&
                <Login />
            }
        </QueryClientProvider>
    )
}
