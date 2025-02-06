import { Link } from "react-router-dom"

const menuSections = [
    {
        title: "Inicio",
        items: [
            { to: "/", icon: "ri-stack-line", label: "Dashboard", key: "d1" },
        ],
    },
    {
        title: "Servicios Médicos",
        items: [
            { to: "/service/add", icon: "ri-service-line", label: "Agregar servicio", key: "s1" },
            { to: "/services", icon: "ri-grid-fill", label: "Servicios registrados", key: "s2" },
            { to: "/package/add", icon: "ri-box-3-fill", label: "Agregar un paquete", key: "s3" },
            { to: "/packages", icon: "ri-grid-fill", label: "Paquetes registrados", key: "s4" },
        ],
    },
    {
        title: "Consultas",
        items: [
            { to: "/consult/add", icon: "ri-hospital-line", label: "Consulta", key: "c1" }
        ]
    },
    {
        title: "Pacientes",
        items: [
            { to: "/pacient/add", icon: "ri-user-3-line", label: "Agregar paciente", key: "p1" },
            { to: "/pacients", icon: "ri-grid-fill", label: "Lista de pacientes", key: "p2" },
        ],
    },
    {
        title: "Médicos",
        items: [
            { to: "/medic/add", icon: "ri-user-add-line", label: "Agregar médico", key: "m1" },
            { to: "/medics", icon: "ri-grid-fill", label: "Lista de médicos", key: "m2" },
        ],
    },
    {
        title: "Especialidades",
        items: [
            { to: "/specialities", icon: "ri-scissors-cut-line", label: "Especialidades", key: "e1" },
        ],
    },
    {
        title: "Facturación",
        items: [{ to: "/facturacion", icon: "ri-wallet-3-line", label: "Facturación", key: "f1" }],
    },
    {
        title: "Ayuda y soporte",
        items: [{ to: "/login", icon: "ri-question-line", label: "Ayuda y soporte", key: "a1" }],
    },
]

export function MenuLeft({classApply}: {classApply: string}) {
    return (
        <aside className="aside-icons">
            <div className="cont-links-aside">
                <div className="title-aside">
                    <img className="logo" src="/logo.svg" alt="Logo image that represente our brand"></img>
                    MedPoint Clinic
                </div>

                {menuSections.map((section) => (
                    <div className="" key={section.title}>
                        <div className="tree">
                            <p className="divide-section">{section.title}</p>
                            {section.items.map(({ to, icon, label, key }) => (
                                <Link key={to} to={to} className={`anchor-aside ${classApply === key ? "anchor-aside-child-active" : ""}`}>
                                    <i className={icon}></i>
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    )
}
