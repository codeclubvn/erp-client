import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react'
import React, { HTMLAttributes } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

export const alertVariants = tv({
    base: [
        'flex flex-row items-center gap-2 p-4 rounded-lg font-semibold text-base',
    ],
    variants: {
        color: {
            success: 'bg-green-100 text-green-700',
            danger: 'bg-red-100 text-red-700',
        },
    },
})

export interface AlertProps
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof alertVariants> {
    color?: 'success' | 'danger'
    msg?: React.ReactNode
    startDecorator?: React.ReactNode
    onClose?: () => void
}

export const Alert = ({
    color = 'success',
    msg,
    startDecorator,
    onClose,
}: AlertProps) => {
    if (!msg) {
        msg =
            color == 'success'
                ? 'Thực hiện thao tác thành công'
                : 'Đã có lỗi xảy ra'
    }
    if (!startDecorator) {
        startDecorator = color == 'success' ? <CheckCircle2 /> : <AlertCircle />
    }
    return (
        <div className={alertVariants({ color })}>
            <span className="btn-icon rounded-full">{startDecorator}</span>
            <span>{msg}</span>
            {onClose && (
                <span
                    onClick={onClose}
                    className="btn-icon ml-auto cursor-pointer rounded-full pl-2"
                >
                    <XCircle />
                </span>
            )}
        </div>
    )
}
