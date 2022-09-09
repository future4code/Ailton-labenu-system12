import { AdcTurma } from "./types/turma";

export const tipoTurma = (turma:any) => {

    const criarTurma : AdcTurma = {
        id: turma.id,
        nome: turma.nome,
        modulo: turma.modulo
    }
    return criarTurma
}