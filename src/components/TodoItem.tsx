import type { Todo } from '../types/Todo';

interface TodoItemProps {
    tarefas: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoItem = ({ tarefas, onToggle, onDelete }: TodoItemProps) => {
    // Cores sutis para o badge de prioridade (fundo translúcido + texto colorido)
    const prioridadeCor = {
        baixa: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        media: "bg-amber-500/10 text-amber-400 border-amber-500/20",
        alta: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    };

    return (
        <div className="flex items-center justify-between bg-slate-950/60 border border-slate-800/80 rounded-xl p-4 transition-all hover:border-slate-700">
            {/* Lado esquerdo: Checkbox + Texto */}
            <div className="flex items-center gap-3.5 overflow-hidden">
                <input
                    type="checkbox"
                    checked={tarefas.completado}
                    onChange={() => onToggle(tarefas.id)}
                    className="w-5 h-5 rounded border-slate-700 bg-slate-900 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-slate-950 cursor-pointer accent-indigo-600"
                />
                <span className={`text-sm md:text-base font-medium truncate transition-colors ${tarefas.completado ? "text-slate-500 line-through" : "text-slate-200"
                    }`}>
                    {tarefas.text}
                </span>
            </div>

            {/* Lado direito: Prioridade + Botão Excluir */}
            <div className="flex items-center gap-3 flex-shrink-0">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border capitalize ${prioridadeCor[tarefas.prioridade]}`}>
                    {tarefas.prioridade}
                </span>

                <button
                    onClick={() => onDelete(tarefas.id)}
                    className="text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 p-2 rounded-lg transition-colors"
                    title="Excluir tarefa"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default TodoItem