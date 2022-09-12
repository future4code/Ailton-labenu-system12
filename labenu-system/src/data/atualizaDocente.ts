import { connection } from "./baseDataBase";

export async function atualizaDocente(docenteId: string, turma: string) {
    await connection("docentes").where("id", `${docenteId}`).update({ turma_id: turma })
}