import { HeadTitle } from "../../components/HeadTtile";
import { MedicTable } from "../../components/tables/MedicTable";
import { Container } from "@/components/Container";

export function ListMedic() {
    return (
        <Container
            classApply="m2"
            children={
                <><HeadTitle
                    title="Tabla de medicos registrados"
                    subTitle="Consulta y gestiona la información de los medicos registrados en el sistema">
                </HeadTitle>
                <MedicTable /></>
            }>

        </Container>
    )
}