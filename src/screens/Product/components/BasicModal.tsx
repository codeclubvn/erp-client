import * as React from 'react'
import { TextField, Modal, Button, Box } from '@mui/material'
import { createProduct } from '../../../services/productAPI'
import { useMutation } from '@tanstack/react-query'

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

// Định nghĩa các props mà BasicModal nhận vào
interface BasicModalProps {
    open: boolean
    handleClose: () => void
    handleOpen: () => void
}

export function BasicModal({ open, handleClose, handleOpen }: BasicModalProps) {
    const [price, setPrice] = React.useState(0)
    const [quantity, setQuantity] = React.useState(0)
    const [name, setName] = React.useState('')
    const [selectedImage, setSelectedImage] = React.useState<File | null>(null)
    const [status] = React.useState(true)
    const [description, setDescription] = React.useState('')

    const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        // Chuyển đổi giá trị nhập vào thành số
        const numericValue = Number(value)
        // Kiểm tra xem giá trị nhập vào có phải là số không
        if (!isNaN(numericValue) && value !== '') {
            setPrice(numericValue)
        }
    }

    const handleChangeQuantity = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const value = event.target.value
        // Chuyển đổi giá trị nhập vào thành số
        const numericValue = Number(value)
        // Kiểm tra xem giá trị nhập vào có phải là số không
        if (!isNaN(numericValue) && value !== '') {
            setQuantity(numericValue)
        }
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedImage(event.target.files[0])
        }
    }

    // const handleStatusChange = (event: SelectChangeEvent) => {
    //   setPrice(event.target.value as string);
    // };

    // Hàm xử lý sự kiện thay đổi trạng thái checkbox

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setName(value)
    }

    const handleDescriptionChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setDescription(event.target.value)
    }

    interface CashbookData {
        name: string
        price: string
        cashbookCategory: string
        date: Date | null
        file: File | null
    }

    const mutation = useMutation<CashbookData>(
        (newData) => createProduct(newData),
        {
            onSuccess: (data) => {
                // Xử lý khi tạo dữ liệu thành công
                console.log('Data created successfully', data)
                handleOpen()
            },
            onError: (error) => {
                // Xử lý khi có lỗi
                console.error('Error creating data', error)
            },
        },
    )

    const handleClickConfirm = (newData: any) => {
        mutation.mutate(newData)
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField
                        id="outlined-basic"
                        label="Tên sản phẩm"
                        variant="outlined"
                        value={name}
                        onChange={handleNameChange}
                    />

                    <TextField
                        id="outlined-basic"
                        label="Mô tả"
                        variant="outlined"
                        value={description}
                        onChange={handleDescriptionChange}
                    />

                    <TextField
                        id="outlined-basic"
                        label="Giá"
                        variant="outlined"
                        value={price}
                        onChange={handleChangePrice}
                        type="number"
                    />

                    <TextField
                        id="outlined-basic"
                        label="Số lượng"
                        variant="outlined"
                        value={quantity}
                        onChange={handleChangeQuantity}
                        type="number"
                    />
                    <Button variant="contained" component="label">
                        Upload File
                        <input type="file" hidden onChange={handleFileChange} />
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() =>
                            handleClickConfirm({
                                name: name,
                                price: price,
                                quantity: quantity,
                                image: selectedImage,
                                status: status,
                                description: description,
                            })
                        }
                    >
                        Xác nhận
                    </Button>
                </Box>
            </Modal>
        </div>
    )
}
