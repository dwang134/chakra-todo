import { v4 as uuidv4 } from 'uuid';

const itemsBackend = [
  [
  { id: uuidv4(), content: "First task" , time: "Feb 6th at 1:30pm" },
  { id: uuidv4(), content: "Second task",  time: "Feb 6th at 1:30pm" }
  ],
  [
  { id: uuidv4(), content: "Third task",  time: "Feb 6th at 1:30pm" },
  { id: uuidv4(), content: "Fourth task",  time: "Feb 6th at 1:30pm" }
  ],
  [
  { id: uuidv4(), content: "Fifth task",  time: "Feb 6th at 1:30pm" }
  ]
];

const columnsFromBackend = {
  [uuidv4()]: {
    name: "TO DO",
    items: itemsBackend[0]
  },
  [uuidv4()]: {
    name: "IN PROGRESS",
    items:  itemsBackend[1]
  },
  [uuidv4()]: {
    name: "DONE",
    items:  itemsBackend[2]
  }
};


export {itemsBackend, columnsFromBackend}