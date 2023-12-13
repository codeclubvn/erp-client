import * as React from 'react'
import { ProductTable, BasicModal } from './components'
import { IconAddCircle, IconDrawstringBag } from '../../svgs'

export const Product = () => {
    const [open, setOpen] = React.useState(false)

    const handleOpenModal = () => {
        setOpen(true)
    }

    const handleCloseModal = () => {
        setOpen(false)
    }

    return (
        <>
            <div className="px-[calc((100%-1060px)/2)] pb-[75px]">
                <BasicModal
                    open={open}
                    handleClose={handleCloseModal}
                    handleOpen={handleOpenModal}
                />
                <div className="mt-[40px] flex items-center justify-between">
                    <div>
                        <h2 className="text-[28px] font-semibold leading-[32px]">
                            Sản phẩm
                        </h2>
                        <span className="text-[#858D92]">
                            Trang chủ • Sản phẩm
                        </span>
                    </div>
                    <div className="flex">
                        <h2 className="text-[16px] font-semibold leading-[32px]">
                            Danh sách sản phẩm
                        </h2>
                        <button
                            className="flex gap-[2px] rounded-[16px] bg-[#44AEC3] px-[14px] py-[17.25px] text-white"
                            onClick={handleOpenModal}
                        >
                            <IconAddCircle /> <span>Tạo sản phẩm</span>
                        </button>
                    </div>
                </div>
                <h2 className="mb-7 mt-[56px] flex text-[24px] font-semibold leading-[28px] text-[#485162]">
                    Tất cả sản phẩm 300sp
                    <IconDrawstringBag
                        width={'28px'}
                        height={'28px'}
                        className="ms-[24px]"
                    />
                </h2>
                <ProductTable handleOpen={handleOpenModal} />
            </div>
        </>
    )
}
