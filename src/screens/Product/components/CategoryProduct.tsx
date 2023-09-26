import { LinkDerectory } from '../../../components/LinkDerectory'
// import { FilterIcon, SumIcon } from '../../Dashboard/components'
import { useState } from 'react'
import AddCategory from './AddCategory'
import PanigationQ from '../../../components/Panigation/PanigationQ'
import { listProduct } from '../../../constants'
import { IconAdd } from '../../../svgs'
interface ProductProps {
    title: string
    price: number
    image: string
}
export function CategoryProduct() {
    const [isAddCategory, setIsAddCategory] = useState(false)

    const [listItem, setListItem] = useState<ProductProps[]>([])
    const handleListItemChange = (newList: ProductProps[]) => {
        setListItem(newList)
    }

    return (
        <main className="relative rounded-2xl bg-[#f8f9fb] px-6 pb-6 pt-10">
            <LinkDerectory />
            <div className="my-6 mt-10 flex items-center gap-4">
                {/* <SearchResult /> */}
                <div className="flex cursor-pointer rounded-full bg-[#bde0e4] px-4 py-2">
                    <p className="mr-2 text-[#858D92]">Lọc</p>
                    {/* <FilterIcon /> */}
                </div>
                <button
                    onClick={() => setIsAddCategory(true)}
                    className="flex h-10 items-center justify-center rounded-2xl border-none bg-[#44AEC3] px-4 text-white outline-none"
                >
                    <IconAdd />
                    <p className="ml-2">Thêm danh mục</p>
                </button>
            </div>
            <ul className="grid grid-cols-3 gap-6">
                {listItem.map((item, index) => (
                    <li
                        key={index}
                        className="flex w-full cursor-pointer items-center gap-6 overflow-hidden rounded-xl bg-white py-4 pl-6 text-center shadow-2xl hover:bg-[#f8f9fb]"
                    >
                        <img
                            src={item.image}
                            className="h-[60px] w-[60px] rounded-xl object-cover shadow-xl "
                            alt=""
                        />
                        <div className="">
                            <p className="text-[18px] font-semibold">
                                {item.title}
                            </p>
                            <p className="text-[20px] text-[#858d92] ">
                                {item.price}
                                <span className="ml-2 text-sm">sản phẩm</span>
                            </p>
                        </div>
                    </li>
                ))}
            </ul>

            <PanigationQ
                onListItemChange={handleListItemChange}
                listItemRender={listProduct}
            />
            {isAddCategory ? (
                <AddCategory onClick={() => setIsAddCategory(!isAddCategory)} />
            ) : (
                ''
            )}
        </main>
    )
}
