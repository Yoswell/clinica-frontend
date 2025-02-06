import { Badge } from "@chakra-ui/react"
import { ServiciosComprados } from "@/consts/constsDashboard"

export function MenuRigth() {
    return (
        <aside className="aside-dates">
            <div className="cont-links-aside">
                <div className="title-aside-date">
                    <img className="logo" src="/health.svg" alt="Logo image that represente our brand"></img>
                    Consulta medica
                </div>
                <div className="tree">
                    {ServiciosComprados.map((data) => (
                        <div className="cardDate" key={data.id}>
                            <div>
                                Fecha: 
                                <span>{data.date}</span>
                            </div>
                            <div>
                                Paciente: 
                                <span>{data.paciente.first_name}</span>
                            </div>
                            <div>
                                Medico: 
                                <span>{data.medico.first_name}</span>
                            </div>
                            <div>
                                Servicio: 
                                <span>{data.name}</span>
                            </div>
                            <div>
                                Total: 
                                <span>{data.service_price}</span>
                            </div>
                            <Badge className="red-badge">No pagado</Badge>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    )
}