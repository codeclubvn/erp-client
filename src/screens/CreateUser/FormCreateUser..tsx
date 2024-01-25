import { useState } from 'react'
import Input from './components/Input'
import { CreateCustomers } from '../../services/customerAPI'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants'

function FormCreateUser() {
    const [nameUser, setNameUser] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')

    const CreateCustomer = async () => {
        try {
            const res = await CreateCustomers({
                full_name: nameUser,
                address: address,
                phone_number: phone,
                email: email,
            })
            return res
        } catch (error) {
            console.error('error:', error)
        }
    }

    const handleCreateCustomer = () => {
        if (nameUser === '' || phone === '' || address === '' || email === '') {
            alert('vui lòng tạo khách hàng ')
        } else {
            CreateCustomer()
            alert('Đã tạo khách hàng thành công')
            handleCancel()
        }
    }

    const handleCancel = () => {
        setNameUser('')
        setPhone('')
        setAddress('')
        setEmail('')
    }
    return (
        <div className="mt-[40px] h-[937px] w-[1071px] rounded-2xl bg-white p-8 shadow-md">
            <div className="grid grid-cols-3">
                <div className=" ext-[20px] col-span-1 font-semibold ">
                    Thông tin chung
                </div>
                <div className="col-span-2">
                    <Input
                        width={'w-[276px]'}
                        label={'Tên Khách Hàng'}
                        type={'text'}
                        value={nameUser}
                        onChange={(e) => setNameUser(e.target.value)}
                    />
                    <div className="mt-3 flex items-center">
                        <div>
                            <Input
                                width={'w-[276px]'}
                                label={'Số Điện Thoại '}
                                type={'text'}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="ml-8"></div>
                    </div>
                    <Input
                        width={'w-[543px]'}
                        label={'Địa chỉ'}
                        type={'text'}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <Input
                        width={'w-[543px]'}
                        label={'Email'}
                        type={'text'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>

            <div className=" border-t-1 mt-11 border border-dashed"></div>

            <div className="mt-11 flex gap-8 text-[16px] font-semibold">
                <Link to={ROUTES.User}>
                    <button
                        onClick={handleCancel}
                        className="flex h-[48px] w-[110px] items-center justify-center gap-[2px] rounded-[16px] px-[14px] py-[17.25px] text-[#44AEC3] ring-1   ring-[#44AEC3] hover:bg-[#44AEC3] hover:text-white"
                    >
                        <span>Hủy</span>
                    </button>{' '}
                </Link>

                <button
                    onClick={handleCreateCustomer}
                    className="flex h-[48px] w-[154px] items-center gap-[2px] rounded-[16px] bg-[#44AEC3] px-[14px] py-[17.25px] text-white"
                >
                    <span>Tạo Khách Hàng</span>
                </button>
            </div>
        </div>
    )
}

export default FormCreateUser
