import { Card } from './components/Card'
// import { routes } from './routes'

function App() {
    return (
        <div className="flex h-screen items-center justify-center">
            <Card
                price="7,350,000"
                title="Doanh thu tháng hiện tại"
                size="base"
                background="base"
                titleStyle="base"
                priceStyle="base"
                percentStyle="percentLow"
                content="Doanh thu"
                percentValue="1,29%"
            />
        </div>
    )
}

export default App
