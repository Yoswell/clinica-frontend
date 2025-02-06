import { useEffect, useState } from "react"
import { Button } from "@chakra-ui/react"

interface PaginationControlProps<T> {
    list: T[] 
    page: number
    setPage: (value: number) => void
    setPageSize: (value: number) => void
}

export function PaginationControl<T>({list, setPage, page, setPageSize}: PaginationControlProps<T>) {
    const [value, setValue] = useState(10)
    const totalPages = Math.ceil(list.length / value)
    
    const handlePageChange = (newPage: number) => { if (newPage >= 1 && newPage <= totalPages) setPage(newPage) }
    
    useEffect(() => {
        setPageSize(value)
    }, [value, setPageSize])

    return (
        <div className="pagination-controls">
            <div className="d-flex align-center gap-10">
                <span>Página {page} de {totalPages}</span>
                <div className="d-flex gap-5">
                    <Button 
                        className="btn btn-black"
                        ria-label="Button to move prior page"
                        onClick={() => handlePageChange(page - 1)}>
                        <i className="ri-arrow-left-s-line"></i>
                    </Button>
                    <Button
                        className="btn btn-black"
                        aria-label="Button to move next page"
                        onClick={() => handlePageChange(page + 1)}>
                        <i className="ri-arrow-right-s-line"></i>
                    </Button>
                </div>
            </div>
            <div className="d-flex align-center gap-10">
                <span>Filas por pagina</span>
                <select 
                    value={value}
                    onChange={(n) => {setValue(Number(n.target.value))}}>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
            </div>
        </div>
    )
}