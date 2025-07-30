import { useState } from 'react'

function AddTask({ onAddTask }) {
  const [taskText, setTaskText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (taskText.trim()) {
      onAddTask(taskText)
      setTaskText('')
    }
  }

  return (
    <div className="add-task">
      <form onSubmit={handleSubmit} className="add-task-form">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add a new task..."
          className="add-task-input"
          maxLength={200}
        />
        <button 
          type="submit" 
          className="add-task-button"
          disabled={!taskText.trim()}
        >
          Add Task
        </button>
      </form>
    </div>
  )
}

export default AddTask
