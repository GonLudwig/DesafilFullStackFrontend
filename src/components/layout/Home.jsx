import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import Content from "./Content"
import Nav from "./Nav"
import axios from "axios"
import ReactInputMask from "react-input-mask"
import ModalAlert from "./ModalAlert"

import './Home.css'

export default props => {
    const [cnpj, setCnpj] = useState(' ')
    const [showElement, setShowElement] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState(false)
    const [msg, setMsg] = useState(false)

    function newCnpj(e) {
        setCnpj(e.target.value)
    }

    function buscarCNpj(){
        axios.get('http://127.0.0.1:8000/api/consulta-cnpj/?cnpj='+cnpj)
        .then(response => {
            if(response.data.errors){
                setMsg(response.data.errors.cnpj[0])
                setShowModal(true)
            } else {
                setData(response.data)
                setShowElement(true)
            }
        })
        .catch(err =>{
            setMsg("Error ao consultar o CNPJ.")
            setShowModal(true)
        })
    }
    
    return (
        <div className="BuscaInicial">
            <div className="title">
                <h1>Pesquisar CNPJ</h1>
            </div>
            <div className="inputs">
                <div>
                    <ReactInputMask mask="99.999.999/9999-99" value={cnpj} onChange={newCnpj}/>
                </div>
                <div className="link">
                    <Link to='/informacoes' onClick={buscarCNpj}>Pesquisar</Link>
                </div>
            </div>
            { showElement ? <Nav/> : null }
            { showElement ? <Content cnpj={data}/> : null }
            { showModal ? <ModalAlert msg={msg} onClose={ () => setShowModal(false)}/> : null}

        </div>
    )
}