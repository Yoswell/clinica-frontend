type Pacient = {
    id: number 
    first_name: string 
    last_name: string 
    dni: string
    born_date: string 
    email: string 
    number_phone: number 
    direction: string
}

type Medic = { 
    id: number 
    first_name: string 
    last_name: string 
    dni: string
    born_date: string 
    email: string 
    number_phone: number 
    direction: string
    speciality: string
    turns: string
    salary: number
}

type Service = {
    service_code: number
    name: string
    description: string
    price: number
}

type Package = {
    package_code: number
    included_service_list: Service[]
    package_price: number
}

type HealthInsurance = {
    name: string
    plan: string
    number: string
}

type Consult = {
    id: number
    nombre: string
    dia: string
    sueldo: number
    medico: Medic[]
    paciente: Pacient[]
}

type Speciality = {
    id: number
    name: string
}