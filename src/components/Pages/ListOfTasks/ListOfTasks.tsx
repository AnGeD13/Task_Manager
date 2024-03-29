import { Sort } from "../../Sort/Sort"
import { Filters } from "../../Filters/Filters"
import { Task } from "../../Task/Task"
import { createRef, useEffect, useRef, useState } from "react"
import { ITask } from "../../Task/task-model"
import axios from "axios"


const portion = 15;
const totalCount = 61;
const url = "http://localhost:3001/tasks"


export function ListOfTasks() {
    const lastTask = createRef<HTMLDivElement>() 
    const [tasks, setTasks] = useState<ITask[]>([])
    const [start, setStart] = useState<number>(0)

    const getNewTasks = () => {
        axios
            .get(url, {
                params: {
                    _limit: portion,
                    _start: start
                },
            })
            .then(res => setTasks([...tasks, ...res.data]))
            setStart(start + portion)
    }

    useEffect(() => {
        getNewTasks()
    }, [])

    const actionInSight = (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting && (start <= totalCount)) {
            getNewTasks()
        }
    }

    const options = {
        threshold: 0.8
    }

    const observerLoader = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        if (observerLoader.current) {
            observerLoader.current.disconnect()
        }

        observerLoader.current = new IntersectionObserver(actionInSight, options)

        if (lastTask.current) {
            observerLoader.current.observe(lastTask.current)
        }
    }, [lastTask])


    

    return (
        <div>
            <h1 className='title'>Список задач</h1>
            <div className="main-container">
                <div className='categories'>
                    <Sort/>
                    <Filters/>
                </div>
                <div className="main-btn">
                    <button 
                    className='blue-btn add-btn'>
                        Добавить задачу
                    </button>
                </div>
                <div className="tasks">
                    {tasks.map((task, index) => {
                        if (index + 1 === tasks.length) {
                            return <Task task={task} key={task.id} ref={lastTask}/>
                        }
                        return <Task task={task} key={task.id}/>
                    })}
                </div>       
            </div>
        </div>
    )
}
