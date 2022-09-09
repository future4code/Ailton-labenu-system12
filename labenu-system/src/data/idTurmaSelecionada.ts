import { AdcTurma } from "../types/turma";
import { connection } from "./baseDataBase";

export async function idTurmaSelecionada(turmaId:string):Promise<AdcTurma | undefined>{
    const [ resultado ] = await connection("turma").select("*").where({id:turmaId})

    const tipoDaTurma: AdcTurma = {
        id: resultado.id,
        nome: resultado.nome,
        modulo: resultado.modulo,
    }
    return tipoDaTurma
}