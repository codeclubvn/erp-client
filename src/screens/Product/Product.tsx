import { LinkDerectory } from '../../components/LinkDerectory'
import { Link } from 'react-router-dom'
import { IconSum } from '../../svgs'
import { ProductTable } from './components/ProductTable'
export const Product = () => {
    return (
        <div className="rounded-xl bg-[#f8f9fb] px-6 py-4 shadow-xl">
            <div>
                <LinkDerectory />
                <div className="mt-4 flex items-center justify-between">
                    <ul className="flex gap-2 text-[15px]">
                        <li>Danh sách sản phẩm</li>
                    </ul>
                    <div className="flex gap-2">
                        <Link
                            to="/product/danh-muc-san-pham"
                            state={'Danh mục sản phẩm'}
                            className="flex h-10 items-center  justify-center rounded-2xl border-none bg-[#44AEC3] px-4 text-white outline-none"
                        >
                            <IconSum />
                            <p className="ml-2">Danh mục sản phẩm</p>
                        </Link>
                        <Link
                            to="/product/tao-san-pham"
                            state={'Tạo sản phẩm'}
                            className=" flex h-10 w-[160px] items-center justify-center rounded-2xl border-none bg-[#44AEC3] text-white outline-none"
                        >
                            <IconSum />
                            <p className="ml-2">Tạo sản phẩm</p>
                        </Link>
                    </div>
                </div>
            </div>
            <ProductTable />
        </div>
    )
}
