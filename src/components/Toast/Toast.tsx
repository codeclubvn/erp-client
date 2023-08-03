import hotToast, { Toaster as HotToaster, ToastPosition } from 'react-hot-toast'
import { Alert, AlertProps } from '../Alert'

const DEFAULT_DURATION = 2000 // 2 seconds
/**
 * The average reading speed is 250 words/min
 * The average word length in English language is 4.7 characters.
 * => speed to read a character is about ~ 50 miliseconds
 */
const MILISECONDS_PER_CHARACTER = 50

interface ToastProps {
    className?: string
    onClose?: () => void
    color?: AlertProps['color']
    title?: string
    message?: React.ReactNode
    duration?: number
    position?: ToastPosition
}

const calculateDurationFromMessage = (
    title?: string,
    message?: React.ReactNode,
) => {
    const titleDuration = title?.length ?? 0 * MILISECONDS_PER_CHARACTER

    if (typeof message !== 'string')
        return Math.max(titleDuration, DEFAULT_DURATION)

    return Math.max(
        message.length * MILISECONDS_PER_CHARACTER + titleDuration,
        DEFAULT_DURATION,
    )
}

export function toast(props: ToastProps) {
    const {
        onClose,
        title,
        message,
        duration = calculateDurationFromMessage(title, message),
        position = 'top-right',
        color = 'success',
    } = props

    hotToast(
        (t) => (
            <Alert
                color={color}
                msg={message}
                onClose={() => {
                    hotToast.dismiss(t.id)
                    if (onClose) {
                        onClose()
                    }
                }}
                id={t.id}
            />
        ),
        { duration, position },
    )
}

toast.success = (props: Omit<ToastProps, 'color'> = {}) => {
    toast({ color: 'success', ...props })
}

toast.danger = (props: Omit<ToastProps, 'color'> = {}) => {
    toast({ color: 'danger', ...props })
}

export const Toaster = () => (
    <HotToaster
        toastOptions={{
            className: '',
            style: {
                border: 'none',
                padding: '0',
                color: 'transparent',
                background: 'transparent',
                width: 'auto',
                height: 'auto',
                boxShadow: 'none',
                borderRadius: 0,
                lineHeight: 'auto',
                maxWidth: 'auto',
            },
        }}
    />
)
