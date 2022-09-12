import { AdcEstudante } from './../types/estudante';
import { connection } from "./baseDataBase"

export async function selecionarEstudante(id: string): Promise<AdcEstudante[] | undefined>{
    
    const resultado = await connection("estudante").where({id})

    return resultado
}