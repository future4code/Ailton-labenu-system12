import { Request, Response } from "express";
import { idTurmaSelecionada } from "../data/idTurmaSelecionada";
import { Turma } from "../types/turma";
import { alteraModulo } from "../data/alteraModulo"


export async function mudarModulo (req:Request, res:Response){
    try{
        const {turmaId, modulo} = req.body

        if(!turmaId || !modulo){
            throw new Error( "Turma não encontrada.")
        }
        
        const turmaCadastrada = await idTurmaSelecionada(turmaId)

        if(!turmaCadastrada){
            throw new Error("Id dessa turma não existe.")
        }
        if(modulo === "0"){
            throw new Error("Não é possível alterar turma para o modulo 0.")
        }

        await alteraModulo(turmaId, modulo)
        res.status(200).send({message: "Modulo alterado com sucesso."})

    } catch (error: any){
        res.status(500). send({message:error.message})
    }
}