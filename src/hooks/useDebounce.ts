import { useState, useEffect } from 'react'
export function useDebounce(value: string, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
        const hanler = setTimeout(() => setDebouncedValue(value), delay)
        return () => clearTimeout(hanler)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])
    return debouncedValue
}
