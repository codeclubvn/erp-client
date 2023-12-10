import * as React from 'react'
import {
    TextField,
    Modal,
    Button,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
    Checkbox,
    FormControlLabel,
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { createCashbook } from '../../../services/cashbookAPI'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getWallets } from '../../../services/walletAPI'
import { getCashbookCategories } from '../../../services/cashbookCategoryAPI'

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
    const [wallet, setWallet] = React.useState('')
    const [cashbookCategory, setCashbookCategory] = React.useState('')
    const [amount, setAmount] = React.useState(0)
    const [selectedDateTime, setSelectedDateTime] = React.useState<Date | null>(
        null,
    )
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null)
    const [status] = React.useState('in')
    const [note, setNote] = React.useState('')
    const [isSaveInReport, setIsSaveInReport] = React.useState(true)

    const handleChangeWallet = (event: SelectChangeEvent) => {
        setWallet(event.target.value as string)
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFile(event.target.files[0])
        }
    }

    const handleDateChange = (newDate: Date | null) => {
        setSelectedDateTime(newDate)
    }

    // const handleStatusChange = (event: SelectChangeEvent) => {
    //   setWallet(event.target.value as string);
    // };

    // Hàm xử lý sự kiện thay đổi trạng thái checkbox
    const handleCheckboxChange = () => {
        setIsSaveInReport(!isSaveInReport)
    }

    const { data: wallets, isLoading: isLoadingWallets } = useQuery({
        queryKey: ['wallets'],
        queryFn: getWallets,
    })

    const { data: cashbookCategories, isLoading: isLoadingCashbookCategories } =
        useQuery({
            queryKey: ['cashbookCategories'],
            queryFn: getCashbookCategories,
        })

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        // Chuyển đổi giá trị nhập vào thành số
        const numericValue = Number(value)
        // Kiểm tra xem giá trị nhập vào có phải là số không
        if (!isNaN(numericValue) && value !== '') {
            setAmount(numericValue)
        }
    }

    const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value)
    }

    const handleChangeCashbookCategory = (event: SelectChangeEvent) => {
        setCashbookCategory(event.target.value as string)
    }

    interface CashbookData {
        amount: string
        wallet: string
        cashbookCategory: string
        date: Date | null
        file: File | null
    }

    const mutation = useMutation<CashbookData>(
        (newData) => createCashbook(newData),
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
                        label="Số tiền"
                        variant="outlined"
                        value={amount}
                        onChange={handleAmountChange}
                        type="number"
                    />

                    <TextField
                        id="outlined-basic"
                        label="Ghi chú"
                        variant="outlined"
                        value={note}
                        onChange={handleNoteChange}
                    />

                    {isLoadingWallets ? (
                        <div>Loading...</div>
                    ) : (
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Nguồn tiền
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={wallet}
                                label="Nguồn tiền"
                                onChange={handleChangeWallet}
                            >
                                {wallets.map((walletItem) => (
                                    <MenuItem
                                        key={walletItem.id}
                                        value={walletItem.id}
                                    >
                                        {walletItem.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}

                    <DatePicker onChange={handleDateChange} />
                    {isLoadingCashbookCategories ? (
                        <div>Loading...</div>
                    ) : (
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Phân loại
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={cashbookCategory}
                                label="Phân loại"
                                onChange={handleChangeCashbookCategory}
                            >
                                {cashbookCategories.map((walletItem) => (
                                    <MenuItem
                                        key={walletItem.id}
                                        value={walletItem.id}
                                    >
                                        {walletItem.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={isSaveInReport}
                                onChange={handleCheckboxChange}
                                color="primary"
                            />
                        }
                        label="Lưu vào báo cáo"
                    />

                    <Button variant="contained" component="label">
                        Upload File
                        <input type="file" hidden onChange={handleFileChange} />
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() =>
                            handleClickConfirm({
                                amount: amount,
                                wallet_id: wallet,
                                cashbook_category_id: cashbookCategory,
                                date_time: selectedDateTime,
                                file: selectedFile,
                                status: status,
                                is_save_in_report: isSaveInReport,
                                note: note,
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
