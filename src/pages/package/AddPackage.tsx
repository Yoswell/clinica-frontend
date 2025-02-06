import { ServiceSelected } from "@/components/selects/ServiceSelected";
import { Container } from "@/components/Container";
import { HeadTitle } from "@/components/HeadTtile";
import { Servicios } from "@/consts/constsDashboard";
import { useEffect, useState } from "react";
import { usePost } from "@/components/hooks/useFetching";
import { validatePackageData } from "@/components/logic/Logic";
import { SonnerError, SonnerLoading, SonnerSuccess } from "@/components/ModalMessage";
import { Toaster } from "sonner";

export function AddPackage() {
    // States to send request
    const [package_code, setPackage_code] = useState(0)
    const [included_service_list, setIncluded_service_list] = useState<Service[]>([])
    const [package_price, setPackage_price] = useState(0)

    // Hooks to fetching data
    const { createData, loadingFetch, errorFetch } = usePost<Package>("api/package/package")

    // Data to send
    const createPackage = { package_code: package_code, included_service_list: included_service_list, package_price: package_price }

    const handleFetchCreate = async () => {
        SonnerLoading()
        if(validatePackageData(createPackage)) {
            try {
                const response = await createData(createPackage)
                if(response.ok) SonnerSuccess("Paquete credo exitosamente", 1000)
            } catch(err: any) {
                SonnerError(err.message, 1000)
            }
        } else {
            SonnerError("Formulario vacío", 1000)
        }
    }
    

    useEffect(() => {
        let price = 0
        included_service_list.forEach((n) => price += n.price)
        setPackage_price(price)
    }, [included_service_list, package_price])

    return (
        <Container classApply="s3"
            children={
                <><HeadTitle title="Agregar un nuevo paquete" subTitle="Registra los datos de un nuevo paquete de servicios de manera rápida y sencilla" />
                <div className="cont-form">
                    <form 
                        method="POST"
                        name="form_create_package"
                        aria-label="Form to create a new package"
                        onSubmit={(e) => e.preventDefault()}>

                        {/* Group form */}
                        <div className="form-group">
                            <label>Codigo del paquete</label>
                            <input
                                type="text" 
                                id="package_code"
                                name="package_code"
                                disabled
                                placeholder="Generado automaticamente">
                            </input>
                        </div>

                        {/* Group form */}
                        <div className="form-group form-service">
                            <label>Servicios disponibles a agregar</label>
                            <div className="cont-checkboxCard">
                                {Servicios.map((data) => (
                                    <ServiceSelected 
                                        id={data.service_code}
                                        name={data.name}
                                        included_service_list={included_service_list}
                                        setIncluded_service_list={setIncluded_service_list}>
                                    </ServiceSelected>
                                ))}
                            </div>
                        </div>

                        {/* Group form */}
                        <div className="form-group">
                            <label>Precio del paquete</label>
                            <input 
                                type="number" 
                                id="package_price"
                                name="package_price"
                                disabled
                                value={package_price}>
                            </input>
                        </div>
                        
                        {/* Buttons of action */}
                        <div className="end-content">
                            <button 
                                type="submit"
                                className="btn btn-ok"
                                aria-label="Button to add package"
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

