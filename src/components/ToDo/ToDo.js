import React, { useState } from 'react';

import Tasks from './Tasks/Tasks';
import NewTask from './NewTask/NewTask';
import TaskInDetails from './TaskInDetails/TaskInDetails';

import styles from './ToDo.module.css';

const ToDo = props => {
  const [filter, setFilter] = useState('all');

  const [showTaskInDetails, setShowTaskInDetails] = useState(false);

  const [selectedTask, setSelectedTask] = useState({
    groupId: '',
    task: {},
  });

  const [isEditMode, setIsEditMode] = useState(false);

  const [selectedTaskToEdit, setSelectedTaskToEdit] = useState({
    groupId: '',
    task: {},
  });

  const addingNewTaskHandler = taskInfo => {
    props.onAddingTask(taskInfo);
  };

  const selectFilterHandler = filter => {
    setFilter(filter);
  };

  const tasksFiltering = () => {
    if (filter === 'all') {
      return props.tasks;
    } else {
      const filteringResult = [];

      props.tasks.forEach(group => {
        const matchedTasks = group.tasks.filter(task => task.status === filter);

        if (matchedTasks.length > 0) {
          filteringResult.push({ ...group, tasks: matchedTasks });
        }
      });

      return filteringResult;
    }
  };

  const filteredTasks = tasksFiltering();

  const showTaskInDetailsHandler = (groupId, task) => {
    setShowTaskInDetails(true);
    setSelectedTask(prevState => {
      return {
        ...prevState,
        groupId: groupId,
        task: task,
      };
    });
  };

  const closeTaskInDetailsHandler = () => {
    setShowTaskInDetails(false);
    setSelectedTask(prevState => {
      return {
        ...prevState,
        groupId: '',
        task: null,
      };
    });
  };

  const clickEditBtnHandler = (groupId, task) => {
    setIsEditMode(true);
    setSelectedTaskToEdit(prevState => {
      return {
        ...prevState,
        groupId: groupId,
        task: task,
      };
    });
  };

  const editTaskHandler = taskInfo => {
    props.onEditTask(taskInfo);
    setIsEditMode(false);
  };

  const clickDeleteBtnHandler = (groupId, taskId) => {
    props.onDeleteTask(groupId, taskId);
  };

  const cancelEditModeHandler = () => {
    setIsEditMode(false);
    setSelectedTaskToEdit({
      groupId: '',
      task: {},
    });
  };

  let taskInDetails = '';

  if (showTaskInDetails) {
    taskInDetails = (
      <TaskInDetails
        taskInfo={selectedTask}
        darkMode={props.darkMode}
        onClose={closeTaskInDetailsHandler}
        onClickEditBtn={clickEditBtnHandler}
        onClickDeleteBtn={clickDeleteBtnHandler}
      />
    );
  }

  return (
    <div className={styles['to-do']}>
      {taskInDetails}

      <Tasks
        disabledActionsBar={props.tasks.length <= 0}
        tasks={filteredTasks}
        darkMode={props.darkMode}
        onSelectFilter={selectFilterHandler}
        onShowTaskInDetails={showTaskInDetailsHandler}
        //
        onClickCheckBox={(groupId, taskId) => {
          props.onClickTaskCheckBox(groupId, taskId);
        }}
      />

      <NewTask
        isEditMode={isEditMode}
        taskToEdit={selectedTaskToEdit}
        darkMode={props.darkMode}
        onAddingNewTask={addingNewTaskHandler}
        onEditTask={editTaskHandler}
        onCancelEditMode={cancelEditModeHandler}
      />
    </div>
  );
};

export default ToDo;
