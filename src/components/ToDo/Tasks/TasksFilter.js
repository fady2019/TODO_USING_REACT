import React, { useState } from 'react';

import ActionsBar from '../../UI/ActionsBar';
import Button from '../../UI/Button';

const TasksFilter = props => {
  const [filterValue, setFilterValue] = useState('all');

  const filterHandler = filter => {
    setFilterValue(filter);
    props.onSelectFilter(filter);
  };

  return (
    <ActionsBar darkMode={props.darkMode} disabled={props.disabled}>
      <Button
        className={`action-btn ${filterValue === 'all' && 'selected'}`}
        onClick={() => filterHandler('all')}
      >
        <span className="btn-text">All</span>
      </Button>

      <Button
        className={`action-btn ${filterValue === 'active' && 'selected'}`}
        onClick={() => filterHandler('active')}
      >
        <span className="btn-text">Active</span>
      </Button>

      <Button
        className={`action-btn ${filterValue === 'done' && 'selected'}`}
        onClick={() => filterHandler('done')}
      >
        <span className="btn-text">Done</span>
      </Button>
    </ActionsBar>
  );
};

export default TasksFilter;
