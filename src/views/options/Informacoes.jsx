import './informacoes.css'

export default props => {
    const Cnpj = props.result

    return (
        <div className="informacoes">
            <div>
                <p>Nome empresarial:</p>
                {Cnpj.nome_fantasia}
            </div>
            <div>
                <p>Numero da Inscricao:</p>
                {Cnpj.cnpj}
            </div>
            <div>
                <p>Data da Abertura:</p>
                {Cnpj.data_inicio_atividade}
            </div>
            <div>
                <p>Ultima atualizacao:</p>
                {Cnpj.cnpj}
            </div>
            <div>
                <p>Logradouro:</p>
                {Cnpj.logradouro}
            </div>
            <div>
                <p>Numero:</p>
                {Cnpj.numero}
            </div>
            <div>
                <p>CEP:</p>
                {Cnpj.cep}
            </div>
            <div>
                <p>Bairro:</p>
                {Cnpj.bairro}
            </div>
            <div>
                <p>Municipio:</p>
                {Cnpj.municipio}
            </div>
            <div>
                <p>UF:</p>
                {Cnpj.uf}
            </div>
            <div>
                <p>Telefone</p>
                {Cnpj.ddd_telefone_1}
            </div>
            <div>
                <p>Capital Social</p>
                {Cnpj.capital_social}
            </div>
        </div>
    )
}