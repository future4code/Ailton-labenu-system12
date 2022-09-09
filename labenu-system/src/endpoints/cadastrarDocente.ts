import { Request, Response } from "express";
import { Docente, AdcDocente } from "../types/docente";
import { inserirDocente } from "../data/inserirDocente";

export async function cadastrarDocente (req: Request, res: Response){
    try{ 
        const {nome, email, data_nasc, turma_id }: Docente = req.body

        if (!nome || !email || !data_nasc || !turma_id){
            throw new Error ("Preencha todos os campos para continuar!")
        }

        const adicionarDocente : AdcDocente = {
            id: new Date().toString(),
            nome,
            email,
            data_nasc,
            turma_id
        } 

        const resposta = await inserirDocente(adicionarDocente)

        res.status(201).send({message:resposta})
    } catch(error: any){
        res.status(500). send({message:error.message})
    }
}