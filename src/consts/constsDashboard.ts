export const Specialities = [
    {
        id: 1,
        name: "Cardiologo"
    }
]

export const Servicios = [
    {
        service_code: 1,
        name: "Cardiología",
        description: "Evaluación y tratamiento de enfermedades del corazón y el sistema circulatorio.",
        price: 5000
    }
]

export const Paquetes = [
  {
    package_code: 121,
    included_service_list: [
        {
            service_code: 10,
            name: "Traumatología",
            description: "Diagnóstico y tratamiento de lesiones óseas, musculares y articulares.",
            price: 6500
        }
    ],
    package_price: 14500
  }
]

export const ServiciosComprados = [
    { 
        id: 1, 
        name: "Cardiología", 
        service_price: 5000, 
        date: "2025-01-23", 
        medico: {
            id: 1,
            first_name: "Dr. Juan",
            last_name: "Pérez",
            dni: "12345678A",
            born_date: "15/08/1980",
            email: "juan.perez@example.com",
            number_phone: "612345678",
            direction: "Calle Sol 123",
            speciality: "Cardiología",
            turns: "Martes 10:00am, Sábado 11:00am",
            salary: 3500
        },
        paciente: {
            id: 1,
            first_name: "Miguel Angel",
            last_name: "Gómez",
            dni: "12345678A",
            born_date: "15/08/1985",
            email: "miguel@example.com",
            number_phone: "612345678",
            direction: "Calle Falsa 123"
        }
    },
    { 
        id: 2, 
        name: "Cardiología", 
        service_price: 5000, 
        date: "2025-01-23", 
        medico: {
            id: 1,
            first_name: "Dr. Juan",
            last_name: "Pérez",
            dni: "12345678A",
            born_date: "15/08/1980",
            email: "juan.perez@example.com",
            number_phone: "612345678",
            direction: "Calle Sol 123",
            speciality: "Cardiología",
            turns: "Martes 10:00am, Sábado 11:00am",
            salary: 3500
        },
        paciente: {
            id: 1,
            first_name: "Miguel Angel",
            last_name: "Gómez",
            dni: "12345678A",
            born_date: "15/08/1985",
            email: "miguel@example.com",
            number_phone: "612345678",
            direction: "Calle Falsa 123"
        }
    },
    { 
        id: 3, 
        name: "Cardiología", 
        service_price: 5000, 
        date: "2025-01-23", 
        medico: {
            id: 1,
            first_name: "Dr. Juan",
            last_name: "Pérez",
            dni: "12345678A",
            born_date: "15/08/1980",
            email: "juan.perez@example.com",
            number_phone: "612345678",
            direction: "Calle Sol 123",
            speciality: "Cardiología",
            turns: "Martes 10:00am, Sábado 11:00am",
            salary: 3500
        },
        paciente: {
            id: 1,
            first_name: "Miguel Angel",
            last_name: "Gómez",
            dni: "12345678A",
            born_date: "15/08/1985",
            email: "miguel@example.com",
            number_phone: "612345678",
            direction: "Calle Falsa 123"
        }
    },
    { 
        id: 4, 
        name: "Cardiología", 
        service_price: 5000, 
        date: "2025-01-23", 
        medico: {
            id: 1,
            first_name: "Dr. Juan",
            last_name: "Pérez",
            dni: "12345678A",
            born_date: "15/08/1980",
            email: "juan.perez@example.com",
            number_phone: "612345678",
            direction: "Calle Sol 123",
            speciality: "Cardiología",
            turns: "Martes 10:00am, Sábado 11:00am",
            salary: 3500
        },
        paciente: {
            id: 1,
            first_name: "Miguel Angel",
            last_name: "Gómez",
            dni: "12345678A",
            born_date: "15/08/1985",
            email: "miguel@example.com",
            number_phone: "612345678",
            direction: "Calle Falsa 123"
        }
    }
]

export const Pacientes = [
    {
        id: 1,
        first_name: "Miguel Angel",
        last_name: "Gómez",
        dni: "12345678A",
        born_date: "15/08/1985",
        email: "miguel@example.com",
        number_phone: 612345678,
        direction: "Calle Falsa 123"
    },
    {
        id: 2,
        first_name: "Rosa",
        last_name: "Gómez Chavarria",
        dni: "12345678A",
        born_date: "15/08/1985",
        email: "miguel@example.com",
        number_phone: 612345678,
        direction: "Calle Falsa 123"
    }
]
  
export const Medicos = [
    {
        id: 1,
        first_name: "Dr. Juan",
        last_name: "Pérez",
        dni: "12345678A",
        born_date: "15/08/1980",
        email: "juan.perez@example.com",
        number_phone: 612345678,
        direction: "Calle Sol 123",
        speciality: "Cardiología",
        turns: "Martes 10:00am, Sábado 11:00am",
        salary: 3500
    }
]
  