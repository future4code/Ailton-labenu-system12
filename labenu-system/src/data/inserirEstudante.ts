import { AdcEstudante } from "../types/estudante";
import { connection } from "./baseDataBase"

export async function inserirEstudante(inserirEstudante: AdcEstudante){

    const {id, nome, email, data_nasc, turma_id} = inserirEstudante
    await connection ("estudante")
    .insert({
        id,
        nome,
        email,
        data_nasc,
        turma_id
        
    })

    return `Estudante ${nome} cadastrado(a) com sucesso.`
}