import Breadcrumbs from '@mui/material/Breadcrumbs'
import { NavLink } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { CiSearch } from 'react-icons/ci'
import { IconAddCircle, IconArrowDown } from '../../svgs'
import { AddCategory } from './components/AddCategory'
import { Pagination } from './components/Pagination'
import { useState, useEffect } from 'react'
import { getCategory } from '../../services/categoryAPI'

export const Category = () => {
    const [text, setText] = useState('')
    const [show, setShow] = useState(false)
    const [categories, setCategories] = useState([])
    const [categoriesRoot, setCategoriesRoot] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [refCategory, setRefCategory] = useState()

    /* if it worked, dont touch */
    useEffect(() => {
        const fetchAndRenderCategories = async () => {
            try {
                const categories_list = await getCategory({ currentPage })
                console.log(categories_list.data)
                setCategories(categories_list.data)
                setCategoriesRoot(categories_list.data)
            } catch (error) {
                console.error('Error', error)
            }
        }
        fetchAndRenderCategories()
    }, [currentPage, refCategory])

    const handleNext = () => {
        setCurrentPage((prevPage) => prevPage + 1)
    }

    const handlePrevios = () => {
        if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1)
    }

    const handleOnChange = (e) => {
        const searchText = e.target.value.toLowerCase()
        setText(searchText)

        const filterCategoties = categoriesRoot.filter((category) => {
            // console.log("This is set text", searchText)
            return category.name.toLowerCase().includes(searchText)
        })
        setCategories(filterCategoties)
    }

    return (
        <div className="relative  ">
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
                        value={text}
                        onChange={handleOnChange}
                    />
                </div>
                <button className="flex items-center gap-[2px] rounded-[16px] bg-white px-[14px] shadow-lg   ">
                    <IconArrowDown className="text-black " />
                    Lọc
                </button>

                <button
                    onClick={() => setShow(!show)}
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
                />
            )}
            <div className="flex justify-end gap-3 pt-5   ">
                {' '}
                <button
                    onClick={handlePrevios}
                    className="rounded-lg bg-cyan-500 px-4 py-2 text-white"
                >
                    previos
                </button>
                <button
                    onClick={handleNext}
                    className="rounded-lg bg-cyan-500 px-4 py-2 text-white "
                >
                    next
                </button>
            </div>
        </div>
    )
}
