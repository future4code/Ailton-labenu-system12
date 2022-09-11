import { AdcDocente } from "../types/docente";
import { connection } from "./baseDataBase";
import { tiparDocente } from "../function"

export async function selecionaDocente (): Promise<AdcDocente[] | undefined>{
    const resultado = await connection ("docente")

    if(resultado) {
        const tipoDocente = resultado.map((docente:any)=>{
            return tiparDocente(docente)
        })
        return tipoDocente 
    } else {
        return undefined
    }

}