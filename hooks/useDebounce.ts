import { useEffect, useState } from "react"

export const useDebouce = (value:any, delay:number) => {
    //delay is in milliseconds
    const [debouncedValue, setDebouncedValue] = useState<any>(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value)
        }, delay||400)

        return () => clearTimeout(timeout)
    }, [value, delay])
    return { debouncedValue }
}