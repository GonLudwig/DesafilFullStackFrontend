import { BrowserRouter as Router } from 'react-router-dom'

import Home from '../components/layout/Home'

import './App.css'

const App = props => (
    <div className="App">
        <Router>
            <Home/>
        </Router>
    </div>
)

export default App