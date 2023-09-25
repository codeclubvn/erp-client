import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from './Layout'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Layout />
        </QueryClientProvider>
    )
}

export default App
