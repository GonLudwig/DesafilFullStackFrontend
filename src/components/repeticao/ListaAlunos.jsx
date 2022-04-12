import alunos from "../../data/alunos";

export default props => {
    const li = alunos.map(aluno => {
        return(
            <li key={aluno.id}>
                {aluno.nome} -> {aluno.nota}
            </li>
        )
    })

    return (
        <div>
            <ul style={{ listStyle: "none" }}>
                {li}
            </ul>
        </div>
    )
}