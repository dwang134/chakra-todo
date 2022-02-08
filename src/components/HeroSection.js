import React from 'react';
import {Flex, Divider, Box} from '@chakra-ui/react'
import Column from './Column'
import {FaTrash} from 'react-icons/fa'

const HeroSection = ({data, setData}) => {

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
  
      {data.columnOrder.map(columnId=> {
          const column = data.columns[columnId];
          const tasks= column.taskIds.map(taskId=> data.tasks[taskId])
          return <Column key={column.id} column= {column} tasks= {tasks}/>
        })}

      </Flex>
    <Box  display= 'flex' height= '25vh' w='100%' borderWidth= '2px' borderRadius='lg' justifyContent= 'center' alignItems= 'center' bgGradient='linear(to-l, #7928CA, #FF0080)'><FaTrash fontSize= {50} color= 'white'/></Box>
    </>
  )
};

export default HeroSection;
