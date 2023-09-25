import { createContext, useContext } from 'react'
import { ProductProps } from '../../../components/Panigation'
import { CreateOrder } from '../component/CreateOrder'
import { useLocalStorage } from '../../../hooks/useLocalStorage'
type CreatOrderContext = {
    increaseProductQuantity: (id: number) => void
    decreaseProductQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    handleAddProductToCart: (item: ProductProps) => void
    totalMoney: number
    listOrder: ProductProps[]
}
const CreatOrderContext = createContext({} as CreatOrderContext)
export function useCreatOrderContext() {
    return useContext(CreatOrderContext)
}

export function CreatOrderContextProvider() {
    const [listOrder, setListOrder] = useLocalStorage<ProductProps[]>(
        'product-item',
        [],
    )

    const increaseProductQuantity = (id: number) => {
        setListOrder((prevListOrder) => {
            return prevListOrder.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: (item.quantity || 0) + 1,
                    }
                }
                return item
            })
        })
    }
    const decreaseProductQuantity = (id: number) => {
        setListOrder((prevListOrder) => {
            const updatedListOrder = prevListOrder.map((item) => {
                if (
                    item.id === id &&
                    item.quantity !== undefined &&
                    item.quantity > 0
                ) {
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    }
                }
                return item
            })

            // Loại bỏ sản phẩm có quantity là 0 khỏi danh sách
            const newList = updatedListOrder.filter(
                (item) => item.quantity !== 0,
            )

            return newList
        })
    }
    const handleAddProductToCart = (item: ProductProps) => {
        const newList = listOrder.find(
            (product) => product.title === item.title,
        )
        if (!newList) {
            setListOrder((prevListOrder) => [
                ...prevListOrder,
                { ...item, quantity: 1 },
            ])
        } else {
            setListOrder((prevListOrder) => [
                ...prevListOrder.map((product) => {
                    if (product.title === item.title) {
                        return {
                            ...product,
                            quantity: (product.quantity || 0) + 1,
                        }
                    }
                    return product
                }),
            ])
        }
    }
    const removeFromCart = (id: number) => {
        const newList = listOrder.filter((item) => item.id !== id)
        setListOrder(newList)
    }
    const totalMoney = listOrder.reduce((total, item) => {
        if (item.quantity !== undefined) {
            return total + item.price * item.quantity
        }
        return total
    }, 0)

    return (
        <CreatOrderContext.Provider
            value={{
                increaseProductQuantity,
                decreaseProductQuantity,
                removeFromCart,
                handleAddProductToCart,
                listOrder,
                totalMoney,
            }}
        >
            <CreateOrder />
        </CreatOrderContext.Provider>
    )
}
