import { useNavigate, useLoaderData } from "react-router-dom"

function TaskEdit() {
    const task = useLoaderData() as Awaited<ReturnType<typeof editLoader>>
    const navigate = useNavigate()

    return (
        <div>
            <h1 className="title">Редактирование</h1>
            <div className="container">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    Назад
                </button>
                <div className="task-full">
                    <h2 className="cat-title">Название задачи</h2>
                    <div>
                        <textarea
                            placeholder="Название задачи"
                            className="area"
                            autoComplete="off"
                            required
                            maxLength={80}
                            defaultValue={task.title}>
                        </textarea>
                    </div>

                    <h2 className="cat-title">Приоритет</h2>
                    <select className="select-edit" defaultValue={task.priority}>
                        <option value="Низкий">Низкий</option>
                        <option value="Основной">Основной</option>
                        <option value="Высший">Высший</option>
                    </select>

                    <h2 className="cat-title">Отметки</h2>
                    <select multiple className="multi-select select-edit " defaultValue={task.mark}>
                        <option value="Изучение">Изучение</option>
                        <option value="Дизайн">Дизайн</option>
                        <option value="Разработка">Разработка</option>
                    </select>

                    <h2 className="cat-title">Описание</h2>
                    <div> 
                        <textarea 
                            placeholder="Описание задачи" 
                            className="area area-description"
                            maxLength={330}
                            defaultValue={task.description}>
                        </textarea>
                    </div>
                    <button className="blue-btn btn-save">Сохранить</button>
                </div>
            </div>
        </div>
    )
}

const editLoader = async ({params}: any) => {
    const id = params.id
    const response = await fetch(`http://localhost:3001/tasks/${id}`)
    return response.json()
}

export {TaskEdit, editLoader}
