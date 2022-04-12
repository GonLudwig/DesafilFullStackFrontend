export default props => {
    const {max, min} = props
    const aleatorio = parseInt ( Math.random() * (max - min)) + min

    return(
        <div>
            <h2>Desafio Aleatorio</h2>
            <p>Numero aleatorio e {aleatorio}</p>
        </div>
    )
}
