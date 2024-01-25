import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { IconAddCircle } from '../../svgs'
import { ROUTES } from '../../constants'
import { Statistics, UserTable } from './components'
import UserContext from './components/UserContext'
import Detail from './components/Detail'
import { getCustomers } from '../../services/customerAPI'

interface Customer {
    full_name: string
    address: string
    phone_number: string
    email: string
}

interface UserProps {}

export const User: React.FC<UserProps> = () => {
    const [selectedCustomer, setSelectedCustomer] = useState<Customer>({})
    const [isPut, setIsPut] = useState(false)
    const [data, setData] = useState([])
    const { isShow, setIsShow } = useContext(UserContext)
    const handleUpdateUserTable = async () => {
        try {
            const updata = await getCustomers()
            setData(updata)
        } catch (error) {
            console.error('error', error)
        }
    }
    return (
        <>
            <div className=" relative px-[calc((100%-1060px)/2)] pb-[75px]">
                <h1 className=" text-[24px] font-semibold"> Khách Hàng</h1>
                <div className=" flex items-center justify-between">
                    <div role="presentation">
                        <Breadcrumbs separator="•" aria-label="breadcrumb">
                            <Link color="inherit" to="/">
                                Trang chủ
                            </Link>
                            <Typography color="text.primary">
                                Khách Hàng{' '}
                            </Typography>
                        </Breadcrumbs>
                    </div>
                </div>

                <div>
                    <div className="flex  items-center justify-between">
                        <div className="flex gap-5 text-xl  font-semibold text-[#485162] ">
                            <button>Danh sách khách hàng</button>
                        </div>
                        <Link to={ROUTES.CreateUser}>
                            <button className="flex gap-[2px] rounded-[16px] bg-[#44AEC3] px-[14px] py-[17.25px] text-white">
                                <IconAddCircle /> <span>Tạo khách hàng</span>
                            </button>
                        </Link>
                    </div>
                    <div className="my-3">
                        <Statistics />
                    </div>
                </div>
                <h1 className="mb-5 mt-[56px] flex text-[24px] font-semibold  text-[#485162] ">
                    Danh Sách Khách Hàng
                </h1>
                <UserTable
                    setSelectedCustomer={setSelectedCustomer}
                    data={data}
                    setData={setData}
                />

                <Detail
                    isShow={isShow}
                    selectedCustomer={selectedCustomer}
                    setIsShow={setIsShow}
                    setIsPut={setIsPut}
                    isPut={isPut}
                    onUpdateSelectedCustomer={handleUpdateUserTable}
                />
            </div>
        </>
    )
}
