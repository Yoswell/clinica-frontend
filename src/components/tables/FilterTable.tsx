import { useState, useEffect } from "react"
import { DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { RadioGroup, Radio } from "@/components/ui/radio"

interface FilterTableProps<T> {
    search: string
    list: T[]
    setSearch: (value: string) => void
    setList: (value: T[]) => void
    keys: (keyof T)[]
    placeholder: string
}

export function FilterTable<T>({ search, list, setSearch, setList, keys, placeholder }: FilterTableProps<T>) {
    const [value, setValue] = useState<string>("")

    useEffect(() => {
        if (value) {
            const key = keys.find((k) => k.toString() === value)
            if (key) orderByField(key)
        }
    }, [value]);

    const orderByField = (field: keyof T) => {
        const orderedList = [...list].sort((a, b) => {
            const valueA = (a[field] ?? "").toString().toLowerCase()
            const valueB = (b[field] ?? "").toString().toLowerCase()
            return valueA.localeCompare(valueB);
        })
        setList(orderedList)   
    } 

    const resetFilters = () => {
        setList([...list])
        setSearch("")
        setValue("")
    }

    return (
        <div className="d-flex align-center gap-10">
            <div className="input-filter">
                <i className="ri-search-line"></i>
                <input
                    type="text"
                    name="search"
                    value={search}
                    placeholder={placeholder}
                    aria-label="Input to search records"
                    onChange={(e) => setSearch(e.target.value)}>
                </input>
                <h3>Ctrl + K</h3>
            </div>
            <DialogRoot>
                <DialogTrigger asChild>
                    <button className="btn btn-filter" aria-label="Button to filter records">
                        <i className="ri-equalizer-line"></i> Ordenar
                    </button>
                </DialogTrigger>
                <button className="btn btn-filter" aria-label="Button to reset records" onClick={resetFilters}>
                    <i className="ri-refresh-line"></i> Restablecer
                </button>
                <DialogContent className="dialog-context">
                    <DialogHeader>
                        <DialogTitle className="title-dialog">
                            <i className="ri-sort-desc"></i> Ordenamiento
                        </DialogTitle>
                    </DialogHeader>
                    <DialogBody>
                        <p className="text-dialog">
                            El ordenamiento de la tabla se realiza en función de los siguientes parámetros, permitiendo una organización clara.
                        </p>
                    </DialogBody>
                    <DialogFooter className="cont-buttons-dialog">
                        <RadioGroup
                            className="radio-group"
                            value={value}
                            onValueChange={(selectedField) => {
                                const selectedValue = typeof selectedField === "string" ? selectedField : selectedField.value;
                                const key = keys.find((n) => n.toString() === selectedValue)

                                if (key) {
                                    setValue(key.toString())
                                    orderByField(key) 
                                }
                            }}>
                            {keys.slice(0, 10).map((key, index) => (
                                <Radio key={index} className="radio" value={key.toString()}>
                                    {key.toString()}
                                </Radio>
                            ))}
                        </RadioGroup>
                    </DialogFooter>
                    <DialogCloseTrigger className="btn close-dialog">Ocultar</DialogCloseTrigger>
                </DialogContent>
            </DialogRoot>
        </div>
    )
}
