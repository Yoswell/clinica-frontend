import { Badge, Heading } from "@chakra-ui/react";

export function HeadTitle({title, subTitle}: {title: string, subTitle: string}) {
    return (
        <Heading className="heading">
            <div className="cont-badge">
                <Badge className="badge blue-badge">
                    Titulo
                </Badge>
                <Badge className="badge yellow-badge">
                    Nuevo
                </Badge>
                <Badge className="badge purple-badge">
                    Sección
                </Badge>
            </div>
            <h1>
                {title}
            </h1>
            <h3>{subTitle} 👋</h3>
        </Heading>
    )
}