import { AdcTurma } from "../types/turma"
import { connection } from "./baseDataBase"

export async function selecionarTurmas(): Promise<AdcTurma[] | undefined>{
    
    const resultado = await connection("turmas")

    const todasAsTurmas = resultado.map((turmas)=>{
        return turmas.modulo > 0
    })
    return todasAsTurmas
}