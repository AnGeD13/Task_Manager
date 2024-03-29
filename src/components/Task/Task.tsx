import { Link } from "react-router-dom"
import { ITask } from "./task-model"
import { LegacyRef, forwardRef } from "react"


interface TaskProps {
    task: ITask
}

const Task = forwardRef(({task}: TaskProps, ref: LegacyRef<HTMLDivElement>) => {
    return (
        <div className='task-card' ref={ref}>
            <Link 
                to={`task/${task.id}`} 
                className="task-title"
            >
                <h2>{task.title}</h2>
            </Link>
            <p>Создано: {task.date}</p>
            <p>Приоритет: {task.priority}</p>
            <p>Отметки: {task.mark.length ? task.mark.join(', ') : '-'}</p>
        </div>
    )
})

export {Task}