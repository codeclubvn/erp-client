import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
const data = [
    {
        date: '11/08',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        date: '12/08',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        date: '13/08',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        date: '14/08',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        date: '15/08',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        date: '16/08',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        date: '17/08',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
]
export const ChartLine = () => {
    const customYAxisTicks = [2000, 4000, 6000, 8000]
    return (
        <div className="relative flex w-full flex-col items-center rounded-xl bg-white">
            <div className="flex w-[80%] justify-between ">
                <div className="ml-4 mt-4 font-semibold text-[#858D92]">
                    Tổng thu chi tháng này
                    <p className="font-normal text-[#44AEC3]">
                        (+21%) so với tháng trước
                    </p>
                </div>
                <div className="flex items-end">
                    <p className="mr-4 flex items-center">
                        <span className="mr-1 block h-3 w-3 rounded-full bg-[#44AEC3]"></span>
                        Tổng thu
                    </p>
                    <p className="flex items-center">
                        <span className="mr-1 block h-3 w-3 rounded-full bg-[#FFB017]"></span>
                        Tổng chi
                    </p>
                </div>
            </div>
            <LineChart
                className="h-full"
                width={650}
                height={353}
                data={data}
                margin={{
                    top: 5,
                    right: 35,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis ticks={customYAxisTicks} />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#FFB017"
                    strokeWidth={3}
                    activeDot={{ r: 8 }}
                />
                <Line
                    type="monotone"
                    dataKey="uv"
                    strokeWidth={3}
                    stroke="#44AEC3"
                />
            </LineChart>
        </div>
    )
}
