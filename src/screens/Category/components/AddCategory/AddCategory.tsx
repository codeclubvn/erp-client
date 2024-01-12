import Breadcrumbs from '@mui/material/Breadcrumbs'
import { NavLink } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { useRef, useState } from 'react'
import { createCategory } from '../../../../services/categoryAPI'

export const AddCategory = ({ show, setShow, setRefCategory }) => {
    // console.log(categories);

    const [categoryName, setCategoryName] = useState('')
    const categoryRef = useRef()
    const handleCreatCategory = async () => {
        try {
            const postCategoryName = await createCategory({
                name: categoryName,
            })
            categoryRef.current = postCategoryName
            // setCategories([...categories, postCategoryName])
            console.log(categoryRef)
            setRefCategory(categoryRef)
            setShow(!show)
        } catch (error) {
            console.error('Error creating category:', error)
        }
    }

    return (
        <div className=" fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black bg-opacity-5 text-black ">
            <div className="h-[292px] w-[747px] space-y-6 rounded-lg bg-slate-50 p-[46px] text-white shadow-lg">
                <div className="flex justify-between ">
                    <div>
                        <h1 className="font-[Raleway] text-[28px] font-semibold text-black">
                            Thêm Danh mục sản phẩm{' '}
                        </h1>{' '}
                        <div>
                            <div role="presentation">
                                <Breadcrumbs
                                    separator="•"
                                    aria-label="breadcrumb"
                                >
                                    <NavLink
                                        className="text-[#858D92]"
                                        color="inherit"
                                        to="/"
                                    >
                                        Trang chủ
                                    </NavLink>
                                    <NavLink to="/pos">Sản phẩm</NavLink>
                                    <Typography color="text.primary">
                                        Tạo danh mục
                                    </Typography>
                                </Breadcrumbs>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => setShow(!show)}
                        className="text-black"
                    >
                        {' '}
                        CLOSE
                    </button>
                </div>
                <div>
                    <h1 className="font-[Raleway] text-[16px] font-semibold text-[#858D92] ">
                        {' '}
                        Tên danh mục
                    </h1>
                    <div className="flex space-x-5">
                        <div className=" flex h-[42.8px] w-[426px] items-center rounded-[12px] bg-white  px-[14px] shadow-lg">
                            <input
                                onChange={(e) => {
                                    setCategoryName(e.target.value)
                                }}
                                className="w-[426px] text-black outline-none "
                                type="text"
                                value={categoryName}
                            />
                        </div>

                        <button
                            onClick={handleCreatCategory}
                            className="flex h-[44px] w-[141px] items-center justify-center gap-[2px] rounded-[16px] bg-[#44AEC3] px-[14px] py-[17.25px] font-[Raleway] text-[13px] font-medium  text-white"
                        >
                            <span>Thêm danh mục</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
