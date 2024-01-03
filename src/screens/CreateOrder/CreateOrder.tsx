import { TextField } from '@mui/material'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getProducts } from '../../services/productAPI'
import { createOrder } from '../../services/orderAPI'
import { useState } from 'react'
import { set } from 'nprogress'

export const CreateOrder = () => {
    const [products, setProducts] = useState([])
    const { data = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
    })

    const handleAddProductIntoOrder = (product) => {
        console.log(product)
        const productIndex = products.findIndex(
            (item) => item.id === product.id,
        )
        if (productIndex > -1) {
            const newProducts = [...products]
            newProducts[productIndex].quantity += 1
            setProducts(newProducts)
            return
        }
        product.quantity = 1
        setProducts([...products, product])
    }

    const mutation = useMutation<any>((newData) => createOrder(newData), {
        onSuccess: () => {
            // Xử lý khi tạo dữ liệu thành công
            alert('Tạo đơn hàng thành công')
            setProducts([])
        },
        onError: (error) => {
            // Xử lý khi có lỗi
            console.error('Error creating data', error)
        },
    })

    const handleCreateOrder = () => {
        let total = 0
        let order_items = []
        products.map((product) => {
            total += product.price * product.quantity
            order_items = [
                ...order_items,
                {
                    product_id: product.id,
                    quantity: product.quantity,
                    price: product.price,
                },
            ]
        })
        const createOrderRequest: any = {
            order_items: order_items,
            status: 'delivery',
            total: total,
            payment: total,
            payment_method: 'cod',
        }
        mutation.mutate(createOrderRequest)
    }

    return (
        <>
            <div className="px-[calc((100%-1060px)/2)] pb-[75px]">
                <div className="mt-[40px] flex items-center justify-between">
                    <div>
                        <h2 className="text-[28px] font-semibold leading-[32px]">
                            Đơn hàng
                        </h2>
                        <span className="text-[#858D92]">
                            Trang chủ • Đơn hàng
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="">
                        <div className="mt-[40px] flex items-center justify-between">
                            <div>
                                <h2 className="text-[20px] font-semibold leading-[32px]">
                                    Danh mục sản phẩm
                                </h2>
                                <TextField
                                    id="outlined-basic"
                                    label="Tìm kiếm"
                                    variant="outlined"
                                />
                            </div>
                        </div>
                        <div className="mt-[40px] flex items-center justify-between">
                            {isLoading ? (
                                <div>Loading...</div>
                            ) : (
                                data.map((product) => (
                                    <div
                                        className="border-2 border-solid border-slate-800"
                                        onClick={() =>
                                            handleAddProductIntoOrder(product)
                                        }
                                    >
                                        <div className="w-32">
                                            <img
                                                src="data:image/jpeg;base64,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"
                                                alt=""
                                            />
                                        </div>
                                        <div className="h-24 w-32">
                                            <span>{product.name}</span>
                                            <span>{product.price} đ</span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <div>
                                <div>
                                    <h2 className="text-[20px] font-semibold leading-[32px]">
                                        Đơn mua
                                    </h2>
                                    <span>Mã đơn: KH0007</span>
                                </div>
                            </div>
                            <div>
                                <span>Tổng 5 món</span>
                            </div>
                        </div>
                        <div>
                            {products.length == 0 ? (
                                <div>Loading...</div>
                            ) : (
                                products.map((product) => (
                                    <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 shadow-md">
                                        <div className="flex flex-col">
                                            <span className="text-lg font-semibold">
                                                {product.name}
                                            </span>
                                            <span className="text-sm text-gray-600">
                                                {product.price}
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <button className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600">
                                                -
                                            </button>
                                            <span className="mx-2">
                                                {product.quantity}
                                            </span>
                                            <button className="rounded bg-green-500 px-2 py-1 text-white hover:bg-green-600">
                                                +
                                            </button>
                                        </div>
                                        <div>
                                            <span className="text-lg font-semibold">
                                                1050000d
                                            </span>
                                        </div>
                                        <div>
                                            <button className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600">
                                                Xóa
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        <div>
                            <div>
                                <span>Tổng tiền hàng</span>
                                <span>0đ</span>
                            </div>
                            <div>
                                <span>Phí vận chuyển</span>
                                <span>0đ</span>
                            </div>
                            <div>
                                <span>Tổng thanh toán</span>
                                <span>0đ</span>
                            </div>
                        </div>
                        <div>
                            <button
                                className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
                                onClick={() => handleCreateOrder()}
                            >
                                Đặt hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
