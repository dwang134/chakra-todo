import './App.css';
import {VStack, Container} from '@chakra-ui/react';
import React, { useState } from 'react';
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import initialData from './data/initial-data'
import { AiOutlineConsoleSql } from 'react-icons/ai';
import {DragDropContext} from 'react-beautiful-dnd'

function App() {
  const [data, setData]= useState(initialData);

  const onDragEnd= result => {

    const {destination, source, draggableId} = result;

    //does destination exist
    if (!destination){
      return;
    }

    //destination = source?
    if(
      destination.droppableId=== source.droppableId &&
      destination.index === source.index
    ){
      return;
    }

    //started from droppable column ex. column-1
    const start = data.columns[source.droppableId]

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

    //
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

    setData(newState);
    return
  } 

  //had task state here as itemsBackend
  // const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <DragDropContext onDragEnd= {onDragEnd}>
    {/* entire body(can use bg to test) */}
    <VStack p={4} >
      <Header/>
        <Container maxW= "container.lg"> 
        <HeroSection data= {data} setData= {setData}/>
        </Container>
    </VStack>
    </DragDropContext>
  );
}


export default App;
