import { useState } from "react"
import { HeadTitle } from "@/components/HeadTtile"
import { Container } from "@/components/Container"
import { usePost } from "@/components/hooks/useFetching"
import { validateServiceData } from "@/components/logic/Logic"
import { SonnerError, SonnerLoading, SonnerSuccess } from "@/components/ModalMessage"
import { Toaster } from "sonner"
import PDFGenerator from "@/components/PDFGenerator"

export function AddService() {
    // States to send request
    const [service_code, setService_code] = useState(0)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)

    // Hooks to fetching data
    const { createData, loadingFetch, errorFetch } = usePost<Service>("api/sign/service")

    // Data to send
    const createService = { name: name, service_code: service_code, description: description, price: price }

    const handleFetchCreate = async () => {
        SonnerLoading()
        if(validateServiceData(createService)) {
            try {
                const response = await createData(createService)
                if (response.ok) SonnerSuccess("Servicio creado exitosamente", 3000)
            } catch (err: any) {
                SonnerError(err.message, 1000)
            }
        } else {
            SonnerError("Formulario vacío", 1000)
        }
    }

    return (
        <Container classApply="s1"
            children={
                <><HeadTitle title="Agregar un nuevo servicio" subTitle="Registra los datos de un nuevo servicio de manera rápida y sencilla"></HeadTitle>
                <div className="cont-form">
                    <form
                        method="POST"
                        name="form_create_service"
                        aria-label="Form to create a new service"
                        onSubmit={(n) => n.preventDefault()}>
                            
                        {/* Group form */}
                        <div className="form-group">
                            <label>Nombre del servicio</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Inserte el nombre aquí"
                                required
                                onChange={(n) => setName(n.target.value)}>
                            </input>
                            <p className="d-flex gap-5"><span>*</span>Por favor ingrese el nombre del servicio</p>
                        </div>

                        {/* Group form */}
                        <div className="form-group">
                            <label>Descripción del servicio</label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                placeholder="Inserte la descripción aquí"
                                required
                                onChange={(n) => setDescription(n.target.value)}>
                            </input>
                            <p className="d-flex gap-5"><span>*</span>Por favor ingrese la descripión del servicio</p>
                        </div>

                        {/* Group form */}
                        <div className="form-group">
                            <label>Precio del servicio</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                placeholder="Inserte el precio aquí"
                                required
                                onChange={(n) => setPrice(parseInt(n.target.value))}>
                            </input>
                            <p className="d-flex gap-5"><span>*</span>Por favor ingrese el precio del servicio</p>
                        </div>

                        {/* Buttons of action */}
                        <div className="end-content">
                            <button 
                                type="submit"
                                className="btn btn-ok"
                                aria-label="Button to add service"
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
                <PDFGenerator></PDFGenerator>
                <Toaster expand={true} closeButton toastOptions={{ className: 'modal' }}/></>
            }>        
        </Container>
    )
}