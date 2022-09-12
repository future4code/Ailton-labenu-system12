import { AdcTurma } from "../types/turma";
import { connection } from "./baseDataBase"

export async function inserirTurma(inserirTurma: AdcTurma){

    const {id, nome, modulo} = inserirTurma
    await connection ("turma")
    .insert({
        id,
        nome,
        modulo
    })

    return `Turma ${nome} cadastrada com sucesso.`
}