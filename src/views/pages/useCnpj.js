import axios from 'axios'
import { useEffect, useState } from 'react'

export function useCnpj() {
    const [data, setData] = useState()
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/consulta-cnpj/?cnpj=22598920000196')
        .then(response => {
            setData(response.data)
        })
        .finally(() => {
            setIsFetching(false)
        })
    }, [])

    console.log(data)
    
    return {data, isFetching}
}