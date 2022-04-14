
export default props => {
    const Cnpj = props.result

    const tr = Cnpj.qsa.map((socios, i) =>{
        return (
            <tr key={i}>
                <td>
                    {socios.nome_socio}
                </td>
                <td>
                    {socios.cnpj_cpf_do_socio}
                </td>
            </tr>
        )
    })

    return(
        <div className="socios">
            <table>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>CPF Representante</td>
                    </tr>
                </thead>
                <tbody>
                    {tr}
                </tbody>
            </table>
        </div>
    )
}