import TaskItem from './TaskItem'

function TaskList({ tasks, onToggleTask, onDeleteTask, filter }) {
  if (tasks.length === 0) {
    return (
      <div className="task-list">
        <div className="task-list-empty">
          <h3>
            {filter === 'completed' && 'No completed tasks'}
            {filter === 'pending' && 'No pending tasks'}
            {filter === 'all' && 'No tasks yet'}
          </h3>
          <p>
            {filter === 'completed' && 'Complete some tasks to see them here.'}
            {filter === 'pending' && 'All tasks are completed! Great job!'}
            {filter === 'all' && 'Add your first task to get started.'}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  )
}

export default TaskList
