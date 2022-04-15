import './atividadeEconomica.css'

export default props => {
    const Cnpj = props.result
    const tr = Cnpj.cnaes_secundarios.map((atividade, i) =>{
        return (
            <tr className={i % 2 ? 'impar' : 'par'}>
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