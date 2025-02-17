import { HeadTitle } from "@/components/HeadTtile"
import { Container } from "@/components/Container"
import { useState } from "react"
import { usePost } from "@/components/hooks/useFetching"
import { SonnerError, SonnerLoading, SonnerSuccess } from "@/components/ModalMessage"
import { validatePacientData } from "@/components/logic/Logic"
import { Toaster } from "sonner"

export function AddPacient() {
    // States to send request
    const [id, setId] = useState(0)
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [dni, setDni] = useState("")
    const [born_date, setBorn_date] = useState("");
    const [email, setEmail] = useState("")
    const [number_phone, setNumber_phone] = useState(0)
    const [direction, setDirection] = useState("")

    // Hooks to fetching data
    const { createData, loadingFetch, errorFetch } = usePost<Pacient>("api/pacient/pacient")

    // Data to send
    const createPacient = { 
        id: id, 
        first_name: first_name, 
        last_name: last_name, 
        dni: dni, 
        born_date: born_date, 
        email: email, 
        number_phone: number_phone, 
        direction: direction,
    }

    const handleFetchCreate = async () => {
        SonnerLoading()
        if(validatePacientData(createPacient)) {
            try {
                const response = await createData(createPacient)
                if(response.ok) SonnerSuccess("Paciente creado exitosamente", 1000)
            } catch(err: any) {
                SonnerError(err.message, 1000)
            }
        } else {
            SonnerError("Formulario vacío", 1000)
        }
    }

    return (
        <Container
            classApply="p1"
            children={
                <><HeadTitle title="Agregar un nuevo paciente" subTitle="Registra los datos de un nuevo paciente de manera rápida y sencilla"></HeadTitle>
                <div className="cont-form">
                    <form 
                        method="POST"
                        name="form_create_consult"
                        aria-label="Form to create a new pacient"
                        onSubmit={(e) => e.preventDefault()}>

                        {/* Group form */}
                        <div className="form-group">
                            <label>Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Ingrese su nombre"
                                onChange={(n) => setFirst_name(n.target.value)}>
                            </input>
                            <p className="d-flex gap-5"><span>*</span>Por favor ingrese el nombre</p>
                        </div>

                        {/* Group form */}
                        <div className="form-group">
                            <label>Apellido</label>
                            <input
                                type="text"
                                id="surname"
                                name="surname"
                                required
                                placeholder="Ingrese su apellido"
                                onChange={(n) => setLast_name(n.target.value)}>
                            </input>
                            <p className="d-flex gap-5"><span>*</span>Por favor ingrese el o los apellidos</p>
                        </div>

                        {/* Group form */}
                        <div className="form-group">
                            <label>Identificación (dni)</label>
                            <input
                                type="text"
                                id="dni"
                                name="dni"
                                required
                                placeholder="Ingrese su identificación"
                                onChange={(n) => setDni(n.target.value)}>
                            </input>
                            <p className="d-flex gap-5"><span>*</span>Por favor ingrese su identificación</p>
                        </div>

                        {/* Group form */}
                        <div className="form-group">
                            <label>Fecha de nacimiento</label>
                            <input
                                type="date"
                                id="born_date"
                                name="born_date"
                                required
                                onChange={(n) => setBorn_date(n.target.value)}>
                            </input>
                            <p className="d-flex gap-5"><span>*</span>Por favor seleccione una fecha</p>
                        </div>

                        <div className="form-group">
                            <label>Correo electrónico</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="Ingrese su correo electrónico"
                                onChange={(n) => setEmail(n.target.value)}>
                            </input>
                            <p className="d-flex gap-5"><span>*</span>Por favor ingrese el correo electrónico</p>
                        </div>

                        {/* Group form */}
                        <div className="form-group">
                            <label>Teléfono</label>
                            <input
                                type="number"
                                id="number_phone"
                                name="number_phone"
                                required
                                placeholder="Ingrese su número de teléfono"
                                onChange={(n) => setNumber_phone(parseInt(n.target.value))}>
                            </input>
                            <p className="d-flex gap-5"><span>*</span>Por favor ingrese su número de teléfono</p>
                        </div>

                        {/* Group form */}
                        <div className="form-group">
                            <label>Dirección</label>
                            <input
                                type="text"
                                id="direction"
                                name="direction"
                                required
                                placeholder="Ingrese su dirección residencial"
                                onChange={(n) => setDirection(n.target.value)}>
                            </input>
                            <p className="d-flex gap-5"><span>*</span>Por favor ingrese su direción residencial</p>
                        </div>

                        {/* Buttons of action */}
                        <div className="end-content">
                            <button 
                                type="submit"
                                className="btn btn-ok"
                                aria-label="Button to add pacient"
                                onClick={() => handleFetchCreate()}>
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
                </div>
                <Toaster expand={true} closeButton toastOptions={{ className: 'modal' }}/></>
            }>
        </Container>
    )
}