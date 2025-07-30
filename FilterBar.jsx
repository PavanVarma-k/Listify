function FilterBar({ currentFilter, onFilterChange, stats }) {
  const filters = [
    { key: 'all', label: 'All', count: stats.total },
    { key: 'pending', label: 'Pending', count: stats.pending },
    { key: 'completed', label: 'Completed', count: stats.completed }
  ]

  return (
    <div className="filter-bar">
      <div className="filter-buttons">
        {filters.map(filter => (
          <button
            key={filter.key}
            className={`filter-button ${currentFilter === filter.key ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.key)}
          >
            {filter.label} ({filter.count})
          </button>
        ))}
      </div>
      
      <div className="task-stats">
        <div className="stat-item">
          <span>Total:</span>
          <span className="stat-number">{stats.total}</span>
        </div>
        <div className="stat-item">
          <span>Pending:</span>
          <span className="stat-number">{stats.pending}</span>
        </div>
        <div className="stat-item">
          <span>Completed:</span>
          <span className="stat-number">{stats.completed}</span>
        </div>
      </div>
    </div>
  )
}

export default FilterBar
