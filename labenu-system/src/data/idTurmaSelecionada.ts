import { AdcTurma } from "../types/turma";
import { connection } from "./baseDataBase";
import { tiparTurma } from "../function"

export async function idTurmaSelecionada(turmaId:string):Promise<AdcTurma[] | undefined>{
    const [ resultado ] = await connection().select("*").from("turma").where("modulo","like",`%${turmaId}%`)

    if(resultado){
        const tipoTurma = resultado.map((turma: any)=>{
            return tiparTurma(turma)
        })
        return tipoTurma
    } else {
        return undefined
    }
}