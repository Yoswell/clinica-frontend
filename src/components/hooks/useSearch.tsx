import { useEffect } from "react"

interface UseSearchProps<T> {
    search: string
    originalList: T[]
    setList: (value: T[]) => void
    keys: (keyof T)[]
}

export const useSearch = <T,>({ search, originalList, setList, keys }: UseSearchProps<T>) => {
    useEffect(() => {
        if (search) {
            const filteredList = originalList.filter((item) =>
                keys.some((key) => 
                    String(item[key])?.toLowerCase().includes(search.toLowerCase())
                )
            )
            setList(filteredList)
        } else {
            setList(originalList)
        }
    }, [search, originalList, setList, keys])
}
