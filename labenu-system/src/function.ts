import { AdcDocente } from "./types/docente";
import { AdcTurma } from "./types/turma";

export const tiparTurma = (turma:any) => {

    const criarTurma : AdcTurma = {
        id: turma.id,
        nome: turma.nome,
        modulo: turma.modulo
    }
    return criarTurma
}

export const tiparDocente = (docente:any) => {
    
    const criarDocente: AdcDocente = {
        id: docente.id,
        nome: docente.nome,
        email: docente.email,
        data_nasc: docente.data_nasc,
        turma_id : docente.turma_id
    }
    return criarDocente
}