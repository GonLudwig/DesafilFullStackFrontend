import { useState } from "react"

import './Home.css'

export default props => {
    const [cnpj, setCnpj] = useState(' ')

    function newCnpj(e) {
        setCnpj(e.target.value)
    }

    return (
        <div className="BuscaInicial">
            <h1>Pesquisar CNPJ</h1>
            <div className="inputs">
                <input value={cnpj} onChange={newCnpj}/>
            </div>
        </div>
    )
}