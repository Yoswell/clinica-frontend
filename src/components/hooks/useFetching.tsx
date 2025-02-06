import { useState, useEffect } from 'react'

const server_url = "http://localhost:5104"

const getAuthHeaders = () => {
    const token = localStorage.getItem("token"); // O ajusta según dónde guardes el JWT
    return token ? { Authorization: `Bearer ${token}` } : {} as HeadersInit;
}  

export const useFetch = <T,>(endpoint: string) => {
    const [dataFetch, setDataFetch] = useState<T | null>(null)
    const [loadingFetch, setLoadingFetch] = useState(true)
    const [errorFetch, setErrorFetch] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${server_url}/${endpoint}`)
                if(!response.ok) throw new Error("One error ocurred at the moment to get data")
                const result = await response.json()
                if(result) setDataFetch(result)
            } catch(err: any) {
                setErrorFetch(err.message)
            } finally {
                setLoadingFetch(false)
            }
            fetchData()
        }
    }, [endpoint])

    return { dataFetch, loadingFetch, errorFetch }
}

export const usePost = <T,>(endpoint: string) => {
    const [loadingFetch, setLoadingFetch] = useState(false)
    const [errorFetch, setErrorFetch] = useState<string | null>(null)

    const createData = async (newData: T) => {
        setLoadingFetch(true)
        try {
            const response = await fetch(`${server_url}/${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newData)
            })
            if(!response.ok) throw new Error("Ono error ocurred at the moment to create data")
            return response.json()
        } catch(err: any) {
            setErrorFetch(err.message)
        } finally {
            setLoadingFetch(false)
        }

    }

    return { createData, loadingFetch, errorFetch }
}

export const useDelete = <T,>(endpoint: string) => {
    const [loadingFetch, setLoadingFetch] = useState(false)
    const [errorFetch, setErrorFetch] = useState<string | null>(null)

    const deleteData = async (id: number) => {
        setLoadingFetch(true)
        try {
            const response = await fetch(`${server_url}/${endpoint}/${id}`, {
                method: "DELETE",
                headers: getAuthHeaders()
            })
            if(!response.ok) throw new Error("One error ocurred at the moment to delete data")
        } catch(err: any) {
            setErrorFetch(err.message)
        }
        finally {
            setLoadingFetch(false)
        }
    }

    return { deleteData, loadingFetch, errorFetch }
}