import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from './Layout'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const queryClient = new QueryClient()

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <QueryClientProvider client={queryClient}>
                <Layout />
            </QueryClientProvider>
        </LocalizationProvider>
    )
}

export default App
