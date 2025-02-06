export const validateServiceData = (
    data: { 
        service_code: number
        name: string
        description: string 
        price: number 
    }) => {
        if(!data.name.trim() || !data.service_code || !data.description.trim() || data.price < 0) return false
        if(typeof data.price !== 'number' || isNaN(data.price) || data.price <= 0) return false

    return true
}

export const validatePackageData = (
    data: { 
        package_code: number
        included_service_list: Service[]  
        package_price: number
    }) => {
        if(data.package_code < 0 || data.package_price < 0) return false
        if(data.included_service_list.length <= 0) return false

    return true
}

export const validatePacientData = (
    data: {
        id: number 
        first_name: string 
        last_name: string 
        dni: string
        born_date: string 
        email: string 
        number_phone: number 
        direction: string
    }) => {
        if(data.id < 0 || !data.first_name.trim() || !data.last_name.trim(), !data.dni.trim()
            || !data.born_date.trim() || !data.email.trim() || data.number_phone < 0
            || !data.direction.trim()) return false
    
    return true
}


export const validateMedicData = (
    data: {
        id: number 
        first_name: string 
        last_name: string 
        dni: string
        born_date: string 
        email: string 
        number_phone: number 
        direction: string
        turns: string
        speciality: string
        salary: number
    }) => {
        if(data.id < 0 || !data.first_name.trim() || !data.last_name.trim(), !data.dni.trim()
            || !data.born_date.trim() || !data.email.trim() || data.number_phone < 0
            || !data.direction.trim() || !data.turns.trim() || !data.speciality.trim() || data.salary < 0) return false
    
    return true
}