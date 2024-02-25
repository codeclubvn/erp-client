import Breadcrumbs from '@mui/material/Breadcrumbs'
import { NavLink } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { useEffect, useRef, useState } from 'react'
import { createCategory } from '../../../../services/categoryAPI'
import { uploadFile } from '../../../../services/categoryAPI'
import CloseIcon from '@mui/icons-material/Close'
import ImageIcon from '@mui/icons-material/Image'
export const AddCategory = ({ show, setShow, setRefCategory, innerRef }) => {
    // console.log(categories);

    const [categoryName, setCategoryName] = useState('')
    const [isAlert, setIsAlert] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const categoryRef = useRef()

    const handleUpload = async (selectedFile) => {
        if (!selectedFile) {
            console.error('Không có file được chọn.')
            return
        }

        try {
            const formData = new FormData()
            formData.append('file_request', selectedFile)
            const response = await uploadFile(formData)

            if (response?.data?.url) {
                setImageUrl(response.data.url)
            } else {
                console.error('Không nhận được URL từ server.')
            }
        } catch (error) {
            console.error('Lỗi khi tải file: ', error)
        }
    }

    const CreatCategory = async () => {
        if (categoryName === '') {
            setIsAlert(true)
        } else {
            try {
                const postCategoryName = await createCategory({
                    name: categoryName,
                    image: imageUrl,
                })
                categoryRef.current = postCategoryName
                // setCategories([...categories, postCategoryName])
                setRefCategory(categoryRef)
                setShow(!show)
            } catch (error) {
                console.error('Error creating category:', error)
            }
        }
    }
    const handleCreatCategory = (e) => {
        setIsAlert(false)
        if (e.key === 'Enter') {
            CreatCategory()
        }
    }
    useEffect(() => {
        if (show && innerRef.current) {
            innerRef.current.focus()
        }
    }, [show, innerRef])

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            console.log('data request: ', event.target.files[0])
            handleUpload(event.target.files[0])
        }
    }

    return (
        <div className=" fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black bg-opacity-5 text-black ">
            <div className="h-[292px] w-[747px] space-y-6 rounded-lg bg-slate-50 p-[46px] text-white shadow-lg">
                <div className="flex justify-between ">
                    <div>
                        <h1 className="font-[Raleway] text-[28px] font-semibold text-black">
                            Thêm Danh mục sản phẩm
                        </h1>
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
                        <CloseIcon />
                    </button>
                </div>
                <div>
                    <h1 className="font-[Raleway] text-[16px] font-semibold text-[#858D92] ">
                        Tên danh mục
                    </h1>
                    <div className="flex space-x-5">
                        <div className="space-y-3">
                            {' '}
                            <div className=" flex h-[42.8px] w-[426px] items-center rounded-[12px] bg-white  px-[14px] shadow-lg">
                                <input
                                    onKeyDown={handleCreatCategory}
                                    onChange={(e) => {
                                        setCategoryName(e.target.value)
                                    }}
                                    className="w-[426px] text-black outline-none "
                                    type="text"
                                    value={categoryName}
                                    ref={innerRef}
                                />
                            </div>
                            <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer"
                            >
                                <ImageIcon className="absolute left-0 top-0 h-full w-full text-[#858D92]" />
                                <input
                                    id="file-upload"
                                    className="hidden "
                                    type="file"
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>

                        <button
                            onClick={CreatCategory}
                            className="flex h-[44px] w-[141px] items-center justify-center gap-[2px] rounded-[16px] bg-[#44AEC3] px-[14px] py-[17.25px] font-[Raleway] text-[13px] font-medium  text-white"
                        >
                            <span>Thêm danh mục</span>
                        </button>
                    </div>
                    <div>
                        {isAlert ? (
                            <div className="text-red-800">
                                Bạn chưa nhập tên danh mục
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
