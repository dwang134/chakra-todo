import React from "react";
import {Heading, VStack, IconButton, Text} from "@chakra-ui/react";
import { useState } from "react";
import {BsPlusLg } from "react-icons/bs";
import AddTask from './AddTask'
import Modal from 'react-modal'
import Item from './Item'
import {Droppable} from 'react-beautiful-dnd'

const Column = ({column, tasks}) => {

  const [modalIsOpen, setModal] = React.useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

  function afterOpenModal() {

  }

  return (
    //responsive border
    <VStack backgroundColor="gray.200" rounded="lg" width="100%" p="5" m= {2}>
      <IconButton icon={<BsPlusLg />} alignSelf="flex-end" colorScheme='cyan' variant= 'solid' onClick= {()=> setModal(true)}/>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={()=> setModal(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <AddTask setModal={setModal}/>
      </Modal>
      <Heading pb="4">{column.title}</Heading>
      <Droppable droppableId= {column.id}>
      {(provided, snapshot)=> (
        <div
        ref= {provided.innerRef}
        {...provided.droppableProps}
        >
       {tasks.map((task, index) => <Item key={task.id} task={task} index={index}></Item>)}
       {provided.placeholder}
       </div>
      )}
      </Droppable>
    </VStack>
  );
};

export default Column;
