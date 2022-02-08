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

    
    const start = data.columns[source.droppableId]
    const finish = data.columns[destination.droppableId]

    if( start === finish ) {
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)
  
      const newColumn = {
        ...start, 
        taskIds: newTaskIds 
      }

    const newState = {
        ...data,
        columns: { 
          ...data.columns,  
          [newColumn.id]: newColumn,
        }
      }

    setData(newState);
    return
  } 
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
