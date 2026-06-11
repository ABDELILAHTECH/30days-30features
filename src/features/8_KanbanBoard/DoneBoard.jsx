import TaskCard from "./TaskCard";

export default function DoneBoard({doneTasks, taskStatusSet}) {
  return (
    <ul className="done-board board">
      {
        doneTasks &&
        doneTasks.map(task => 
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
