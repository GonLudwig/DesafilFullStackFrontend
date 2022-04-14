import { Link } from "react-router-dom"

import './nav.css'

export default props => {
    return (
        <div className="navegacao">
            <Link to="/">Home</Link>
            <Link to="/informacoes">Informacoes</Link>
            <Link to="/atividadeEconomica">Atividade Economida</Link>
            <Link to="/socios">Socios</Link>
        </div>
    )
}