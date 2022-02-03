import React from 'react';
import {Flex, Divider, Box} from '@chakra-ui/react'
import Column from './Column'
import {FaTrash} from 'react-icons/fa'
import AddTask from './AddTask'
import {itemsBackend} from '../data'

const HeroSection = ({columns}) => {

      return(
      <>
      <Flex
        className= "shadow resize"
      border="1px"
      borderColor="gray.200"
      borderWidth="2px"
      borderRadius="lg"
      align="stretch"
      justifyContent= "center"
      p="4"
      >
      {/* columns.map is not a function */}
      {/* {Object.values(column).map((column, index)=> {
        <Column key={column.id} column= {column} index= {index} tasks={tasks} setModal={setModal}/>
      })} */}
      {Object.entries(columns).map(([columnId, column], index)=> (
          <Column key={columnId} column={column} index= {index} />
      ))} 
      {/* column = column */}
{/* 
      {column.map((column, index)=> (
          <Column key={column.id} column= {column} index= {index} tasks={tasks} setTasks= {setTasks}/>
      ))} */}
        {/* <Column title= 'TO DO' tasks= {tasks} setModal= {setModal}/>
        <Divider m= '2'/>
        <Column title= 'DOING' tasks= {tasks} setModal= {setModal}/>
        <Divider m= '2'/>
        <Column title= 'DONE' tasks= {tasks} setModal= {setModal}/> */}
  

      </Flex>
    <Box  display= 'flex' height= '25vh' w='100%' borderWidth= '2px' borderRadius='lg' justifyContent= 'center' alignItems= 'center' bgGradient='linear(to-l, #7928CA, #FF0080)'><FaTrash fontSize= {50} color= 'white'/></Box>
    </>
  )
};

export default HeroSection;
