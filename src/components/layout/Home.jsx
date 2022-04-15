import { useState } from "react"
import { Link } from "react-router-dom"
import Content from "./Content"
import Nav from "./Nav"
import { useCnpj } from "../../views/pages/useCnpj"
import data from "../../data"

import './Home.css'

export default props => {
    const [cnpj, setCnpj] = useState(' ')
    const [showElement, setShowElement] = useState(false)

    function newCnpj(e) {
        setCnpj(e.target.value)
    }

    function hello(){
        console.log('Deu Certo!')
        setShowElement(true)
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
            { showElement ? <Nav/> : null }
            { showElement ? <Content cnpj={data}/>: null }
        </div>
    )
}