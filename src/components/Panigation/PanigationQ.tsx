import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react'

export interface ProductProps {
    title: string
    price: number
    image: string
}
interface PaginationProps {
    onListItemChange: (_newList: ProductProps[]) => void
    listItemRender: ProductProps[]
}
export default function PanigationQ(props: PaginationProps) {
    const { onListItemChange, listItemRender } = props
    const inputRef = useRef(12)
    const [pagination, setPagination] = useState(1)
    const [totalPages, setTotalPages] = useState(
        Math.ceil(listItemRender.length / 12),
    )
    const nextPage = (data: ProductProps[], currentPage: number) => {
        const totalItem = inputRef.current

        const startIndex = currentPage * totalItem
        const lastIndex = startIndex + totalItem

        const newData = data.slice(startIndex, lastIndex)
        return newData
    }
    // set listItem to render when the page changes
    const [listItem, setListItem] = useState(nextPage(listItemRender, 0))
    onListItemChange(listItem)

    useEffect(() => {
        setListItem(nextPage(listItemRender, pagination - 1))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pagination])

    // nextPage
    const nextCount = () => {
        if (pagination >= totalPages) return
        else {
            setPagination((pev) => pev + 1)
        }
    }
    // returnPage
    const reCount = () => {
        if (pagination === 1) return
        else {
            setPagination((pev) => pev - 1)
        }
    }
    //select page 12 24 36
    const sellectListItem = (number: number) => {
        const newList = listItemRender.slice(0, number)
        return newList
    }
    const handleNumberValue = (e) => {
        const numberPage = parseInt(e.target.value)
        inputRef.current = numberPage
        const toltalPageCurrent = Math.ceil(listItemRender.length / numberPage)
        setTotalPages(toltalPageCurrent)
        setListItem(sellectListItem(numberPage))
        setPagination(1)
    }

    return (
        <div className="mt-6 flex justify-end">
            <div className="mr-6 flex w-[100px] items-center justify-between  text-[#858D92]">
                <AiOutlineLeft
                    onClick={reCount}
                    className={`${
                        pagination <= 1
                            ? 'cursor-not-allowed'
                            : 'cursor-pointer'
                    } text-xl`}
                />
                <p>{pagination}</p>
                <p>-</p>
                <p>{totalPages}</p>
                <AiOutlineRight
                    onClick={nextCount}
                    className={`${
                        pagination >= totalPages
                            ? 'cursor-not-allowed'
                            : 'cursor-pointer'
                    } text-xl`}
                />
            </div>
            <select
                onChange={handleNumberValue}
                name=""
                id=""
                className=" z-10 cursor-pointer rounded-full border-[1px] px-2 py-2  text-[#858D92] outline-none "
            >
                <option value="12">12 sản phẩm</option>
                <option value="24">24 sản phẩm</option>
                <option value="36">36 sản phẩm</option>
            </select>
        </div>
    )
}
