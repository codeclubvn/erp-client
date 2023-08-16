import { routes } from './routes'
import { DashboardCard } from './screens/HomePage/components'

function App() {
    const chart = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="45"
            viewBox="0 0 60 45"
            fill="none"
        >
            <rect y="12" width="12" height="33" rx="2" fill="#FFC13A" />
            <rect x="16" y="23" width="12" height="22" rx="2" fill="#FFC13A" />
            <rect x="32" width="12" height="45" rx="2" fill="#FFC13A" />
            <rect x="48" y="33" width="12" height="12" rx="2" fill="#FFC13A" />
        </svg>
    )

    return (
        <>
            <DashboardCard
                title="Doanh thu tháng hiện tại"
                titleStyle="base"
                price="7,350,000"
                priceStyle="base"
                percentStyle="percentLow"
                desc="Doanh thu"
                percentValue="1,29%"
                chart={chart}
            />
        </>
    )
}

export default App
