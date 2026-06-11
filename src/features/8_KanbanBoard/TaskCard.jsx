
export default function TaskCard({task, taskStatusSet}) {
  return (
    <li  className="task-card">
       <h3>{task.title}</h3>
       <p>{task.details}</p>
       <button
       onClick={() => taskStatusSet(task.id)}
       >
      Go Next
      </button>
    </li>
  )
}
