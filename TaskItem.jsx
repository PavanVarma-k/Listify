function TaskItem({ task, onToggle, onDelete }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="task-item">
      <div
        className={`task-checkbox ${task.completed ? 'completed' : ''}`}
        onClick={() => onToggle(task.id)}
      />
      
      <div className="task-content">
        <div className={`task-text ${task.completed ? 'completed' : ''}`}>
          {task.text}
        </div>
        <div className="task-date">
          Created {formatDate(task.createdAt)}
        </div>
      </div>
      
      <button
        className="task-delete"
        onClick={() => onDelete(task.id)}
        title="Delete task"
      >
        ×
      </button>
    </div>
  )
}

export default TaskItem
