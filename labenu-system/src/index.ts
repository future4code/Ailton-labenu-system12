import { app } from "./app";
import { cadastrarTurma } from "./endpoints/cadastrarTurma"
import { buscarTurmasAtivas } from "./endpoints/bascarTurmasAtivas"
import { mudarModulo } from "./endpoints/mudarModulo"


import { cadastrarDocente } from "./endpoints/cadastrarDocente";
import { pegarTodosDocentes } from "./endpoints/pegarTodosDocentes";
import { mudarDocenteDeTurma } from "./endpoints/mudarDocenteDeTurma"

// turma
app.post("/turma", cadastrarTurma )
app.get("/turma", buscarTurmasAtivas )
app.put("/turma/:id", mudarModulo)

//estudante
//app.post("/estudante", cadastrarEstudante)
//app.get("/estudante/:nome", buscarEstudanteNome )
//app.put("/estudante/:nome", mudarEstudanteDeTurma )

//docente
app.post("/docente", cadastrarDocente)
app.get("/docente", pegarTodosDocentes)
app.put("/docente/:id", mudarDocenteDeTurma)