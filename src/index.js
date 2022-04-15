import ReactDOM from 'react-dom'
import App from './views/App'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/queryClient'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css'


const el = document.getElementById('root')

ReactDOM.render(
    <Router>
        <QueryClientProvider client={queryClient}>
            <App/>
        </QueryClientProvider>
    </Router>
    ,el
)