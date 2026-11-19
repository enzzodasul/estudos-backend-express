import express from 'express';

export const router = express.Router()

//LIST OF TASKS ARRAY
let tarefas = [
  {id: 1, titulo: 'estudy express',concluida: false},
  {id: 2 , titulo: 'estudar node',concluida: true}
]

//LIST OF TASKS (GET)
router.get('/', (req,res) => {
  return res.json(tarefas)
})



//----------------------------------------------------------------
//CREATE TASKS (POST)

router.post('/', (req,res) => {
  const {titulo} = req.body
  const newTask = {
    id: tarefas.length +1,
    titulo,
    concluida: false
  }

  tarefas.push(newTask)
  return res.status(201).json(newTask)
})

//----------------------------------------------------------------
//UPDATE TASKS

router.put('/:id', (req,res) => {
  const {id} = req.params
  const {titulo} = req.body

  const tarefa = tarefas.find(tarefa => tarefa.id === Number(id))

  if(!tarefa) {
    return res.status(404).json({
      error: 'Tarefa não encontrada'
    })
  }

tarefa.titulo = titulo
tarefa.concluida = !tarefa.concluida

return res.json(tarefa)
})

//----------------------------------------------------------------
//DELETE TASKS

router.delete('/:id', (req,res) => {
  const{id} =req.params

  tarefas = tarefas.filter(tarefa => tarefa.id !== Number(id))
  return res.status(204).json()
  console.log ("usuario deletado com sucesso ")
})
