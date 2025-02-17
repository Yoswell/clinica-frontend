import { HeadTitle } from "@/components/HeadTtile"
import { Container } from "@/components/Container"
import { useState } from "react"
import { Selects } from "@/components/selects/FillSelects"
import { Pacientes } from "@/consts/constsDashboard"
import { AppointmentForm } from "@/components/forms/AppointmentForm"

export function AddConsult() {
    // States to send request
    const [consult_date, setConsult_date] = useState("")
    const [consult_hour, setConsult_hour] = useState("")
    const [pacient, setPacient] = useState<Pacient>()
    const [medic, setMedic] = useState<Medic>()
    const [service, setService] = useState<Service>()
    const [add_package, setAdd_Package] = useState<Package>()
    const [total_price, setTotal_price] = useState(0)
    const [pay, setPay] = useState(false)
    const [health_insurance, setHealth_insurance] = useState(false)

    return (
        <Container classApply="c1"
            children={
                <><HeadTitle
                    title="Crear consulta medica"
                    subTitle="Crea una nueva consulta medica de manera rápida y sencilla">
                </HeadTitle>
                <div className="cont-form">
                    <form 
                        method="POST"
                        name="form_create_consult"
                        aria-label="Form to create a new consult"
                        onSubmit={(e) => e.preventDefault()}>

                    <AppointmentForm/>

                        {/* Buttons of action */}
                        <div className="end-content">
                            <button 
                                type="submit"
                                className="btn btn-ok"
                                aria-label="Button to add consult">
                                <i className="ri-add-circle-line"></i>
                                Agregar
                            </button>
                            <button 
                                className="btn btn-black"
                                aria-label="Button to reset form">
                                <i className="ri-refresh-line"></i>
                                Limpiar formulario
                            </button>
                        </div>
                    </form>
                </div></>
            }>        
        </Container>
    )
}