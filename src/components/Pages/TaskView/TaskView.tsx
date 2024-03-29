import { Link, useLoaderData} from "react-router-dom";
import { useNavigate} from "react-router-dom";


function TaskView() {
    const {task, id} = useLoaderData() as Awaited<ReturnType<typeof taskLoader>>
    const navigate = useNavigate()

    return (
        <div>
            <h1 className="title">Просмотр</h1>
            <div className="container">
                <div className="btns">
                    <button className="back-btn" onClick={() => navigate(-1)}>
                        Назад
                    </button>
                    <Link to={`/task/${id}/task_edit`}>
                        <button className="blue-btn edit-btn">Редактировать</button>
                    </Link>
                    <button className="red-btn">Удалить</button>
                </div>
                <div className="task-full">
                    <h2 className="cat-title">Название задачи</h2>
                    <p>{task.title}</p>
                    <h2 className="cat-title">Дата создания</h2>
                    <p>{task.date}</p>
                    <h2 className="cat-title">Приоритет</h2>
                    <p>{task.priority}</p>
                    <h2 className="cat-title">Отметки</h2>
                    <p>{task.mark!.length ? task.mark!.join(', ') : '-'}</p>
                    <h2 className="cat-title">Описание</h2>
                    <p>{task.description}</p>
                </div>
            </div>
        </div>
    )
}

const taskLoader = async ({params}: any) => {
    const id = params.id
    const response = await fetch(`http://localhost:3001/tasks/${id}`)
    const task = await response.json()
    return {task, id}
}

export {TaskView, taskLoader}