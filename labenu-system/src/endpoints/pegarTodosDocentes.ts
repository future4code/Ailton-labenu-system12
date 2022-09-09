import { Request, Response } from "express"
import { selecionarDocente } from "../data/selecionarDocentes";

export async function pegarTodosDocentes(req: Request, res:Response){
    try{ 
        const todosDocentes = await selecionarDocente()

        if(!todosDocentes){
            throw new Error ("Não existem docentes cadastradss.")
        }
        
        res.status(200).send(todosDocentes)

    } catch(error:any){
        res.status(500).send({message: error.message})
    }
}