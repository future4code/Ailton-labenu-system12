import { Request, Response } from "express"
import { selecionarTurmas } from "../data/selecionarTurmas"

export async function buscarTurmasAtivas(req: Request, res:Response){
    try{ 
        const turmasAtivas = await selecionarTurmas()

        if(!turmasAtivas){
            throw new Error ("Não existem turmas cadastradas.")
        }
        
        res.status(200).send(turmasAtivas)

    } catch(error:any){
        res.status(500).send({message: error.message})
    }
}
