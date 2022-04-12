import react from 'react'
import Content from '../components/layout/Content'
import Home from '../components/layout/Home'
import Menu from '../components/layout/Menu'

import './App.css'

export default props => {
    return (
        <div className="App">
            {/* <Menu/>
            <Content/> */}
            <Home/>
        </div>
    )
}