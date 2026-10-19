import { useState } from "react"
import type { Todo, Prioridade } from "./types/Todo"
import TodoItem from "./components/TodoItem"


const App = () => {

  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Estudar CP', completado: false, prioridade: "alta" },
    { id: 2, text: 'Entregar Next', completado: true, prioridade: "media" },
  ]);
  const [text, setText] = useState("")
  const [prioridade, setPrioridade] = useState<Prioridade>("media");

  //função adicionar tarefa
  const adicionarTarefa = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    const novaTarefa: Todo = {
      id: Date.now(),
      text,
      completado: false,
      prioridade
    };
    setTodos([novaTarefa, ...todos]);
    setText("");
  };

  const toggleTarefas = (id: number) => {
    setTodos(todos.map(t => (t.id === id ? { ...t, completado: !t.completado } : t)))
  }

  const deleteTarefa = (id: number) => {
    setTodos(todos.filter(t => t.id !== id))
  };


  return (
    <div>
      <div>
        <h1>Minhas Tarefas</h1>
        <p>Projeto Tarefas com TypeScript</p>

        <form onSubmit={adicionarTarefa}>
          <div>
            <input
              type="text"
              placeholder="Digite sua tarefa"
              value={text}
              onChange={(e) => setText(e.target.value)} />
          </div>

          <div>
            <select
              value={prioridade}
              onChange={(e) => setPrioridade(e.target.value as Prioridade)}
            >
              <option value="baixa">Baixa</option>
              <option value="media">Média</option>
              <option value="alta">Alta</option>
            </select>

            <button type="submit">Adicionar Tarefa</button>
          </div>
        </form>
        <div>
          {todos.length === 0 ? (
            <p>Nenhuma Tarefa cadastrada</p>
          ) : (
            todos.map(todo => (
              <TodoItem key={todo.id} tarefas={todo} onToggle={toggleTarefas}
                onDelete={deleteTarefa} />
            ))
          )}
        </div>
      </div>

    </div>
  )
}

export default App
