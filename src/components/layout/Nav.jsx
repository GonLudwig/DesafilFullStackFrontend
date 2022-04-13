import { Nav, Button } from 'react-bootstrap';
import { Link } from "react-router-dom"


import './Nav.css'

export default props => {
    return (
        <div className="navegacao">
            <Nav variant="tabs">
                <Nav.Item>
                    <Nav.Link href="/home">Teste</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">Teste2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">Teste3</Nav.Link>
                </Nav.Item>
            </Nav>
                {/* <Button variant="dark">
                    <Link to="/about">Teste 1</Link>
                </Button>
                <Button>
                    <Link to="/">Teste 2</Link>
                </Button> */}
        </div>
    )
}