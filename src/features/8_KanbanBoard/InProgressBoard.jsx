import TaskCard from "./TaskCard"
export default function InProgressBoard({inProgressTasks, taskStatusSet}) {
  return (
    <ul className="in-progress-board board">
      {
        inProgressTasks &&
        inProgressTasks.map(task => 
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
