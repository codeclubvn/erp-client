import { IconPending, IconDelivering, IconDelivered } from '../../../svgs'

export const Statistics = () => {
    const cardCN =
        'relative flex pt-[12px] after:absolute after:right-[20px] after:top-0 after:block after:h-[80%] after:w-[1px]  flex-auto after:bg-[#D7DBE1]'

    return (
        <ul className="mt-4 grid grid-cols-3 gap-5">
            <li className="flex rounded-xl px-7 py-5 shadow-xl">
                <div className="flex-auto">
                    <h1 className="text-[#8D98AA]">Chờ xử lý</h1>
                    <p className="text-xl text-[#44AEC3]">300</p>
                </div>
                <div className="flex w-12 rounded-xl bg-[#44AEC3]">
                    <div className="m-auto p-1 mix-blend-screen brightness-125 contrast-125">
                        <IconPending />
                    </div>
                </div>
            </li>
            <li className="flex rounded-xl px-7 py-5 shadow-xl">
                <div className="flex-auto">
                    <h1 className="text-[#8D98AA]">Đang giao</h1>
                    <p className="text-xl text-[#87B7FF]">10</p>
                </div>
                <div className="flex w-12 rounded-xl bg-[#87B7FF]">
                    <div className="m-auto p-1 mix-blend-screen brightness-125 contrast-125">
                        <IconDelivering />
                    </div>
                </div>
            </li>
            <li className="flex rounded-xl px-7 py-5 shadow-xl">
                <div className="flex-auto">
                    <h1 className="text-[#8D98AA]">Đã giao</h1>
                    <p className="text-xl text-[#ffc13a]">47</p>
                </div>
                <div className="flex w-12 rounded-xl bg-[#ffc13a]">
                    <div className="m-auto p-1 mix-blend-screen brightness-125 contrast-125">
                        <IconDelivered />
                    </div>
                </div>
            </li>
        </ul>
    )
}
