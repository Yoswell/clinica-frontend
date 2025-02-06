import { Specialities } from "@/consts/constsDashboard";

export function SpecialityCard() {
    return (
        Specialities.map((data, index) => (
            <article className="card cardSpeciality" key={index}>
                <div className="d-grid">
                    <h1>🐦 {data.name}
                        <div className="cont-button-action">
                            <button
                                className="btn btn-black"
                                aria-label="Edit service">
                                <i className="ri-pencil-fill"></i>        
                            </button>
                            <button
                                className="btn btn-black"
                                aria-label="Delete service">
                                <i className="ri-delete-bin-5-line"></i>       
                            </button>
                        </div>
                    </h1>
                </div>
            </article>
        ))
    )
}