const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' ,time: "Feb 6th at 1:30pm" },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' ,time: "Feb 6th at 1:30pm" },
    'task-3': { id: 'task-3', content: 'Charge my phone', time: "Feb 6th at 1:30pm" },
    'task-4': { id: 'task-4', content: 'Cook dinner', time: "Feb 6th at 1:30pm"  },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: ['task-3'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: ['task-4'],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default initialData;
