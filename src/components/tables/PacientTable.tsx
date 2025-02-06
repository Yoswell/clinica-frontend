import { useEffect, useState } from "react"
import { Pacientes } from "@/consts/constsDashboard"
import { FilterTable } from "@/components/tables/FilterTable"
import { useSearch } from "@/components/hooks/useSearch"
import { PaginationControl } from "@/components/tables/PaginationControl"

export function PacientTable() {
    const [originalList, setOriginalList] = useState<Pacient[]>([])
    const [pacientList, setPacientList] = useState<Pacient[]>([])
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
  
    useEffect(() => {
        setPacientList(Pacientes);
        setOriginalList(Pacientes);
    }, [])

  
    useSearch<Pacient>({ search, originalList, setList: setPacientList, keys: ["first_name", "last_name", "dni", "born_date", "email", "number_phone", "direction"] })

    const startIndex = (page - 1) * pageSize;
    const paginatedItems = pacientList.slice(startIndex, startIndex + pageSize)
  
    return (
        <div className="container-border d-grid gap-10">
            <FilterTable<Pacient> 
                search={search} 
                setSearch={setSearch} 
                setList={setPacientList} 
                originalList={originalList}
                keys={["first_name", "last_name", "dni", "born_date", "email", "number_phone", "direction"]}
                placeholder="Campos filtrables: first_name, last_name, dni, born_date, email, number_phone, direction">
            </FilterTable>
            <section className="table-cont">
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>first_name</th>
                            <th>last_name</th>
                            <th>dni</th>
                            <th>born_date</th>
                            <th>email</th>
                            <th>number_phone</th>
                            <th>direction</th>
                            <div className="column">Actions</div>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedItems.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.dni}</td>
                                <td>{item.born_date}</td>
                                <td>{item.email}</td>
                                <td>{item.number_phone}</td>
                                <td>{item.direction}</td>
                                <div className="column">
                                    <button
                                        className="btn btn-actions"
                                        aria-label="Button to edit pacient">
                                        <i className="ri-pencil-fill"></i>        
                                    </button>
                                    <button
                                        className="btn btn-actions"
                                        aria-label="Button to delete pacient">
                                        <i className="ri-delete-bin-5-line"></i>       
                                    </button>
                                </div>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <PaginationControl<Pacient> page={page} setPage={setPage} list={pacientList} setPageSize={setPageSize}/>
        </div>
    )
}