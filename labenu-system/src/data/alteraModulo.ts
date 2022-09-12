import { connection } from "./baseDataBase";


export async function alteraModulo(turmaId: string, modulo: string): Promise<void> {
    await connection ("turma").where("id", `${turmaId}`).update({modulo})
}