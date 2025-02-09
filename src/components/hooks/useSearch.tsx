import { useEffect } from "react"

interface UseSearchProps<T> {
    search: string
    list: T[]
    setList: (value: T[]) => void
    keys: (keyof T)[]
}

export const useSearch = <T,>({ search, list, setList, keys }: UseSearchProps<T>) => {
    useEffect(() => {
        if (search) {
            const filteredList = list.filter((item) =>
                keys.some((key) => String(item[key])?.toLowerCase().includes(search.toLowerCase()))
            )
            setList(filteredList)
        }
    }, [search, list, setList, keys])
}
