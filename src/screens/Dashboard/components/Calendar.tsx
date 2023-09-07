import { useState } from 'react'
import { DropIcon } from '../../../icons/AccountIcon'
import { DayPicker } from './DayPicker'
import { Link } from 'react-router-dom'
const time = [
    {
        hour: '2:00 pm',
        des: ' Đơn hàng quần áo số 1',
    },
    {
        hour: '2:00 pm',
        des: ' Đơn hàng quần áo số 1',
    },
    {
        hour: '2:00 pm',
        des: ' Đơn hàng quần áo số 1',
    },
    {
        hour: '2:00 pm',
        des: ' Đơn hàng quần áo số 1',
    },
]
const COLORS = ['#44AEC3', '#629AEE', '#FFC13A']
export const Calendar = () => {
    const [openDate, setOpenDate] = useState(false)
    const handleOpenDate = () => {
        setOpenDate(!openDate)
    }
    return (
        <div className=" mt-6 h-[515px] rounded-2xl px-2 pb-4 text-center shadow-xl">
            <div className="bg-[#EAF3F4]">
                <div className="flex items-center justify-between  rounded-xl bg-[#F8F9FB] px-2 py-2 shadow-2xl">
                    <h2 className="font-semibold">ĐƠN GẦN ĐÂY</h2>
                    <div
                        onClick={handleOpenDate}
                        className="relative flex cursor-pointer items-center gap-2"
                    >
                        <button>Tháng 6</button>
                        <DropIcon />
                        {openDate ? <DayPicker /> : ''}
                    </div>
                </div>
                <div className="mt-4 flex justify-between rounded-xl px-4 pb-2">
                    <div className="rounded-md  bg-[#44AEC3] px-1 py-2 text-white">
                        <p>Sun</p>
                        <span className="text-xl">12</span>
                    </div>
                    <div className="  rounded-md px-1 py-2">
                        <p>Mon</p>
                        <span className="text-xl">12</span>
                    </div>
                    <div className="  rounded-md px-1 py-2">
                        <p>Tue</p>
                        <span className="text-xl">12</span>
                    </div>
                    <div className="  rounded-md px-1 py-2">
                        <p>Wed</p>
                        <span className="text-xl">12</span>
                    </div>
                    <div className="  rounded-md px-1 py-2">
                        <p>Thu</p>
                        <span className="text-xl">12</span>
                    </div>
                    <div className="  rounded-md px-1 py-2">
                        <p>Fri</p>
                        <span className="text-xl">12</span>
                    </div>
                    <div className="  rounded-md px-1 py-2">
                        <p>Sat</p>
                        <span className="text-xl ">12</span>
                    </div>
                </div>
            </div>
            <div className="px-4">
                <div className="mt-4 flex items-center justify-between text-xl font-semibold">
                    <h1>13-04-2023</h1>
                    <span className="text-3xl">...</span>
                </div>
                <ul>
                    {time.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center border-b-[1px] border-dashed py-3"
                        >
                            <p>{item.hour}</p>
                            <span
                                className={`mx-2 block h-2 w-2 rounded-full bg-[${
                                    COLORS[index % COLORS.length]
                                }]`}
                            ></span>
                            <p>{item.des}</p>
                        </li>
                    ))}
                </ul>
                <p className="mt-4 text-right text-[#44AEC3] underline">
                    <Link to="/order" className="">
                        Xem chi tiết
                    </Link>
                </p>
            </div>
        </div>
    )
}
