import { Servicios } from "@/consts/constsDashboard"
import { useState } from "react"

interface ServiceCheckBoxProps {
    id: number
    name: string
    included_service_list: Service[]
    setIncluded_service_list: (value: Service[]) => void
}

export function ServiceSelected({id, name, included_service_list, setIncluded_service_list}: ServiceCheckBoxProps) {
    const [checked, setChecked] = useState(false)

    const hadleChecked = () => { 
        setChecked((n) => {
            const newChecked = !n
            if (newChecked) {
                const service = Servicios.find((s) => s.service_code === id)
                if (service) setIncluded_service_list([...included_service_list, service])
            } else {
                setIncluded_service_list(included_service_list.filter(s => s.service_code !== id))
            }
            return newChecked
        })
    }
    
    return (
        <div className={`cardCheckBox ${checked ? "card-active" : ""}`}>
            <input
                type="checkbox"
                id={id.toString()}
                name={id.toString()}
                hidden
                onClick={() => hadleChecked()}>
            </input>
            <p>🐙 {name}</p>
            <label 
                className="checkbox"
                htmlFor={id.toString()}>
                {checked && <i className="ri-check-line"></i>}
            </label>
        </div>
    )
}