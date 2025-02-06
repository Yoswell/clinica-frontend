import { ServiciosComprados } from "@/consts/constsDashboard"
import { HeadTitle } from "@/components/HeadTtile"
import { DashboardCard } from "@/components/cards/DashboardCard"
import { Container } from "@/components/Container"
import { PacientTable } from "@/components/tables/PacientTable"
    
export function Dashboard() {
    return (
        <Container classApply="d1"
            children={
                <><HeadTitle title="Dashboard" subTitle="Pagina principal para visualización de la información">
                </HeadTitle>
                <div className="container-card container-card-two">
                    <DashboardCard 
                        text="Neurologia" 
                        subText="Servicio mas vendido">
                    </DashboardCard>
                    <DashboardCard 
                        text="Odontologia" 
                        subText="Servicio menos vendido">
                    </DashboardCard>
                </div>
                <div className="container-card">
                    <DashboardCard 
                        text="100"
                        subText="Total de ganancias">
                    </DashboardCard>
                    <DashboardCard 
                        text="122"
                        subText="Servicios vendidos">
                    </DashboardCard>
                    <DashboardCard 
                        text="89"
                        subText="Total de pacientes registrados">
                    </DashboardCard>
                    <DashboardCard 
                        text="19"
                        subText="Total de medicos registrados">
                    </DashboardCard>
                </div>
                <div className="container-chart">
                    <BarChartExampleA />
                </div>
                <PacientTable></PacientTable></>
            }>
        </Container>
    )
}
  
export function BarChartExampleA() {
    return (
        <article className="barchart">
            <h6>Grafico de ganancias</h6>
            <h1>📈 Sueldo generado por los servicios</h1>
            <div className="scroll-bar">
                {ServiciosComprados.map((data, index) => (
                    <div className="d-flex direction-column align-center gap-10">
                        <div key={index} className="cont-bar">
                            <div 
                                style={{ height: data.service_price / 90 }}
                                className="bar">
                                <div className="tooltip">
                                    <h3>
                                        Id de la venta:
                                        <span>{data.id}</span>
                                    </h3>
                                    <h3>
                                        Nombre del servicio:
                                        <span>{data.name}</span>
                                    </h3>
                                    <h3>
                                        Sueldo generado:
                                        <span>${data.service_price}</span>
                                    </h3>
                                    <h3>
                                        Fecha:
                                        <span>{data.date}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <p className="label-x">${data.service_price}</p>
                    </div>
                    ))}
            </div>
            <div className="cont-labels">
                <label className="label-color">Sueldo</label>
                <label className="label-color">Extra</label>
                <label className="label-color">Extra</label>
            </div>
        </article>
    )
}