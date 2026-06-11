import { useState } from "react"
import DoneBoard from "./DoneBoard"
import InProgressBoard from "./InProgressBoard"
import TodoBoard from "./ToDoBoard"
import "./style8.scss"
export default function Board() {
  const [tasks, setTasks] = useState(
    [
    {
        id:1,
        title:"Bug Fixing",
        details:"fix broken dropdown closing behavior",
        status:"TO_DO"
    },
    {
        id:2,
        title:"Feature Implementation",
        details:"create tabs system with URL sync",
        status:"TO_DO"
    },
    {
        id:3,
        title:"Auth & Security UI",
        details:"Auto logout after inactivity",
        status:"TO_DO"
    }
   ]
  ) 
  const STATUS_FLOW = {
    TO_DO:"TO_DO",
    IN_PROGRESS:"IN_PROGRESS",
    DONE:"DONE"
  }
  const taskStatusSet = (id) => {
  setTasks(prev =>
    prev.map(t => {
      if (t.id !== id) return t 

      const nextStatus = 
        t.status === STATUS_FLOW.TO_DO     ? STATUS_FLOW.IN_PROGRESS :
        t.status === STATUS_FLOW.IN_PROGRESS ? STATUS_FLOW.DONE : STATUS_FLOW.TO_DO

      return { ...t, status: nextStatus }  
    })
  )
  }
  const doneTasks = tasks.filter(task => task.status === STATUS_FLOW.DONE)
  const inProgressTasks = tasks.filter(task => task.status === STATUS_FLOW.IN_PROGRESS)
  const toDoTasks =tasks.filter(task => task.status === STATUS_FLOW.TO_DO)


  return (
    <div className="board-container">
      <div>
        <h2>To Do</h2>
        <TodoBoard 
        toDoTasks={toDoTasks}
        taskStatusSet={taskStatusSet}
        />
      </div>
      <div> 
        <h2>In Progress</h2>
        <InProgressBoard 
        inProgressTasks={inProgressTasks}
        taskStatusSet={taskStatusSet}
        />
      </div>
      <div>
        <h2>Done</h2>
        <DoneBoard 
        doneTasks={doneTasks}
        taskStatusSet={taskStatusSet}
        />
      </div>   
    </div>
  )
}
