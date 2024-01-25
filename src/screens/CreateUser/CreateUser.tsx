import { Breadcrumbs, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import FormCreateUser from './FormCreateUser.'
function CreateUser() {
    return (
        <div>
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
                        <NavLink to="/user">Khách hàng</NavLink>
                        <Typography color="text.primary">
                            Tạo Khách Hàng
                        </Typography>
                    </Breadcrumbs>
                </div>
            </header>
            <FormCreateUser />
        </div>
    )
}

export default CreateUser
