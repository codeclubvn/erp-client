import { LinkDerectory } from '../../../components/LinkDerectory'
import { FilterIcon } from '../../Dashboard/components'
import { useState } from 'react'
import UserInfo from './UserInfo'
import PurchaseOrder from './PurchaseOrder'
import { useCreatOrderContext } from '../context/CreatOrderContext'
import { SearchResult } from '../../Product/components/SearchResult'
import PanigationQ from '../../../components/Panigation/PanigationQ'
import { listProduct } from '../../../constants'
interface ProductProps {
    title: string
    price: number
    image: string
}
export const CreateOrder = () => {
    const [listItem, setListItem] = useState<ProductProps[]>([])
    const { handleAddProductToCart } = useCreatOrderContext()
    const handleSetListItem = (newList: ProductProps[]) => {
        setListItem(newList)
    }

    return (
        <div className="grid grid-cols-5 gap-4 overflow-hidden">
            <div className="col-span-3 rounded-2xl bg-[#f8f9fb] px-6 py-6 ">
                <LinkDerectory />
                <div className="mt-10">
                    <h2 className="text-xl font-semibold text-[#485162]">
                        Danh mục sản phẩm
                    </h2>
                    <div className="my-6 flex items-center">
                        <SearchResult />
                        <div className="ml-4 flex rounded-full bg-[#bde0e4] px-4 py-2">
                            <p className="mr-2 text-[#858D92]">Bộ lọc</p>
                            <FilterIcon />
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <ul className="grid grid-cols-4 gap-6">
                        {listItem.map((item, index) => (
                            <li
                                key={index}
                                className="group  relative w-full cursor-pointer overflow-hidden rounded-xl text-center shadow-xl"
                            >
                                <img
                                    src={item.image}
                                    className="h-[90px] w-full object-cover "
                                    alt=""
                                />
                                <p className="mt-2 px-2">{item.title}</p>
                                <p className="mb-2 text-2xl font-semibold text-[#02173F]">
                                    {item.price}
                                </p>
                                <button
                                    onClick={() => handleAddProductToCart(item)}
                                    className="absolute bottom-0 left-0 hidden w-full rounded-2xl  bg-[#44AEC3] py-1 font-semibold text-white group-hover:block"
                                >
                                    Mua
                                </button>
                            </li>
                        ))}
                    </ul>
                    <PanigationQ
                        onListItemChange={handleSetListItem}
                        listItemRender={listProduct}
                    />
                </div>
            </div>
            <div className="col-span-2 mt-4 h-full bg-white">
                <UserInfo />
                <PurchaseOrder />
            </div>
        </div>
    )
}
