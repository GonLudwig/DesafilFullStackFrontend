
export default props => {
    const Cnpj = props.result

    const tr = Cnpj.cnaes_secundarios.map((atividade, i) =>{
        return (
            <tr key={i}>
                <td>
                    {atividade.codigo}
                </td>
                <td>
                    {atividade.descricao}
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