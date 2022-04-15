import './socios.css'

export default props => {
    const Cnpj = props.result
    const tr = ' '

    if (Cnpj) {
        tr = Cnpj.qsa.map((socios, i) =>{
            return (
                <tr className={i % 2 ? 'impar' : 'par'}>
                    <td>
                        {socios.nome_socio}
                    </td>
                    <td>
                        {socios.cnpj_cpf_do_socio}
                    </td>
                </tr>
            )
        })
    }

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