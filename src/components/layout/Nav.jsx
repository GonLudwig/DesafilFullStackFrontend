import { Link } from "react-router-dom"

import './nav.css'

export default props => {
    return (
        <div className="navegacao">
            <div>
                <Link to="/informacoes">Informacoes</Link>
            </div>
            <div>
                <Link to="/atividadeEconomica">Atividade Economida</Link>
            </div>
            <div>
                <Link to="/socios">Socios</Link>
            </div>
        </div>
    )
}