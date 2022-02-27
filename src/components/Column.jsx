import React from "react";
import {Heading, VStack, Container, useColorModeValue} from "@chakra-ui/react";
import Item from './Item'
import {Droppable} from 'react-beautiful-dnd'

const Column = ({ column, tasks, deleteItem}) => {

  const color = useColorModeValue('black', 'white')
  const bg = useColorModeValue('gray.200', 'gray.800')
  const bg2 = useColorModeValue('skyblue', 'DeepPink')

  return (
    //responsive border
    <Droppable droppableId= {column.id}>
    {(provided, snapshot)=> (
    <VStack backgroundColor={bg} rounded="lg" width="100%" maxW= '100vw' p="5" m= {2}>

      <Heading pb="4" color={color}>{column.title}</Heading>

        <Container
        centerContent
        ref= {provided.innerRef}
        {...provided.droppableProps}
        backgroundColor= {snapshot.isDraggingOver ? bg2 : bg}
        >
        {/* maybe you can add some sort of restricton here if its more than 4 then do something*/}
       {tasks.map((task, index) => <Item key={task.id} task={task} deleteItem= {deleteItem} index={index}></Item>)}
       {provided.placeholder}
       </Container>
        </VStack>
      )}
    </Droppable>
 
  );
};

export default Column;
