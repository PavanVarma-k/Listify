import { useState, useEffect } from 'react'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import FilterBar from './components/FilterBar'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('listify-tasks')
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('listify-tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    }
    setTasks(prev => [newTask, ...prev])
  }

  const toggleTask = (id) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const getFilteredTasks = () => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed)
      case 'pending':
        return tasks.filter(task => !task.completed)
      default:
        return tasks
    }
  }

  const taskStats = {
    total: tasks.length,
    completed: tasks.filter(task => task.completed).length,
    pending: tasks.filter(task => !task.completed).length
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Listify</h1>
        <p>Your simple task manager</p>
      </header>

      <main className="app-main">
        <AddTask onAddTask={addTask} />
        <FilterBar 
          currentFilter={filter} 
          onFilterChange={setFilter} 
          stats={taskStats}
        />
        <TaskList 
          tasks={getFilteredTasks()} 
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
          filter={filter}
        />
      </main>
    </div>
  )
}

export default App
