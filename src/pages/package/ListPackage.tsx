import { Container } from "@/components/Container";
import { HeadTitle } from "@/components/HeadTtile";
import { PackageCard } from "@/components/cards/PackageCard";

export function ListPackage() {
    return (
        <Container
            classApply="s4"
            children={
                <><HeadTitle
                    title="Paquetes de serivios"
                    subTitle="Consulta y gestiona la información de los paquetes de servicio registrados en el sistema">
                </HeadTitle>
                <div className="cont-packages">
                    <PackageCard />
                </div></>
            }>
        </Container>
    )
}