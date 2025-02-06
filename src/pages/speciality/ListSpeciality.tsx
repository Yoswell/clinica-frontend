import { createContext, useContext, useState } from "react"
import { HeadTitle } from "@/components/HeadTtile"
import { Container } from "@/components/Container"
import { SpecialityCard } from "@/components/cards/SpecialityCard"

const ModalContext = createContext({
    isModalOpen: false,
    setIsModalOpen: (value: boolean) => {}
})

export function ListSpeciality() {
    // Checked states
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
            <Container
                classApply="e1"
                children={
                    <><HeadTitle title="Especialidades registradas" subTitle="Consulta y gestiona la información de las especialidade registradas en el sistema"></HeadTitle>
                    <div className="cont-speciality">
                        <SpecialityCard />
                    </div>
                    <button
                        className="btn btn-black btn-float-left"
                        aria-label="Button to show modal add speciality"
                        onClick={() => setIsModalOpen(true)}>
                        Agregar especialidad
                    </button>
                    <ModalForm /></>
                }>
            </Container>
        </ModalContext.Provider>
    )
}

function ModalForm() {
    // Checked states
    const {isModalOpen, setIsModalOpen} = useContext(ModalContext)

    // Form method
    const form_method = "POST"

    // Login const
    if (!isModalOpen) return null

    return (
        <div className={`modal-form ${isModalOpen ? "show" : "" }`}>
            <form
                method={form_method}
                name="form_create_speciality"
                aria-label="Form to create a new speciality"
                className="form-modal"
                onSubmit={(n) => n.preventDefault()}>

                    {/* Form group */}
                    <div className="form-group">
                        <label>Nombre de la especialidad</label>
                        <input
                            type="text" 
                            id="speciality_name"
                            name="spacielity_name"
                            required
                            placeholder="Inserte el nombre de la especialidad">
                        </input>
                        <p className="d-flex gap-5"><span>*</span>Por favor ingrese el nombre de la especialidad</p>
                    </div>

                    {/* Buttons of action */}
                    <div className="end-content">
                        <button 
                            type="submit"
                            className="btn btn-ok"
                            aria-label="Button to add service"
                            onClick={() => {}}>
                            Agregar
                        </button>
                        <button 
                            className="btn btn-black"
                            aria-label="Button to reset form"
                            onClick={() => setIsModalOpen(false)}>
                            Cancelar
                        </button>
                    </div>
            </form>
        </div>
    )
}