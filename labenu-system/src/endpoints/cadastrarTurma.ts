import { Request, Response } from "express";
import { Turma, AdcTurma } from "../types/turma";
import { inserirTurma } from "../data/inserirTurma";

export async function cadastrarTurma (req: Request, res: Response){
    try{ 
        const {nome, modulo}: Turma = req.body

        if (!nome || !modulo){
            throw new Error ("Preencha todos os campos para continuar!")
        }

        const adicionarTurma : AdcTurma = {
            id: new Date().toString(),
            nome,
            modulo
        } 

        const resposta = await inserirTurma(adicionarTurma)

        res.status(201).send({message:resposta})
    } catch(error: any){
        res.status(500). send({message:error.message})
    }
}