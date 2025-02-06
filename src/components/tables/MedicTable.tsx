import { useEffect, useState } from "react"
import { Medicos } from "@/consts/constsDashboard"
import { FilterTable } from "@/components/tables/FilterTable"
import { useSearch } from "@/components/hooks/useSearch"
import { PaginationControl } from "@/components/tables/PaginationControl"

export function MedicTable() {
    const [originalList, setOriginalList] = useState<Medic[]>([])
    const [medicList, setMedicList] = useState<Medic[]>([])
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    useEffect(() => {
        setMedicList(Medicos);
        setOriginalList(Medicos);
    }, [])
    
    useSearch<Medic>({search, originalList, setList: setMedicList, keys: ["first_name", "last_name", "dni", "born_date", "email", "number_phone", "direction", "speciality", "turns", "salary"]})

    const startIndex = (page - 1) * pageSize
    const paginatedItems = medicList.slice(startIndex, startIndex + pageSize)

    return (
        <div className="container-border d-grid gap-10">
            <FilterTable<Medic> 
                search={search} 
                setSearch={setSearch} 
                setList={setMedicList} 
                originalList={originalList}
                keys={["first_name", "last_name", "dni", "born_date", "email", "number_phone", "direction", "speciality", "turns", "salary"]}
                placeholder="Campos filtrables: first_name, last_name, dni, born_date, email, number_phone, direction, speciality, turns, salary">
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
                            <th>speciality</th>
                            <th>turns</th>
                            <th>salary</th>
                            <div className="column">Actions</div>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedItems?.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.dni}</td>
                                <td>{item.born_date}</td>
                                <td>{item.email}</td>
                                <td>{item.number_phone}</td>
                                <td>{item.direction}</td>
                                <td>{item.speciality}</td>
                                <td>{item.turns}</td>
                                <td>{item.salary}</td>
                                <div className="column">
                                    <button
                                        className="btn btn-actions"
                                        aria-label="Button to edit medic">
                                        <i className="ri-pencil-fill"></i>        
                                    </button>
                                    <button
                                        className="btn btn-actions"
                                        aria-label="Button to delete medic">
                                        <i className="ri-delete-bin-5-line"></i>       
                                    </button>
                                </div>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <PaginationControl<Medic> page={page} setPage={setPage} list={medicList} setPageSize={setPageSize}/>
        </div>
    )
}