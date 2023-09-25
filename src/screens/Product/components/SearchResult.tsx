import { CiSearch } from 'react-icons/ci'
import { useEffect, useState } from 'react'
import { RefObject, createRef } from 'react'
import { listProduct } from '../../../constants'
import { useDebounce } from '../../../hooks/useDebounce'
import HeadlessTippy from '@tippyjs/react/headless'
interface ItemProp {
    title: string
    price: number
    image: string
}
export const SearchResult = () => {
    const inputRef: RefObject<HTMLInputElement> = createRef()
    const [searchValue, setSearchValue] = useState('')
    const [showSearchResult, setShowSearchResult] = useState(true)
    const [searchResult, setSearchResult] = useState<ItemProp[]>([])
    const debouncedValue = useDebounce(searchValue, 500)
    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([])
            return
        }
        const normalizeString = (str: string) => {
            return str
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
        }
        const searchItembyTitle = (searchValue: string) => {
            const normalizedSearchValue = normalizeString(searchValue)
            const regex = new RegExp(normalizedSearchValue, 'i')

            const listItem = listProduct.filter((item) =>
                regex.test(normalizeString(item.title)),
            )

            return listItem
        }
        setSearchResult(searchItembyTitle(debouncedValue))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue])
    const handleSearchValue = (e) => {
        setSearchValue(e.target.value)
    }
    const handleHideResult = () => {
        setShowSearchResult(false)
    }

    return (
        <div>
            <HeadlessTippy
                visible={showSearchResult && searchResult.length > 0}
                interactive
                placement="bottom"
                offset={[0, 0]}
                render={(attrs) => (
                    <div
                        className="max-h-[189px] w-[300px] grid-rows-3 overflow-auto rounded-3xl bg-white shadow-2xl"
                        tabIndex={-1}
                        {...attrs}
                    >
                        {searchResult.map((item, index) => (
                            <div
                                className="flex cursor-pointer items-center rounded-2xl border-[1px] px-6 py-2 hover:bg-[#f8f9fb]"
                                key={index}
                            >
                                <img
                                    src={item.image}
                                    className="h-[45px] w-[45px] rounded-xl object-cover shadow-xl "
                                    alt=""
                                />
                                <p className="ml-4 text-[18px] font-semibold">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className="flex h-11 w-[300px] items-center rounded-full bg-white px-4 py-2 shadow-2xl">
                    <CiSearch />
                    <input
                        ref={inputRef}
                        value={searchValue}
                        onChange={handleSearchValue}
                        onFocus={() => setShowSearchResult(true)}
                        type="text"
                        placeholder="Tìm kiếm danh mục"
                        className="flex-auto border-none pl-2 outline-none"
                    />
                </div>
            </HeadlessTippy>
        </div>
    )
}
