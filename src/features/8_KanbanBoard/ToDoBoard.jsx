import TaskCard from "./TaskCard"
export default function ToDoBoard({toDoTasks, taskStatusSet}) {
  return (
    <ul className='to-do-board board'>
      {
              toDoTasks &&
              toDoTasks.map(task => 
              <TaskCard 
              key={task.id}
              task={task}
              taskStatusSet={taskStatusSet}    
              />
              )
            }
    </ul>
  )
}
