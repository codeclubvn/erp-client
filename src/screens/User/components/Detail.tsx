import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import CloseIcon from '@mui/icons-material/Close'

import { ROUTES } from '../../../constants'

import { useEffect, useState } from 'react'
import { putCustomer } from '../../../services/customerAPI'

function Detail({
    isShow,
    selectedCustomer,
    setIsShow,
    isPut,
    setIsPut,
    onUpdateSelectedCustomer,
}) {
    const [customerData, setCustomerData] = useState({
        id: '',
        full_name: '',
        phone_number: '',
        address: '',
        email: '',
    })
    console.log(selectedCustomer)
    useEffect(() => {
        setCustomerData({
            id: selectedCustomer.id,
            full_name: selectedCustomer.full_name,
            phone_number: selectedCustomer.phone_number,
            address: selectedCustomer.address,
            email: selectedCustomer.email,
        })
    }, [selectedCustomer])

    const updateCustomer = async () => {
        try {
            await putCustomer(customerData)
            onUpdateSelectedCustomer()
            setCustomerData((prevData) => ({
                ...prevData,
            }))
        } catch (error) {
            console.error('Error', error)
        }
    }

    const handleUpDate = () => {
        setIsPut(false)
        updateCustomer()
    }

    const handleSetting = () => {
        setIsPut(true)
    }
    const handleOnchange = (field, value) => {
        setCustomerData((prevData) => ({
            ...prevData,
            [field]: value,
        }))
    }

    return (
        <div
            className={` fixed top-[90px]  z-50   justify-center ${
                isShow ? 'flex' : 'hidden'
            } transition-all duration-300 ease-in-out `}
        >
            <div className=" h-[600px] w-[813px] rounded-lg bg-[#F8F9FB] p-8 shadow-lg">
                <div className="flex items-center justify-around">
                    <div>
                        <h1 className=" text-[24px] font-semibold">
                            {' '}
                            Khách Hàng
                        </h1>

                        <div role="presentation">
                            <Breadcrumbs separator="•" aria-label="breadcrumb">
                                <Link color="inherit" to="/">
                                    Trang chủ
                                </Link>
                                <Link color="inherit" to={ROUTES.User}>
                                    Khách Hàng
                                </Link>
                                <Typography color="text.primary">
                                    Thông Tin Khách Hàng{' '}
                                </Typography>
                            </Breadcrumbs>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            setIsShow(false)
                            setIsPut(false)
                        }}
                    >
                        <CloseIcon />
                    </button>
                </div>
                <div className="mt-[30px] grid h-[304px] w-[725px] grid-cols-5 rounded-lg  bg-white p-9 shadow-lg ">
                    <div className="col-span-2">
                        <img
                            className="h-[160px] w-[160px] rounded-full"
                            src="https://nads.1cdn.vn/2023/04/05/W_25-anh-em.jpg"
                            alt=""
                        />
                    </div>
                    <div className="col-span-3  space-y-5 text-[18px] font-semibold text-[#858D92] ">
                        <div className="flex items-center justify-between ">
                            <h1 className=" text-[30px] font-bold text-black">
                                {isPut ? (
                                    <input
                                        className="w-[200px]  border-b-2 border-[#76C6D1] outline-none"
                                        type="text"
                                        value={customerData.full_name}
                                        onChange={(e) =>
                                            handleOnchange(
                                                'full_name',
                                                e.target.value,
                                            )
                                        }
                                    />
                                ) : (
                                    customerData.full_name
                                )}
                            </h1>

                            {isPut ? (
                                <button
                                    onClick={handleUpDate}
                                    className=" h-[40px] w-[113px] shrink-0 rounded-lg text-[16px] text-[#76C6D1] ring-1 ring-[#76C6D1] hover:bg-[#76C6D1] hover:text-white"
                                >
                                    Cập nhật
                                </button>
                            ) : (
                                <button
                                    onClick={handleSetting}
                                    className=" h-[40px] w-[113px] shrink-0 rounded-lg text-[16px] text-[#76C6D1] ring-1 ring-[#76C6D1] hover:bg-[#76C6D1] hover:text-white"
                                >
                                    Chỉnh Sửa
                                </button>
                            )}
                        </div>
                        <div>
                            <span className="text-[18px] font-semibold text-[#44AEC3]">
                                Địa chỉ :
                            </span>

                            {isPut ? (
                                <input
                                    className="w-[200px]  border-b-2 border-[#76C6D1] outline-none  "
                                    type="text "
                                    value={customerData.address}
                                    onChange={(e) =>
                                        handleOnchange(
                                            'address',
                                            e.target.value,
                                        )
                                    }
                                />
                            ) : (
                                customerData.address
                            )}
                        </div>
                        <div>
                            <span className="text-[18px] font-semibold text-[#44AEC3]">
                                Số điện thoại :
                            </span>
                            {isPut ? (
                                <input
                                    className="w-[200px]  border-b-2 border-[#76C6D1] outline-none  "
                                    type="text "
                                    value={customerData.phone_number}
                                    onChange={(e) =>
                                        handleOnchange(
                                            'phone_number',
                                            e.target.value,
                                        )
                                    }
                                />
                            ) : (
                                customerData.phone_number
                            )}
                        </div>
                        <div>
                            <span className="text-[18px] font-semibold text-[#44AEC3]">
                                Email:
                            </span>
                            {isPut ? (
                                <input
                                    className="w-[200px]  border-b-2 border-[#76C6D1] outline-none  "
                                    type="text "
                                    value={customerData.email}
                                    onChange={(e) =>
                                        handleOnchange('email', e.target.value)
                                    }
                                />
                            ) : (
                                customerData.email
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-7 flex gap-8">
                    <div className="h-[130px] w-[220px] rounded-lg bg-white p-6 shadow-lg ">
                        <div className="text-[16px] font-semibold text-[#858D92]">
                            Tổng số đơn mua{' '}
                        </div>
                        <div className="text-[28px] font-medium">
                            {selectedCustomer.total_order}{' '}
                        </div>
                        <div className="text-[14px] font-normal text-[#858D92]">
                            Đơn hàng{' '}
                        </div>
                    </div>
                    <div className="h-[130px] w-[220px] rounded-lg bg-white p-6 shadow-lg ">
                        <div className="text-[16px] font-semibold text-[#858D92]">
                            Tổng trả
                        </div>
                        <div className="text-[28px] font-medium">
                            {selectedCustomer.total_paid}{' '}
                        </div>
                        <div className="text-[14px] font-normal text-[#858D92]">
                            Số tiền khách đã mua
                        </div>
                    </div>
                    <div className="h-[130px] w-[220px] rounded-lg bg-white p-6 shadow-lg ">
                        <div className="text-[16px] font-semibold text-[#858D92]">
                            Tổng nợ
                        </div>
                        <div className="text-[28px] font-medium">
                            {selectedCustomer.total_debt}{' '}
                        </div>
                        <div className="text-[14px] font-normal text-[#858D92]">
                            Số tiền khách nợ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail
