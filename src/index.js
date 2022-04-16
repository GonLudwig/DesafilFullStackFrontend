import ReactDOM from 'react-dom'
import App from './views/App'
import { BrowserRouter as Router } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'


const el = document.getElementById('root')

ReactDOM.render(
    <Router>
        <App/>
    </Router>
    ,el
)