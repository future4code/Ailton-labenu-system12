import { Request, Response } from "express";
import { inserirEstudante } from "../data/inserirEstudante";
import { Estudante, AdcEstudante } from './../types/estudante';


export async function cadastrarEstudante (req: Request, res: Response){
    try{ 
        const {nome, email, data_nasc, turma_id }: Estudante = req.body

        if (!nome || !email || !data_nasc || !turma_id){
            throw new Error ("Preencha todos os campos para continuar!")
        }

        const adicionarEstudante : AdcEstudante = {
            id: new Date().toString(),
            nome,
            email,
            data_nasc,
            turma_id
        } 

        const resposta = await inserirEstudante(adicionarEstudante)

        res.status(201).send({message:resposta})
    } catch(error: any){
        res.status(500). send({message:error.message})
    }
}