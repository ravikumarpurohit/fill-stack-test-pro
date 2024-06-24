import React from 'react';

const Filter = ({ status, onChange }) => {
  return (
    <div className="filter">
      <select value={status} onChange={(e) => onChange(e.target.value)}>
        <option value="All">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default Filter;
