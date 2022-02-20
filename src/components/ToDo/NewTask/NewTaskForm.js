import React, { useState, useEffect } from 'react';

import styles from './NewTaskForm.module.css';

import ActionsBar from '../../UI/ActionsBar';
import Button from '../../UI/Button';

const NewTaskForm = props => {
  const initialTitle = props.isEditMode ? props.taskToEdit.task.title : '';

  const initialDate = props.isEditMode
    ? new Date(props.taskToEdit.task.date).toISOString().split('T')[0]
    : '';

  const initialDescription = props.isEditMode
    ? props.taskToEdit.task.description
    : '';

  const [enteredTitle, setEnteredTitle] = useState(initialTitle);
  const [enteredDate, setEnteredDate] = useState(initialDate);
  const [enteredDescription, setEnteredDescription] =
    useState(initialDescription);

  const [isFormClearable, setIsFormClearable] = useState(props.isEditMode);
  const [isFormSubmittable, setIsFormSubmittable] = useState(false);

  useEffect(() => {
    setEnteredTitle(initialTitle);
    setEnteredDate(initialDate);
    setEnteredDescription(initialDescription);
    setIsFormClearable(props.isEditMode);
  }, [initialTitle, initialDate, initialDescription, props.isEditMode]);

  const updateDisableClearBtn = (title, date, des) => {
    if (
      title.trim().length > 0 ||
      date.trim().length > 0 ||
      des.trim().length > 0
    ) {
      setIsFormClearable(true);
    } else {
      setIsFormClearable(false);
    }
  };

  const updateFormSubmittableState = (title, date, des) => {
    let isFormSubmittable =
      title.trim().length > 0 &&
      date.trim().length > 0 &&
      des.trim().length > 0;

    if (props.isEditMode) {
      isFormSubmittable =
        isFormSubmittable &&
        (title.trim() !== props.taskToEdit.task.title ||
          date.trim() !==
            new Date(props.taskToEdit.task.date).toISOString().split('T')[0] ||
          des.trim() !== props.taskToEdit.task.description);
    }

    setIsFormSubmittable(isFormSubmittable);
  };

  const changeTitleHandler = e => {
    setEnteredTitle(e.target.value);

    updateDisableClearBtn(e.target.value, enteredDate, enteredDescription);
    updateFormSubmittableState(e.target.value, enteredDate, enteredDescription);
  };

  const changeDateHandler = e => {
    setEnteredDate(e.target.value);

    updateDisableClearBtn(enteredTitle, e.target.value, enteredDescription);
    updateFormSubmittableState(
      enteredTitle,
      e.target.value,
      enteredDescription
    );
  };

  const changeDesHandler = e => {
    setEnteredDescription(e.target.value);

    updateDisableClearBtn(enteredTitle, enteredDate, e.target.value);
    updateFormSubmittableState(enteredTitle, enteredDate, e.target.value);
  };

  const submitFormHandler = e => {
    e.preventDefault();

    if (!isFormSubmittable) {
      return;
    }

    let task = {
      title: enteredTitle.trim(),
      description: enteredDescription.trim(),
      date: new Date(enteredDate),
    };

    if (!props.isEditMode) {
      task = {
        ...task,
        'creation date': new Date(),
      };
      props.onAddingNewTask(task);
    }
    //
    else {
      task = {
        ...props.taskToEdit.task,
        ...task,
        'last update': new Date(),
      };
      props.onEditTask({
        ...props.taskToEdit,
        task: task,
      });
    }

    clearForm();
  };

  const clearFormHandler = () => {
    if (!isFormClearable) {
      return;
    }

    clearForm();
  };

  const cancelEditModeHandler = () => {
    props.onCancelEditMode();
    clearForm();
  };

  const clearForm = () => {
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredDescription('');

    setIsFormClearable(false);
    setIsFormSubmittable(false);
  };

  let formBody = '';

  if (props.showFormBody) {
    formBody = (
      <div
        className={`
          overflow-auto
          ${styles['form-body']} 
          ${props.darkMode && styles['dark-mode']}`}
      >
        <div className={styles['form-controls']}>
          <div className={styles['form-control']}>
            <label>Title</label>
            <input
              value={enteredTitle}
              type="text"
              onChange={changeTitleHandler}
            />
          </div>

          <div className={styles['form-control']}>
            <label>Date</label>
            <input
              value={enteredDate}
              type="date"
              onChange={changeDateHandler}
            />
          </div>

          <div className={styles['form-control']}>
            <label>Description</label>
            <textarea value={enteredDescription} onChange={changeDesHandler} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submitFormHandler}>
      {formBody}

      <ActionsBar darkMode={props.darkMode}>
        <Button
          type="button"
          className="action-btn"
          disabled={!isFormClearable}
          onClick={clearFormHandler}
        >
          <span className="btn-text">Clear</span>
        </Button>

        {props.isEditMode && (
          <Button
            type="button"
            className="action-btn"
            onClick={cancelEditModeHandler}
          >
            <span className="btn-text">Cancel</span>
          </Button>
        )}

        <Button
          type="submit"
          className="action-btn"
          disabled={!isFormSubmittable}
        >
          <span className="btn-text">
            {props.isEditMode ? 'Update' : 'Add'}
          </span>
        </Button>
      </ActionsBar>
    </form>
  );
};

export default NewTaskForm;
