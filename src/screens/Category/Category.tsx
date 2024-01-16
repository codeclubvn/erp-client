import Breadcrumbs from '@mui/material/Breadcrumbs'
import { NavLink } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { CiSearch } from 'react-icons/ci'
import { IconAddCircle, IconArrowDown } from '../../svgs'
import { AddCategory } from './components/AddCategory'
import { Pagination } from './components/Pagination'
import { useState, useEffect, useRef } from 'react'
import { getCategory } from '../../services/categoryAPI'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

export const Category = () => {
    const [searchText, setSearchText] = useState('')
    const [show, setShow] = useState(false)
    const [categories, setCategories] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [refCategory, setRefCategory] = useState()
    const [meta, setMeta] = useState()
    const refFocus = useRef(null)

    useEffect(() => {
        const fetchAndRenderCategories = async () => {
            try {
                const categories_list = await getCategory({
                    currentPage,
                    searchText,
                })
                console.log(categories_list.data)
                setCategories(categories_list.data)
                setMeta(categories_list.meta)
            } catch (error) {
                console.error('Error', error)
            }
        }
        fetchAndRenderCategories()
    }, [currentPage, refCategory, searchText])

    const handleNext = () => {
        if (meta.has_next_page) {
            setSearchText('')

            setCurrentPage((prevPage) => prevPage + 1)
        }
    }

    const handlePrevios = () => {
        setSearchText('')
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1)
        }
    }

    const handleOnChange = (e) => {
        const searchText = e.target.value

        if (searchText.length > 3) {
            setSearchText(searchText)
        }
    }

    useEffect(() => {
        if (refFocus.current) {
            refFocus.current.focus()
        }
    }, [])

    const ShowCreatCategory = () => {
        setShow(!show)

        if (refFocus.current) {
            refFocus.current.focus()
        }
    }

    return (
        <div className="relative min-h-screen  ">
            <header>
                <h1 className="text-[28px] font-semibold leading-[32px]">
                    Danh mục sản phẩm
                </h1>
                <div role="presentation">
                    <Breadcrumbs separator="•" aria-label="breadcrumb">
                        <NavLink
                            className="text-[#858D92]"
                            color="inherit"
                            to="/"
                        >
                            Trang chủ
                        </NavLink>
                        <NavLink to="/pos">Sản phẩm</NavLink>
                        <Typography color="text.primary">
                            Danh mục sản phẩm
                        </Typography>
                    </Breadcrumbs>
                </div>
            </header>
            <div className="mb-[45px] mt-[45px] flex gap-4">
                <div className=" flex h-[42.8px] w-[426px] items-center rounded-[12px] bg-white  px-[14px] shadow-lg">
                    <CiSearch className="text-xl text-slate-500" />
                    <input
                        className="w-[426px] outline-none "
                        type="text"
                        placeholder=" tìm kiếm danh mục"
                        value={searchText}
                        onChange={handleOnChange}
                    />
                </div>
                <button className="flex items-center gap-[2px] rounded-[16px] bg-white px-[14px] shadow-lg   ">
                    <IconArrowDown className="text-black " />
                    Lọc
                </button>

                <button
                    onClick={ShowCreatCategory}
                    className="flex h-[44px] w-[175px] items-center gap-[2px] rounded-[16px] bg-[#44AEC3] px-[14px] py-[17.25px] text-white"
                >
                    <IconAddCircle /> <span>Tạo danh mục</span>
                </button>
            </div>

            {/* pagination */}

            <Pagination categories={categories} />

            {/* // tạo danh mục */}
            {show && (
                <AddCategory
                    show={show}
                    setShow={setShow}
                    setRefCategory={setRefCategory}
                    innerRef={refFocus}
                />
            )}

            <div className="h-[50px]"></div>
            <div className="absolute bottom-0 right-0 flex justify-end gap-3 pt-5  ">
                {' '}
                <button onClick={handlePrevios} className="">
                    <KeyboardArrowLeft />
                </button>
                <div>1-10</div>
                <button onClick={handleNext} className="">
                    <KeyboardArrowRight />
                </button>
            </div>
        </div>
    )
}
