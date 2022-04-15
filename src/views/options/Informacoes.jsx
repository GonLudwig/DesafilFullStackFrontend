import { formatCNPJ, formatCurrency, formatPhone, formatZipCode } from 'react-data-formatter'
import './informacoes.css'

export default props => {
    const Cnpj = props.result

    const date = Cnpj?.data_inicio_atividade.split('-')
    const newDate = `${date[2]}/${date[1]}/${date[0]}`

    return (
        <div className="informacoes">
            <div className='empresarial'>
                <p>Nome empresarial:</p>
                {Cnpj?.nome_fantasia}
            </div>
            <div className='inscricao'>
                <p>Numero da Inscricao:</p>
                {formatCNPJ(Cnpj?.cnpj)}
            </div>
            <div className='dataAbertura'>
                <p>Data da Abertura:</p>
                {newDate}
            </div>
            <div className='ultimaAtualizacao'>
                <p>Ultima atualizacao:</p>
            </div>
            <div className="segundaLinha"></div>
            <div className='logradouro'>
                <p>Logradouro:</p>
                {Cnpj?.logradouro}
            </div>
            <div className='numero'>
                <p>Numero:</p>
                {Cnpj?.numero}
            </div>
            <div className="terceiraLinha"></div>
            <div className='cep'>
                <p>CEP:</p>
                {formatZipCode(Cnpj?.cep)}
            </div>
            <div className='bairro'>
                <p>Bairro:</p>
                {Cnpj?.bairro}
            </div>
            <div className='municipio'>
                <p>Municipio:</p>
                {Cnpj?.municipio}
            </div>
            <div className='uf'>
                <p>UF:</p>
                {Cnpj?.uf}
            </div>
            <div className="quartLinha"></div>
            <div className='telefone'>
                <p>Telefone</p>
                {formatPhone(Cnpj?.ddd_telefone_1)}
            </div>
            <div className='capitalSocial'>
                <p>Capital Social</p>
                {formatCurrency(Cnpj?.capital_social)}
            </div>
        </div>
    )
}