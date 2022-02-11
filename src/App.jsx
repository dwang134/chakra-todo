import './App.css';
import {VStack, Container} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import initialData from './data/initial-data'
import {DragDropContext} from 'react-beautiful-dnd'

function App() {
  const [data, setData]= useState(initialData);

  const onDragEnd = result => {
    const { destination, source, draggableId } = result

    //does destination exist
    if(!destination) {
      return
    }

    //destination = source?
    if(
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    if (destination.droppableId === "delete"){
      deleteItem(source.index, source.draggableId)
    }

    //started from droppable column ex. column-1
    const start = data.columns[source.droppableId]
    const finish = data.columns[destination.droppableId]

    if( start === finish ) {

    //getting the tasks array (making a new var so dont alternate original data)
    const newTaskIds = Array.from(start.taskIds)

    //remove one item from source index position
    newTaskIds.splice(source.index, 1)

    //remove nothing insert the draggableId object ex. task-1
    newTaskIds.splice(destination.index, 0, draggableId)

  
     //have whatever from column 1 and new taskIds array
     const newColumn = {
      ...start, 
      taskIds: newTaskIds 
    }

  const newState = {
    //going through whatever is in data
      ...data,
      //passing new column to columns object
      columns: { 
        //go through all columns
        ...data.columns,  
        //overwrite existing column
        [newColumn.id]: newColumn,
      }
    }
      
      setData(newState)
      return
    }

    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1) 
    const newStart = {
      ...start, 
      taskIds: startTaskIds, 
    }

    const finishTaskIds = Array.from(finish.taskIds) 
    finishTaskIds.splice(destination.index, 0, draggableId) 
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    }
    
    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      }
    }
    
    setData(newState)
  }

  const deleteItem = (index, taskId) => {
    const newColumns = {...data.columns} 
    const newTasks = {...data.tasks} 

    Object.keys(newColumns).forEach(column => {

      const deleteTarget = newColumns[column].taskIds.find(task => task === taskId)
      if( deleteTarget ) { 
        newColumns[column].taskIds.splice(index, 1) 
      }
    })

    delete newTasks[taskId] 

    const newState = {
      ...initialData,
      tasks: newTasks,
      columns: newColumns,
    }

    setData(newState)
  };


  return (
    <DragDropContext onDragEnd= {onDragEnd}>
    {/* entire body(can use bg to test) */}
    <VStack p={4}>
      <Header/>
        <Container maxW= "container.xl">
        <HeroSection data= {data} setData= {setData} deleteItem= {deleteItem}/>
        </Container>
    </VStack>
    </DragDropContext>
  );
}


export default App;
