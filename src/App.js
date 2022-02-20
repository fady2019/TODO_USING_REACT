import React, { useState } from 'react';
import styles from './App.module.css';

import {
  compareDates,
  storeTasksInLocalStorage,
  fetchTasksFromLocalStorage,
  storeModeInLocalStorage,
  fetchModeFromLocalStorage,
} from './common';

import BackgroundImage from './components/UI/BackgroundImage';
import ToDo from './components/ToDo/ToDo';
import Footer from './components/UI/Footer';

import darkModeIcon from './assets/icons/icon-moon.svg';
import lightModeIcon from './assets/icons/icon-sun.svg';
import Button from './components/UI/Button';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    fetchModeFromLocalStorage() === 'dark'
  );

  const [tasks, setTasks] = useState(fetchTasksFromLocalStorage() || []);

  const switchModeHandler = () => {
    setIsDarkMode(!isDarkMode);
    storeModeInLocalStorage(!isDarkMode ? 'dark' : 'light');
  };

  const generateTaskId = group => {
    return `${group.id}-task${++group.counter}`;
  };

  const addingTaskHandler = task => {
    const matchedGroup = tasks.findIndex(group =>
      compareDates(task.date, group.date)
    );

    let updatedTasks = [...tasks];

    if (matchedGroup > -1) {
      updatedTasks[matchedGroup].tasks.push({
        ...task,
        id: generateTaskId(updatedTasks[matchedGroup]),
        status: 'active',
      });
    }
    // there's no group match task date
    else {
      const newGroup = {
        id: `group${tasks.length + 1}`,
        date: task.date,
        tasks: [],
        counter: 0,
      };

      newGroup.tasks.push({
        ...task,
        id: generateTaskId(newGroup),
        status: 'active',
      });

      updatedTasks.push(newGroup);
    }

    updatedTasks.sort((g1, g2) => {
      return g1.date - g2.date;
    });

    setTasks(updatedTasks);
    storeTasksInLocalStorage(updatedTasks);
  };

  const clickTaskCheckBoxHandler = (groupId, taskId) => {
    const groupIdx = tasks.findIndex(group => group.id === groupId);
    if (groupIdx === -1) {
      return;
    }

    const taskIdx = tasks[groupIdx].tasks.findIndex(task => task.id === taskId);
    if (taskIdx === -1) {
      return;
    }

    const updatedTasks = [...tasks];
    const taskCurrentStatus = updatedTasks[groupIdx].tasks[taskIdx].status;

    updatedTasks[groupIdx].tasks[taskIdx].status =
      taskCurrentStatus === 'done' ? 'active' : 'done';

    setTasks(updatedTasks);
    storeTasksInLocalStorage(updatedTasks);
  };

  const deleteTaskHandler = (groupId, taskId) => {
    const TASKS = [...tasks];
    const groupIdx = TASKS.findIndex(group => group.id === groupId);

    if (groupIdx === -1) {
      return;
    }

    TASKS[groupIdx].tasks = TASKS[groupIdx].tasks.filter(
      task => task.id !== taskId
    );

    if (TASKS[groupIdx].tasks.length <= 0) {
      TASKS.splice(groupIdx, 1);
    }

    setTasks(TASKS);
    storeTasksInLocalStorage(TASKS);
  };

  const editTaskHandler = taskInfo => {
    const TASKS = [...tasks];
    const groupIdx = TASKS.findIndex(group => group.id === taskInfo.groupId);

    if (groupIdx === -1) {
      return;
    }

    const taskIdx = TASKS[groupIdx].tasks.findIndex(
      task => task.id === taskInfo.task.id
    );

    if (taskIdx === -1) {
      return;
    }

    TASKS[groupIdx].tasks[taskIdx] = {
      ...TASKS[groupIdx].tasks[taskIdx],
      ...taskInfo.task,
    };

    setTasks(TASKS);
    storeTasksInLocalStorage(TASKS);
  };

  return (
    <div className={`${styles.container} ${isDarkMode && styles['dark-mode']}`}>
      <div className={`overflow-auto ${styles.app}`}>
        <BackgroundImage darkMode={isDarkMode}>
          <Button
            className={styles['switch-mode-btn']}
            onClick={switchModeHandler}
          >
            <img
              src={isDarkMode ? lightModeIcon : darkModeIcon}
              alt="mode-icon"
            />
          </Button>
        </BackgroundImage>

        <ToDo
          tasks={tasks}
          darkMode={isDarkMode}
          onAddingTask={addingTaskHandler}
          onClickTaskCheckBox={clickTaskCheckBoxHandler}
          onDeleteTask={deleteTaskHandler}
          onEditTask={editTaskHandler}
        />
      </div>

      <Footer darkMode={isDarkMode}>
        <span className="footer-text">
          Made with &#10084;&#65039; by Fady Emad
        </span>
      </Footer>
    </div>
  );
}

export default App;
