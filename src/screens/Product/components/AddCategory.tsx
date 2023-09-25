import { useForm } from 'react-hook-form'
import { StarIcon } from '../../Dashboard/components'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import { handleKeyPress } from '../../../constants/handleKeyPressNumber'
interface AddCategoryProps {
    title: string
    quatity: number
    image: string
}
export default function AddCategory({ onClick }) {
    const [selectedFileURL, setSelectedFileURL] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<AddCategoryProps>()

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
    const onSubmit = (data: AddCategoryProps) => {
        if (selectedFileURL) {
            data.image = selectedFileURL
        }
        alert('Bạn đã tạo sản phẩm thành công')
        console.log(data)
        reset()
    }
    return (
        <div className="fixed left-0 top-0 h-screen w-screen bg-[#f8f9fb]/50 ">
            <main className="absolute left-[50%] top-[50%] h-[320px] w-[747px] origin-[center_center] translate-x-[-50%] translate-y-[-50%] animate-scale rounded-3xl bg-[#f8f9fb] px-6 py-4 shadow-2xl transition-all">
                <div className="flex justify-between ">
                    <div>
                        <h1 className="text-3xl font-semibold text-[#02173F]">
                            Thêm danh mục sản phẩm
                        </h1>
                        <div className="my-2 flex items-center text-sm">
                            <p>Trang chủ</p>
                            <span className="mx-2  block h-1 w-1 rounded-full bg-gray-500"></span>
                            <p>Sản phẩm</p>
                            <span className="mx-2 block h-1 w-1 rounded-full bg-gray-500"></span>
                            <p>Tạo danh mục</p>
                        </div>
                    </div>
                    <AiOutlineClose
                        className="cursor-pointer text-2xl"
                        onClick={onClick}
                    />
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4"
                >
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <div>
                                <div className="flex items-center">
                                    <label htmlFor="title" className="mr-2">
                                        Tên danh mục
                                    </label>
                                    <StarIcon />
                                </div>
                                <input
                                    {...register('title', {
                                        required: true,
                                    })}
                                    type="text"
                                    className="mt-2 w-full rounded-full border-[1px] px-4 py-1 shadow-xl outline-none "
                                />
                                {errors?.title?.type === 'required' && (
                                    <p className="my-1 text-[10px] font-semibold text-red-600">
                                        Nhập tên danh mục
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex-1">
                            <div>
                                <div className="flex items-center">
                                    <label htmlFor="quatity" className="mr-2">
                                        Số lượng
                                    </label>
                                    <StarIcon />
                                </div>
                                <input
                                    {...register('quatity', {
                                        required: true,
                                    })}
                                    onKeyPress={handleKeyPress}
                                    type="text"
                                    className="mt-2 w-full rounded-full border-[1px] px-4 py-1 shadow-xl outline-none "
                                />
                                {errors?.quatity?.type === 'required' && (
                                    <p className="my-1 text-[10px] font-semibold text-red-600">
                                        Nhập số lượng
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div>
                            <div className="flex items-center">
                                <label htmlFor="image" className="mr-2">
                                    Chọn ảnh
                                </label>
                                <StarIcon />
                            </div>

                            <div className="mt-2">
                                <input
                                    {...register('image')}
                                    className=""
                                    type="file"
                                    id="image"
                                    {...register('image', {
                                        required: true,
                                    })}
                                    onChange={handleFileChange}
                                />
                                {errors?.image?.type === 'required' && (
                                    <p className="my-1 text-[10px] font-semibold text-red-600">
                                        Upload ảnh lên
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="absolute bottom-3 left-[50%] my-2 h-10 translate-x-[-50%] rounded-2xl border-none bg-[#44AEC3] px-4 text-white outline-none"
                    >
                        <p className="ml-2">Thêm danh mục</p>
                    </button>
                </form>
            </main>
        </div>
    )
}
