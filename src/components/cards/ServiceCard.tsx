import { Servicios } from "@/consts/constsDashboard";

export function ServiceCard() {
    return (
        Servicios.map((data) => (
            <article className="card cardService" key={data.service_code}>
                <div className="d-grid">
                    <h1>🐙 {data.name}</h1>
                    <p>{data.description}</p>
                    <h3>${data.price}<span>/ consulta</span></h3>
                </div>
                <div className="cont-button-action">
                    <button
                        className="btn btn-black btn-edit"
                        aria-label="Edit service">
                        <i className="ri-pencil-fill"></i>        
                    </button>
                    <button
                        className="btn btn-black btn-delete"
                        aria-label="Delete service">
                        <i className="ri-delete-bin-5-line"></i>       
                    </button>
                </div>
            </article>
        ))
    )
}