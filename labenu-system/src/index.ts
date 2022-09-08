import { app } from "./app";
import { cadastrarTurma } from "./endpoints/cadastrarTurma"
import { buscarTurmasAtivas } from "./endpoints/bascarTurmasAtivas"

// turma
app.post("/turma", cadastrarTurma )
app.get("/turma", buscarTurmasAtivas )
//app.put("/turma", mudarModulo)

//estudante
//app.post("/estudante", cadastrarEstudante)
//app.get("/estudante/:nome", buscarEstudanteNome )
//app.put("/estudante", mudarEstudanteDeTurma )

//docente
//app.post("/docente", cadastrarDocente)
//app.get("/docente", pegarTodosDocentes)
//app.put("/docente", mudarDocenteDeTurma)