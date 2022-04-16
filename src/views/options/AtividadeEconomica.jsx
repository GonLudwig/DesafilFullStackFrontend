import './atividadeEconomica.css'

export default props => {

    const tr = props.result?.cnaes_secundarios?.map((atividade, i) => {
        return (
            <tr key={i} className={i % 2 ? 'impar' : 'par'}>
                <td>
                    {atividade?.codigo}
                </td>
                <td>
                    {atividade?.descricao}
                </td>
            </tr>
        )
    })

    return(
        <div className="atividadeEconomica">
            <table>
                <thead>
                    <tr>
                        <td>Codigo</td>
                        <td>Descricao</td>
                    </tr>
                </thead>
                <tbody>
                    {tr}
                </tbody>
            </table>
        </div>
    )
}