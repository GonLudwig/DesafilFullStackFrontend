import './modalAlert.css'

export default (props) => {

    const closeForaModal = (e) => {
        if (e.target.id == 'modalAlert') {
            props.onClose()
        }
    }

    return (
        <div id="modalAlert" className="modalAlert" onClick={closeForaModal}>
            <div className="containerModal">
                <button className="close" onClick={props.onClose}> X </button>
                <h5>{props.msg}</h5>
            </div>
        </div>
    )
}