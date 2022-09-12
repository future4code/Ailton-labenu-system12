import { Request, Response } from "express";
import { idTurmaSelecionada } from "../data/idTurmaSelecionada";
import { atualizaEstudante } from "../data/atualizaEstudante";

export async function mudarDocenteDeTurma(req:Request, res: Response) {
    try{
        const { estudanteId, turma} = req.body
        if(!estudanteId || turma){
            throw new Error (" Id e turma devem ser passados.")
        }
        const turmaCadastrada = await idTurmaSelecionada(turma)

        if(!turmaCadastrada){
            throw new Error ("Turma não encontrada.")
        }

        await atualizaEstudante(estudanteId, turma)

        res.status(estudanteId, )

    } catch(error: any) {
        res.status(500).send({ message: error.message })
    }
}