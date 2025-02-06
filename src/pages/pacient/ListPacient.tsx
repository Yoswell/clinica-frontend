import { HeadTitle } from "@/components/HeadTtile";
import { PacientTable } from "@/components/tables/PacientTable";
import { Container } from "@/components/Container";

export function ListPacient() {
    return (
        <Container
            classApply="p2"
            children={
                <><HeadTitle
                    title="Tabla de pacientes registrados"
                    subTitle="Consulta y gestiona la información de los pacientes registrados en el sistema">
                </HeadTitle>
                <PacientTable /></>
            }>
        </Container>
    )
}