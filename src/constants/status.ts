export const STATUS = {
    PROCESS: 'process',
    DELIVERED: 'delivered',
    RETURN: 'return',
    CANCEL: 'cancel',
}

export const statusTitleWrapper = {
    [STATUS.PROCESS]: 'Đang xử lý',
    [STATUS.DELIVERED]: 'Đã giao',
    [STATUS.RETURN]: 'Trả hàng',
    [STATUS.CANCEL]: 'Đã huỷ',
}

export const statusClassname = {
    [STATUS.PROCESS]: 'bg-[rgba(255,193,58,0.2)] text-[#FFC13A]',
    [STATUS.DELIVERED]: 'bg-[rgba(189,224,228,0.8)] text-[#44AEC3]',
    [STATUS.CANCEL]: 'bg-[rgba(141,152,170,0.5)] text-[#656565]',
    [STATUS.RETURN]: 'bg-[rgba(135,183,255,0.4)] text-[#3263AC]',
}
