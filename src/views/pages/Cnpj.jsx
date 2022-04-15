import Home from '../components/layout/Home'
import axios from 'axios'
import { useQuery } from 'react-query'

import './App.css'

const App = props => {
    const {data, isFetching } = useQuery('cnpjs', async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/consulta-cnpj/?cnpj=22598920000196')

        console.log(response.data)
        return response.data
    })
    
    return (
        {data, isFetching}
    )
}


export default App