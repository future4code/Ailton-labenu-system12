import { AdcDocente } from "../types/docente";
import { connection } from "./baseDataBase"

export async function inserirDocente(inserirDocente: AdcDocente){

    const {id, nome, email, data_nasc, turma_id} = inserirDocente
    await connection ("docente")
    .insert({
        id,
        nome,
        email,
        data_nasc,
        turma_id
        
    })

    return `Docente ${nome} cadastrado(a) com sucesso.`
}