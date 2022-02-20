export const formatDate = date => {
  const year = new Date(date).toLocaleString('en-US', { year: 'numeric' });
  const month = new Date(date).toLocaleString('en-US', { month: 'short' });
  const day = new Date(date).toLocaleString('en-US', { day: 'numeric' });

  return `${month} ${day}, ${year}`;
};

const formatTime = date => {
  return new Date(date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

export const formatDateTime = d => {
  const date = formatDate(d);
  const time = formatTime(d);

  return `${date} ${time}`;
};

export const compareDates = (date1, date2) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

export const toCapitalize = str => {
  const strParts = str.split(' ');

  for (let idx = 0; idx < strParts.length; idx++) {
    strParts[idx] = strParts[idx][0].toUpperCase() + strParts[idx].substring(1);
  }

  return strParts.join(' ');
};

export const storeTasksInLocalStorage = tasks => {
  localStorage.setItem('TO307-DO96-APP2001-tasks', JSON.stringify(tasks));
};

export const fetchTasksFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('TO307-DO96-APP2001-tasks'));
};

export const storeModeInLocalStorage = mode => {
  localStorage.setItem('TO307-DO96-APP2001-mode', JSON.stringify(mode));
};

export const fetchModeFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('TO307-DO96-APP2001-mode'));
};

export const storeFormStatusInLocalStorage = mode => {
  localStorage.setItem('TO307-DO96-APP2001-form-status', JSON.stringify(mode));
};

export const fetchFormStatusFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('TO307-DO96-APP2001-form-status'));
};

export const storeTaskGroupsStatusInLocalStorage = mode => {
  localStorage.setItem(
    'TO307-DO96-APP2001-task-groups-status',
    JSON.stringify(mode)
  );
};

export const fetchTaskGroupsStatusFromLocalStorage = () => {
  return JSON.parse(
    localStorage.getItem('TO307-DO96-APP2001-task-groups-status')
  );
};
