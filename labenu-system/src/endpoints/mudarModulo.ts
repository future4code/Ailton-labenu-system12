import { Request, Response } from "express";
import { idTurmaSelecionada } from "../data/idTurmaSelecionada";
import { Turma } from "../types/turma";


export async function mudarModulo (req:Request, res:Response){
    try{
        const turmaId = req.params.turmaId

        const turmaSelecionada = idTurmaSelecionada(turmaId)
        if(!turmaSelecionada){
            throw new Error( "Turma não encontrada ")
        }
        
        const {nome, modulo} : Turma = req.body;
        if (!nome || !modulo) {
            throw new Error ("Preencha os campos para continuar.")
        }
        const novoModulo = {
            nome,
            modulo
        }
        turmaSelecionada.push(novoModulo)

    } catch (error: any){
        res.status(500). send({message:error.message})
    }
}