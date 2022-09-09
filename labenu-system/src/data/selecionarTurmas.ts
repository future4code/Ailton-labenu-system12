import { AdcTurma } from "../types/turma"
import { connection } from "./baseDataBase"

const tipoTurma = (turma:any) =>{
    const criarTurma : AdcTurma = {
        id: turma.id,
        nome: turma.nome,
        modulo: turma.modulo
    }
    return criarTurma
}
export async function selecionarTurmas(): Promise<AdcTurma[] | undefined>{
    
    const resultado = await connection("turma")

    const todasAsTurmas = resultado.map((turma)=>{
        return tipoTurma(turma)
    })

    return todasAsTurmas
}