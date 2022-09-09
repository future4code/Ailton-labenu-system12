import { AdcDocente } from "../types/docente"
import { connection } from "./baseDataBase"

const tipoDocente = (docente:any) =>{
    const criarDocente : AdcDocente= {
        id: docente.id,
        nome: docente.nome,
        email: docente.email,
        data_nasc: docente.data_nasc,
        turma_id: docente.turma_id
    }
    return criarDocente
}


export async function selecionarDocente(): Promise<AdcDocente[] | undefined>{
    
    const [resultado] = await connection("docente")

    const todosOsDocentes = resultado.map((docente: any)=>{
        return tipoDocente(docente)
    })

    return todosOsDocentes
}