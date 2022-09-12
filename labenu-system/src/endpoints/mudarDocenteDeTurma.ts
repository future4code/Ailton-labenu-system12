import { Request, Response } from "express";
import { idTurmaSelecionada } from "../data/idTurmaSelecionada";
import { selecionaDocente } from "../data/selecionaDocente";
import { atualizaDocente } from "../data/atualizaDocente";

export async function mudarDocenteDeTurma(req:Request, res: Response) {
    try{
        const { docenteId, turma} = req.body
        if(!docenteId || turma){
            throw new Error (" Id e turma devem ser passados.")
        }
        const turmaCadastrada = await idTurmaSelecionada(turma)

        if(!turmaCadastrada){
            throw new Error ("Turma não encontrada.")
        }

        const docenteCadastrado = await selecionaDocente()

        if(!docenteCadastrado){
            throw new Error ("Id do docente não encontrado.")
        }
        await atualizaDocente(docenteId, turma)

        res.status(docenteId, )

    } catch(error: any) {
        res.status(500).send({ message: error.message })
    }
}