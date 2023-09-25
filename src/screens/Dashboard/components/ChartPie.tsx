import { PieChart, Pie, Cell } from 'recharts'

const data = [
    { name: 'Group A', value: 243 },
    { name: 'Group B', value: 418 },
    { name: 'Group C', value: 108 },
]
const COLORS = ['#44AEC3', '#629AEE', '#FFC13A']

export const ChartPie = () => {
    return (
        <div className="relative flex items-center justify-center">
            <span className="absolute text-3xl font-semibold">76%</span>
            <PieChart width={200} height={200}>
                <Pie
                    data={data}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((_entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
            </PieChart>
        </div>
    )
}
