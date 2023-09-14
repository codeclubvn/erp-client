import { useState } from 'react'
import { StarIcon } from '../../Dashboard/components'
import { AiOutlineClose } from 'react-icons/ai'
import { RefObject, createRef } from 'react'
interface MessageProps {
    titleMessage?: string
    priceMessage?: string
    imageMessage?: string
}

export default function AddCategory({ onClick }) {
    const nameRef: RefObject<HTMLInputElement> = createRef()
    const quatityRef: RefObject<HTMLInputElement> = createRef()
    const fileRef: RefObject<HTMLInputElement> = createRef()
    const [value, setValue] = useState({
        title: '',
        price: '',
        image: '',
    })

    const [error, setError] = useState<MessageProps>({})
    const handleInput = (e) => {
        const { id, value } = e.target
        if (id === 'image' && value instanceof File) {
            const url = URL.createObjectURL(value)
            setValue((prevValue) => ({
                ...prevValue,
                image: url,
            }))
        } else
            setValue((prevValue) => ({
                ...prevValue,
                [id]: value,
            }))
    }
    const handleFocusInput = (field) => {
        setError((prevError) => ({
            ...prevError,
            [field]: '',
        }))
    }
    const handleKeyPress = (e) => {
        if (
            !(
                (e.keyCode >= 48 && e.keyCode <= 57) ||
                e.keyCode === 8 ||
                (e.keyCode >= 96 && e.keyCode <= 105)
            )
        ) {
            e.preventDefault()
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const validateMessage: Partial<MessageProps> = {}
        if (!value.title || !value.title.trim()) {
            validateMessage.titleMessage = 'Vui lòng nhập trường này'
        }

        if (!value.price || !value.price.trim()) {
            validateMessage.priceMessage = 'Vui lòng nhập số lượng'
        }

        if (!value.image || !value.image.trim()) {
            validateMessage.imageMessage = 'Vui lòng nhập hình ảnh'
        }
        setError(validateMessage)
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
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                                    id="title"
                                    type="text"
                                    ref={nameRef}
                                    className="mt-2 w-full rounded-full border-[1px] px-4 py-1 shadow-xl outline-none "
                                    onChange={handleInput}
                                    onFocus={() =>
                                        handleFocusInput('titleMessage')
                                    }
                                    value={value.title}
                                />
                            </div>
                            {error.titleMessage && (
                                <p className="mt-2 text-xs font-semibold text-red-600">
                                    {error.titleMessage}
                                </p>
                            )}
                        </div>
                        <div className="flex-1">
                            <div>
                                <div className="flex items-center">
                                    <label htmlFor="price" className="mr-2">
                                        Số lượng
                                    </label>
                                    <StarIcon />
                                </div>
                                <input
                                    id="price"
                                    type="text"
                                    ref={quatityRef}
                                    className="mt-2 w-full rounded-full border-[1px] px-4 py-1 shadow-xl outline-none "
                                    onChange={handleInput}
                                    onFocus={() =>
                                        handleFocusInput('priceMessage')
                                    }
                                    onKeyDown={handleKeyPress}
                                    value={value.price}
                                />
                            </div>
                            {error.priceMessage && (
                                <p className="mt-2 text-xs font-semibold text-red-600">
                                    {error.priceMessage}
                                </p>
                            )}
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
                                    className=""
                                    type="file"
                                    id="image"
                                    ref={fileRef}
                                    accept="image/*"
                                    onChange={handleInput}
                                    onFocus={() =>
                                        handleFocusInput('imageMessage')
                                    }
                                    value={value.image}
                                />
                                {error.imageMessage && (
                                    <p className="mt-2 text-xs font-semibold text-red-600">
                                        {error.imageMessage}
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
