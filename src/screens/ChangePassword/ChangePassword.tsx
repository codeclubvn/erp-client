import { Button, FormControl, Input, PasswordInput } from '../../components'
import logo from '../../assets/images/logo.png'
import logokey from '../../assets/images/logokey.png'

import { useState } from 'react'
import { resetPasswordApi } from '../../services/resetPasswordApi'

import { useParams, useNavigate } from 'react-router-dom' // Sửa đổi thêm useNavigate
import { Checkbox, FormControlLabel } from '@mui/material'

export const ChangePassword = () => {
    const { token } = useParams()
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [incorrectPassword, setIncorrectPassword] = useState(false)
    const [checked, setChecked] = useState(false)

    const handleCheckChange = (event) => {
        setChecked(event.target.checked)
    }
    const handleClickChangePassword = async () => {
        if (password === confirmPassword) {
            setIncorrectPassword(false)
            try {
                await resetPasswordApi({
                    token: token,
                    password: password,
                    remove_all_devices: checked,
                })
                navigate('/login')
            } catch (error) {
                console.error(error, 'error')
            }
        } else {
            setIncorrectPassword(true)
        }
    }

    return (
        <div>
            <div className="mx-28 my-9 flex items-center gap-52">
                <div>
                    <div className="flex items-center gap-4">
                        <img src={logo} alt="" />
                        <div className="font-font text-3xl font-medium ">
                            LuminaryLucre
                        </div>
                    </div>
                    <div>
                        <img src={logokey} alt="" />
                    </div>
                </div>
                <div className="w-[520px] space-y-5">
                    <p className="font-font text-3xl font-extrabold ">
                        ĐỔI MẬT KHẨU
                    </p>
                    <div>
                        <FormControl className="mt-4 h-[80px] w-[520px]">
                            <PasswordInput
                                defaultValue=""
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className="mt-4 h-[80px] w-[520px]">
                            <PasswordInput
                                defaultValue=""
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked}
                                    onChange={handleCheckChange}
                                    inputProps={{
                                        'aria-label': 'primary checkbox',
                                    }}
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            width: '1.5em',
                                            height: '1.5em',
                                        },
                                    }}
                                />
                            }
                            label="Đăng xuất tất cả các thiết bị "
                        />
                    </div>

                    <div
                        className={`text-red-800 ${
                            incorrectPassword ? '' : 'opacity-0'
                        }`}
                    >
                        mật không khớp{' '}
                    </div>
                    <div>
                        <Button
                            type="submit"
                            color="aqua"
                            height={60}
                            width={520}
                            display="flex"
                            justifyContent="center"
                            size="xl"
                            borderRadius={40}
                            onClick={handleClickChangePassword}
                        >
                            Xác nhận mật khẩu
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
