import { ImgDelivered, ImgPending, ImgCancel, ImgRefund } from '../../../svgs'

export const Statistics = () => {
    const cardCN =
        'relative flex pt-[12px] after:absolute after:right-[20px] after:top-0 after:block after:h-[80%] after:w-[1px]  flex-auto after:bg-[#D7DBE1]'

    return (
        <div className="mt-[35px] flex justify-between rounded-[24px] bg-white px-[24px] py-[46px] shadow-3xl">
            <div className={cardCN}>
                <ImgPending width={'85.5px'} height={'106px'} />
                <dl className="mt-[17px]">
                    <dt className="font-semibold leading-[14px] text-[#8D98AA]">
                        Tổng thu
                    </dt>
                    <dd className="font-[Nunito] text-[28px] font-semibold leading-[38px] text-[#02173F]">
                        2657
                    </dd>
                </dl>
            </div>
            <div className={cardCN}>
                <ImgDelivered width={'85.5px'} height={'106px'} />
                <dl className="mt-[17px]">
                    <dt className="font-semibold leading-[14px] text-[#8D98AA]">
                        Tổng chi
                    </dt>
                    <dd className="font-[Nunito] text-[28px] font-semibold leading-[38px] text-[#02173F]">
                        2,3.0k
                    </dd>
                </dl>
            </div>
            <div className={cardCN}>
                <ImgDelivered width={'85.5px'} height={'106px'} />
                <dl className="mt-[17px]">
                    <dt className="font-semibold leading-[14px] text-[#8D98AA]">
                        Số dư
                    </dt>
                    <dd className="font-[Nunito] text-[28px] font-semibold leading-[38px] text-[#02173F]">
                        2,3.0k
                    </dd>
                </dl>
            </div>
        </div>
    )
}
