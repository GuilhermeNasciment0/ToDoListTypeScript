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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-6 md:p-8">

        {/* Cabeçalho */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Minhas Tarefas</h1>
          <p className="text-sm text-slate-400">Gerencie seu dia a dia com React e TypeScript</p>
        </div>

        {/* Formulário */}
        <form onSubmit={adicionarTarefa} className="space-y-4 mb-8">
          <div>
            <input
              type="text"
              placeholder="Digite sua nova tarefa..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <select
              value={prioridade}
              onChange={(e) => setPrioridade(e.target.value as Prioridade)}
              className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all capitalize"
            >
              <option value="baixa">Baixa</option>
              <option value="media">Média</option>
              <option value="alta">Alta</option>
            </select>

            <button
              type="submit"
              className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-indigo-600/20 transition-all duration-200 active:scale-[0.98]"
            >
              Adicionar Tarefa
            </button>
          </div>
        </form>

        {/* Lista de Tarefas */}
        <div className="space-y-3">
          {todos.length === 0 ? (
            <div className="text-center py-12 border border-dashed border-slate-800 rounded-xl">
              <p className="text-slate-500">Nenhuma tarefa cadastrada no momento.</p>
            </div>
          ) : (
            todos.map(todo => (
              <TodoItem
                key={todo.id}
                tarefas={todo}
                onToggle={toggleTarefas}
                onDelete={deleteTarefa}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default App