import React, {useState} from 'react';
import {Flex, Box, IconButton, VStack, useColorModeValue} from '@chakra-ui/react'
import Column from './Column'
import Modal from 'react-modal'
import {BsPlusLg } from "react-icons/bs"
import {FaTrash} from 'react-icons/fa'
import AddTask from './AddTask'
import {Droppable} from 'react-beautiful-dnd'

const HeroSection = ({data, setData, deleteItem}) => {

  let subtitle;
  const bg = useColorModeValue('white', 'black')

  const tasks = data.columns["column-1"].taskIds.length;
  const [modalIsOpen, setModal] = React.useState(false);
  const [countId, setCountId] = useState(tasks);

  const customStyles = {

    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: bg
    },
  };

  const afterOpenModal= () => {
    subtitle.style.backgroundColor = bg;
  }

  Modal.setAppElement('#root');

      return(
      <VStack>
      <IconButton size= 'lg' icon={<BsPlusLg />} alignSelf="flex-end" colorScheme='cyan' variant= 'solid' onClick= {()=> setModal(true)}/>
      <Flex
      className= "shadow resize"
      border="1px"
      borderColor="gray.200"
      borderWidth="2px"
      borderRadius="lg"
      align="stretch"
      justifyContent= "center"
      p="4"
      w= "100%"
      >
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={()=> setModal(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <AddTask setModal={setModal} data= {data} setData= {setData} countId= {countId} setCountId= {setCountId}/>
      </Modal>
      {data.columnOrder.map(columnId=> {
          const column = data.columns[columnId];
          const tasks= column.taskIds.map(taskId=> data.tasks[taskId])
          return <Column key={column.id} column= {column} tasks= {tasks} deleteItem= {deleteItem}/>
        })}

      </Flex>
    <Droppable droppableId= "delete">
    {(provided, snapshot)=> (
    <Box className="shadow" display= 'flex' height= '25vh' w='100%' borderWidth= '2px' borderRadius='lg' justifyContent= 'center' alignItems= 'center' bgGradient= {snapshot.isDraggingOver? 'linear(to-r, red.500, yellow.500)': 'linear(to-l, #7928CA, #FF0080)'} 
    ref= {provided.innerRef}
    {...provided.droppableProps}
    >
      <FaTrash fontSize= {50} color= 'white'/>
      <div>
      {provided.placeholder}
      </div>
      </Box>
      )}
    </Droppable>
    </VStack>
  )
};

export default HeroSection;
