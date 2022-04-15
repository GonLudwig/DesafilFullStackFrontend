import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Informacoes from '../../views/options/Informacoes'
import AtividadeEconomica from '../../views/options/AtividadeEconomica'
import Socios from '../../views/options/Socios'

import './content.css'

export default props => {
    const newCnpj = props.cnpj[0]

    return (
    <main className="content">
        <Switch>
            <Route path="/socios">
                <Socios result={newCnpj ? newCnpj : null}/>
            </Route>
            <Route path="/atividadeEconomica">
                <AtividadeEconomica result={newCnpj}/>
            </Route>
            <Route path="/informacoes">
                <Informacoes result={newCnpj}/>
            </Route>
        </Switch>
    </main>
    )
}
