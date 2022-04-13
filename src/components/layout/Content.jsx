import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Nav from './Nav'

import './Content.css'

export default props => {
    return (
    <main className="Content">
        <Nav/>
        <Switch>
            <Route path="/about">
            </Route>
            <Route path="/">
            </Route>
        </Switch>
    </main>
    )
}
