import { useState } from "react"
import { Link } from "react-router-dom"

import './Home.css'

export default props => {
    const [cnpj, setCnpj] = useState(' ')

    function newCnpj(e) {
        setCnpj(e.target.value)
    }

    function hello(){
        console.log('Deu Certo!')
    }

    return (
        <div className="BuscaInicial">
                <div className="title">
                    <h1>Pesquisar CNPJ</h1>
                </div>
            <div className="inputs">
                <div>
                    <input value={cnpj} onChange={newCnpj}/>
                </div>
                <div className="link">
                    <Link to="/informacoes" onClick={hello}>Pesquisar</Link>
                </div>
            </div>
        </div>
    )
}