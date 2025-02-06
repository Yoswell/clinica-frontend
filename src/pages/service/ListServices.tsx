import { ServiceCard } from "@/components/cards/ServiceCard"
import { HeadTitle } from "@/components/HeadTtile"
import { Container } from "@/components/Container"

export function ListService() {
    return (
        <Container
            classApply="s2"
            children={
                <><HeadTitle title="Servicios registrados" subTitle="Consulta y gestiona la información de los servicios registrados en el sistema"></HeadTitle>
                <div className="cont-service">
                    <ServiceCard />
                </div></>
            }>
        </Container>
    )
}