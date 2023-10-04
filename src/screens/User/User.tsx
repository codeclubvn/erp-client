import { useForm } from 'react-hook-form'
import { LinkDerectory } from '../../components/LinkDerectory'
import { useState } from 'react'
import { handleKeyPress } from '../../constants/handleKeyPressNumber'
import { IconImage, IconStar } from '../../svgs'
interface UserProps {
    nameUser: string
    numberPhone: number
    userProperty?: string
    location: string
    image?: string
}
export const User = () => {
    const [selectedFileURL, setSelectedFileURL] = useState('')
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<UserProps>()
    const onSubmit = (data: UserProps) => {
        if (selectedFileURL) {
            data.image = selectedFileURL
        }
        console.log(data)

        reset()
    }
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            if (selectedFileURL) {
                URL.revokeObjectURL(selectedFileURL)
            }
            const file = event.target.files[0]
            const url = URL.createObjectURL(file)
            setSelectedFileURL(url)
        }
    }

    function capitalizeFirstLetter(value: string) {
        return value.charAt(0).toUpperCase() + value.slice(1)
    }
    return (
        <div className="mb-4 h-full rounded-2xl bg-[#f8f9fb] px-6 pt-8">
            <LinkDerectory />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-4  rounded-xl bg-white py-4 pl-4"
            >
                <div className="grid grid-cols-3 border-b-[1px] border-dashed">
                    <p className="text-[20px] font-semibold">Thông tin chung</p>
                    <div className="col-span-2 w-[80%]">
                        <div>
                            <label htmlFor="" className="flex items-center">
                                Tên khách hàng <IconStar className="ml-2" />
                            </label>
                            <input
                                {...register('nameUser', {
                                    required: true,
                                    setValueAs: (value) =>
                                        capitalizeFirstLetter(value),
                                })}
                                className="my-2 w-full rounded-2xl border-[1px] px-3 py-1 outline-none"
                                type="text"
                                autoComplete="off"
                            />
                            {errors?.nameUser?.type === 'required' && (
                                <p className="mb-1 text-[10px] font-semibold text-red-600">
                                    Nhập tên khách hàng
                                </p>
                            )}
                        </div>
                        <div className="flex w-full justify-between gap-4">
                            <div className="flex-1">
                                <label htmlFor="" className="flex items-center">
                                    Số điện thoại <IconStar className="ml-2" />
                                </label>
                                <input
                                    {...register('numberPhone', {
                                        required: true,
                                        minLength: 10,
                                    })}
                                    type="text"
                                    className="my-2 w-full rounded-2xl border-[1px] px-2 py-1 outline-none"
                                    autoComplete="off"
                                    onKeyPress={handleKeyPress}
                                />
                                {errors?.numberPhone?.type === 'required' && (
                                    <p className="mb-1 text-[10px] font-semibold text-red-600">
                                        Nhập số điện thoại
                                    </p>
                                )}
                                {errors?.numberPhone?.type === 'minLength' && (
                                    <p className="mb-1 text-[10px] font-semibold text-red-600">
                                        Nhập sai số điện thoại
                                    </p>
                                )}
                            </div>
                            <div className="flex-1">
                                <label htmlFor="" className="flex items-center">
                                    Phân loại khách hàng
                                </label>
                                <select
                                    id=""
                                    {...register('userProperty')}
                                    className="my-2 w-full rounded-2xl  border-[1px] px-2 py-1 outline-none"
                                >
                                    <option value="" disabled>
                                        --Chọn phân loại khách hàng--
                                    </option>
                                    <option value="Khách hàng thân thiết">
                                        Khách hàng thân thiết
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="" className="flex items-center">
                                Địa chỉ <IconStar className="ml-2" />
                            </label>
                            <input
                                {...register('location', {
                                    required: true,
                                })}
                                className="my-2 w-full rounded-2xl border-[1px] px-3 py-1 outline-none"
                                autoComplete="off"
                                type="text"
                            />
                            {errors?.location?.type === 'required' && (
                                <p className="mb-1 text-[10px] font-semibold text-red-600">
                                    Nhập địa chỉ
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-3">
                    <p className="text-[20px] font-semibold">Thông tin thêm</p>
                    <div className="col-span-2  w-[80%]">
                        <div>
                            <label htmlFor="" className="flex items-center">
                                Ảnh đại diện
                            </label>
                            <div className="my-4 flex justify-between rounded-2xl border-[1px]  px-4 py-1 ">
                                {selectedFileURL ? (
                                    <p>Đã thêm hình ảnh</p>
                                ) : (
                                    <p>--Chọn tập tin hoặc nhập url--</p>
                                )}
                                <div className="h-6 w-6">
                                    <label
                                        htmlFor="image"
                                        className="h-6 w-6 cursor-pointer"
                                    >
                                        <IconImage className="cursor-pointer" />
                                    </label>
                                    <input
                                        {...register('image')}
                                        type="file"
                                        id="image"
                                        onChange={handleFileChange}
                                        className="invisible h-6 w-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex w-[87%] justify-end gap-4">
                    <button className="w-[140px] rounded-2xl border-[1px] border-[#76C6D1] py-1 font-semibold text-[#02173F]">
                        Hủy
                    </button>
                    <button
                        type="submit"
                        className=" w-[140px] rounded-2xl border-[1px] border-[#76C6D1] bg-[#44AEC3] py-1 font-semibold text-white"
                    >
                        Tạo khách hàng
                    </button>
                </div>
            </form>
        </div>
    )
}
