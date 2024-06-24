import React from 'react';
import Item from './Item';

const List = ({ tasks, onDelete, onStatusChange }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Item
          key={task._id}
          task={task}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
};

export default List;
