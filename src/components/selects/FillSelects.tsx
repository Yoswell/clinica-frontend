import { createContext } from "react"
import { useState, useContext } from "react"

const TriggerContext = createContext({
    isSelectTrigger: false,
    setIsSelectTrigger: (value: boolean) => {}
})

interface SelectProps<T> {
    originalList: T[] | Pacient[] | Medic[]
}

export function Selects<T>({ originalList }: SelectProps<T>) {
    const [isSelectTrigger, setIsSelectTrigger] = useState(false)
    
    const [checkedId, setCheckedId] = useState<string | null>(null)

    const handleCheck = (id: string) => {
        setCheckedId((n) => (n === id ? null : id))
    }

    return (
        <TriggerContext.Provider value={{ isSelectTrigger, setIsSelectTrigger }}>
            <div 
                className="btn select-trigger"
                onClick={() => setIsSelectTrigger(true)}>
                Desplegar
                <div className="select-expand">
                    {originalList.map((data, index) => (
                        <div className={`select-item ${checkedId === data.id ? "select-item-active" : ""}`} key={index}>
                            <input
                                type="checkbox"
                                id={data.id}
                                name={data.id}
                                hidden
                                checked={checkedId === data.id}
                                onChange={() => { handleCheck(data.id) }}>
                            </input>
                            <p>{data.first_name} {data.last_name}</p>
                            <label className="checkbox" htmlFor={data.id}>
                                {checkedId === data.id && <i className="ri-check-line"></i>}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </TriggerContext.Provider>
    )
}
