import { ImageIcon } from '../../Dashboard/components/Icon'
import { LinkDerectory } from '../../../components/LinkDerectory'
import { StarIcon, SumIcon } from '../../Dashboard/components'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { handleKeyPress } from '../../../constants/handleKeyPressNumber'
interface CreateProductProps {
    nameProduct: string
    unit: string
    quatity: number
    categoryProduct?: string
    sellPrice: number
    capitalPrice: number
    promotionalPrice: number
    image?: string
    description?: string
}
export const CreateProduct = () => {
    const [selectedFileURL, setSelectedFileURL] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<CreateProductProps>()
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

    const onSubmit = (data: CreateProductProps) => {
        if (selectedFileURL) {
            data.image = selectedFileURL
        }
        console.log(data)
        reset()
    }
    return (
        <div className="mb-10 rounded-2xl bg-[#f8f9fb] px-6 pt-8">
            <LinkDerectory />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-4 rounded-xl bg-white py-4 pl-4"
            >
                <div className="grid grid-cols-3 border-b-[1px] border-dashed">
                    <p className="text-[20px] font-semibold">Thông tin chung</p>
                    <div className="col-span-2 w-[80%]">
                        <div>
                            <label htmlFor="" className="flex items-center">
                                Tên sản phẩm <StarIcon className="ml-2" />
                            </label>
                            <input
                                {...register('nameProduct', {
                                    required: true,
                                })}
                                className="my-2 w-full rounded-2xl border-[1px] px-3 py-1 outline-none"
                                type="text"
                            />
                            {errors?.nameProduct?.type === 'required' && (
                                <p className="mb-1 text-[10px] font-semibold text-red-600">
                                    Nhập tên sản phẩm
                                </p>
                            )}
                        </div>
                        <div className="flex w-full justify-between gap-4">
                            <div className="flex-1">
                                <label htmlFor="" className="flex items-center">
                                    Đơn vị tính <StarIcon className="ml-2" />
                                </label>
                                <input
                                    {...register('unit', {
                                        required: true,
                                    })}
                                    type="text"
                                    className="my-2 w-full rounded-2xl border-[1px] px-2 py-1 outline-none"
                                />
                                {errors?.unit?.type === 'required' && (
                                    <p className="mb-1 text-[10px] font-semibold text-red-600">
                                        Nhập đơn vị tính
                                    </p>
                                )}
                            </div>
                            <div className="flex-1">
                                <label htmlFor="" className="flex items-center">
                                    Số lượng <StarIcon className="ml-2" />
                                </label>
                                <input
                                    {...register('quatity', {
                                        required: true,
                                    })}
                                    type="text"
                                    onKeyPress={handleKeyPress}
                                    className="my-2 w-full rounded-2xl  border-[1px] px-2 py-1 outline-none"
                                />
                                {errors?.unit?.type === 'required' && (
                                    <p className="mb-1 text-[10px] font-semibold text-red-600">
                                        Nhập số lượng sản phẩm
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="" className=" flex items-center">
                                Danh mục sản phẩm
                            </label>
                            <select
                                {...register('categoryProduct')}
                                id=""
                                className="my-2 w-full rounded-2xl  border-[1px] px-2 py-1 outline-none"
                            >
                                <option value="">--Chọn danh mục--</option>
                                <option value="Hải sản">Hải sản</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mt-4 grid grid-cols-3 border-b-[1px] border-dashed">
                    <p className="text-[20px] font-semibold"> Giá sản phẩm</p>
                    <div className="col-span-2  w-[80%] ">
                        <div className="flex justify-between gap-2">
                            <div>
                                <label
                                    htmlFor=""
                                    className="mb-2 flex items-center"
                                >
                                    Giá bán <StarIcon className="ml-2" />
                                </label>
                                <input
                                    {...register('sellPrice', {
                                        required: true,
                                    })}
                                    onKeyPress={handleKeyPress}
                                    className="my-2 w-full rounded-2xl  border-[1px] px-2 py-1 outline-none"
                                    type="text"
                                />
                                {errors?.sellPrice?.type === 'required' && (
                                    <p className="mb-1 text-[10px] font-semibold text-red-600">
                                        Nhập giá bán
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor=""
                                    className="mb-2 flex items-center"
                                >
                                    Giá vốn
                                </label>
                                <input
                                    onKeyPress={handleKeyPress}
                                    {...register('capitalPrice')}
                                    className="my-2 w-full rounded-2xl  border-[1px] px-2 py-1 outline-none"
                                    type="text"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor=""
                                    className="mb-2 flex items-center"
                                >
                                    Giá khuyến mãi
                                </label>
                                <input
                                    onKeyPress={handleKeyPress}
                                    {...register('promotionalPrice')}
                                    className="my-2 w-full rounded-2xl  border-[1px] px-2 py-1 outline-none"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="mb-6 mt-2 flex cursor-pointer items-center">
                            <div className="h-6 w-6 rounded-full bg-[#44AEC3]">
                                <SumIcon />
                            </div>
                            <p className="ml-2 text-[#44AEC3]">Thêm giá sỉ</p>
                        </div>
                    </div>
                </div>
                <div className="mt-4 grid grid-cols-3">
                    <p className="text-[20px] font-semibold">Thông tin thêm</p>
                    <div className="col-span-2  w-[80%]">
                        <div>
                            <label htmlFor="" className="flex items-center">
                                Danh mục sản phẩm
                            </label>
                            <div className="my-2 flex justify-between rounded-2xl border-[1px]  px-4 py-1 ">
                                <p>--Chọn tập tin hoặc nhập url--</p>
                                <div className="h-6 w-6">
                                    <label
                                        htmlFor="image"
                                        className="h-6 w-6 cursor-pointer"
                                    >
                                        <ImageIcon className="cursor-pointer" />
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
                        <div className="flex items-center">
                            <p>Phân loại</p>
                            <div className="my-2 flex cursor-pointer">
                                <div className=" mx-2 h-6 w-6 rounded-full bg-[#44AEC3]">
                                    <SumIcon />
                                </div>
                                <p className="text-[#44AEC3]">Thêm phân loại</p>
                            </div>
                        </div>
                        <div>
                            <p className="my-2">Mô tả</p>
                            <textarea
                                id=""
                                {...register('description')}
                                className="my-2 h-[80px] w-full resize-none rounded-2xl  border-[1px] px-3 py-1 outline-none"
                            ></textarea>
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
                        Tạo sản phẩm
                    </button>
                </div>
            </form>
        </div>
    )
}
