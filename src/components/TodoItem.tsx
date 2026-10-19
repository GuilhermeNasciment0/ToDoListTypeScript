import type { Todo } from '../types/Todo';

interface TodoItemProps {
    tarefas: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoItem = ({ tarefas, onToggle, onDelete }: TodoItemProps) => {

    const prioridadeCor = {
        baixa: "bg-blue-500 text-blue-400 border-blue-500",
        media: "bg-amber-500 text-amber-400 border-amber-500",
        alta: "bg-rose-500 text-rose-400 border-rose-500",
    }
    return (
        <div>
            <div>
                <input
                    type="checkbox"
                    checked={tarefas.completado}
                    onChange={() => onToggle(tarefas.id)}
                />
                <span className={tarefas.completado ? "text-slate-500" : "text-slate-200"}>
                    {tarefas.text}
                </span>
            </div>
            <div>
                <span className={`${prioridadeCor[tarefas.prioridade]}`}>
                    {tarefas.prioridade}
                </span>
                <button onClick={() => onDelete(tarefas.id)}>Excluir</button>
            </div>

        </div>
    )
}

export default TodoItem
