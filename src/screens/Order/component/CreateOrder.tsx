import { LinkDerectory } from '../../../components/LinkDerectory'
import { CiSearch } from 'react-icons/ci'
import { FilterIcon } from '../../Dashboard/components'
import { listProduct } from '../../../constants'
import { useState } from 'react'
import Panigation from '../../../components/Panigation/Panigation'
import { ProductProps } from '../../../components/Panigation/Panigation'
import UserInfo from './UserInfo'
import PurchaseOrder from './PurchaseOrder'
export const CreateOrder = () => {
    const [listItem, setListItem] = useState<ProductProps[]>([])
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
                        <div className="flex w-[300px] items-center rounded-full bg-white px-4 py-2 shadow-xl">
                            <CiSearch />
                            <input
                                type="text"
                                className="flex-auto border-none pl-2 outline-none"
                            />
                        </div>
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
                                className="group relative w-full cursor-pointer overflow-hidden rounded-xl text-center shadow-xl"
                            >
                                <img
                                    src={item.image}
                                    className="h-[96px] w-full object-cover "
                                    alt=""
                                />
                                <p className="mt-2">{item.title}</p>
                                <p className="mb-2 text-2xl font-semibold text-[#02173F]">
                                    {item.price}
                                </p>
                                <p className="absolute bottom-0 left-0 hidden w-full bg-gray-500 group-hover:block">
                                    Thêm vào giỏ hàng
                                </p>
                            </li>
                        ))}
                    </ul>
                    <Panigation
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
