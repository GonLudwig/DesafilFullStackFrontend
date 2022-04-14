import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Nav from './Nav'
import Informacoes from '../../views/options/Informacoes'
import AtividadeEconomica from '../../views/options/AtividadeEconomica'
import Socios from '../../views/options/Socios'
import Home from './Home'

import Cnpj from '../../data.js'

import './content.css'

export default props => {
    const newCnpj = Cnpj[0]

    return (
    <main className="content">
        <Nav/>
        <Switch>
            <Route path="/socios">
                <Socios result={newCnpj}/>
            </Route>
            <Route path="/atividadeEconomica">
                <AtividadeEconomica result={newCnpj}/>
            </Route>
            <Route path="/informacoes">
                <Informacoes result={newCnpj}/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    </main>
    )
}
