import { Paquetes } from "@/consts/constsDashboard";

export function PackageCard() {
    return (
        <>{Paquetes.map((data) => (
            <article className="card cardPackage" key={data.package_code}>
                <><h1>🐋 Codigo de paquete: {data.package_code}</h1>

                {data.included_service_list.map((data) => (
                    <div className="services-packages">
                        <h1 className="title-service">🐙 {data.name}</h1>
                        <p>{data.description}</p>
                        <h3>${data.price}<span>/ paquete</span></h3>
                    </div>
                ))}</>
                
                {/* Buttons of action */}
                <div className="cont-button-action cont-button-action-big">
                    <button
                        className="btn btn-black"
                        aria-label="Button to edit service">
                        Editar paquete       
                    </button>
                    <button
                        className="btn btn-black"
                        aria-label="Button to delete service">
                        Eliminar paquete      
                    </button>
                </div>
            </article>
        ))}
        </>
    )
}