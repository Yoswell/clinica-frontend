import { HeadTitle } from "@/components/HeadTtile"
import { Container } from "@/components/Container"
import { useState } from "react"
import { Selects } from "@/components/selects/FillSelects"
import { Pacientes } from "@/consts/constsDashboard"

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

                        {/* Group form */}
                        <div className="form-group">
                            <label>Fecha de creación</label>
                            <input
                                type="datetime-local"
                                name="consult_date"
                                contentEditable={true}
                                onChange={() => {}}>
                            </input>
                            <p className="d-flex gap-5"><span>*</span>Por favor seleccione una fecha y una hora</p>
                        </div>

                        {/* Group form */}
                        <div className="form-group">
                            <label>Seleccionar un servicio o un paquete</label>
                            <p>Los paquetes reciven un descuento de 15%</p>
                        </div>

                        {/* Group form */}
                        <div className="form-group">
                            <label>Seleccionar un paciente</label>
                            <Selects<Pacient> originalList={Pacientes}></Selects>
                            <p className="d-flex gap-5"><span>*</span>Por favor seleccione un paciente</p>
                        </div>

                        {/* Group form */}
                        <div className="form-group">
                            <label>Seleccionar un medico</label>
                            <Selects<Pacient> originalList={Pacientes}></Selects>
                            <p className="d-flex gap-5"><span>*</span>Por favor seleccione un medico</p>
                        </div>

                        {/* Group form */}
                        <div className="form-group">
                            <label>Consulta pagada o pendiente</label>
                            <div className="container-border d-grid gap-8"> 
                                <p>Dejar vacio en caso de estar pendiente</p>
                                <input
                                    type="checkbox"
                                    id="pay"
                                    name="pay"
                                    hidden
                                    onClick={() => {}}>
                                </input>
                                <label className="checkbox" htmlFor="pay">{<i className="ri-check-line"></i>}</label>
                            </div>
                        </div>

                         {/* Group form */}
                        <div className="form-group">
                            <label>El paciente posee seguro medico/obra social?</label>
                            <div className="container-border d-grid gap-8">
                                <p>Aplicar descuento de 20%</p>
                                <input
                                    type="checkbox"
                                    id="health_insurance"
                                    name="health_insurance"
                                    hidden
                                    onClick={() => {}}>
                                </input>
                                <label className="checkbox" htmlFor="health_insurance">{<i className="ri-check-line"></i>}</label>
                            </div>
                        </div>

                        {/* Group form */}
                        <div className="form-group">
                            <label>Monto total con descuento aplicado</label>
                            <input
                                type="number"
                                id="total_price"
                                name="total_price"
                                disabled
                                value="0">
                            </input>
                        </div>

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