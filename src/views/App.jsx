import { BrowserRouter as Router } from 'react-router-dom'

import Content from '../components/layout/Content'
import Home from '../components/layout/Home'

import './App.css'

const App = props => (
    <div className="App">
        <Router>
            <Content/>
        </Router>
    </div>
)

export default App