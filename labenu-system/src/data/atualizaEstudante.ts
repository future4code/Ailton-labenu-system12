import { connection } from "./baseDataBase";

export async function atualizaEstudante(estudanteId: string, turma: string) {
    await connection("estudantes").where("id", `${estudanteId}`).update({ turma_id: turma })
}