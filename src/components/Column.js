import React from "react";
import {
  SimpleGrid,
  Box,
  Heading,
  VStack,
  IconButton
} from "@chakra-ui/react";
import { useState } from "react";
import {BsPlusLg } from "react-icons/bs";
import Item from './Item'
import AddTask from './AddTask'
import Modal from 'react-modal'
import {itemsBackend} from '../data'
import { v4 as uuidv4 } from 'uuid';

const Column = ({ column, index}) => {

  const [tasks, setTasks]= useState(itemsBackend[index])

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

  const addItem= (item) => {
    console.log(tasks);
    const id= uuidv4();
    const newItem= {id, ...item}
    console.log(newItem);
    setTasks([...tasks, newItem])
    console.log(tasks);
  }

  const deleteItem= (id) => {
    setTasks(tasks.filter((task)=> task.id!== id))
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
      <AddTask setModal={setModal} tasks= {tasks} setTasks= {setTasks} addItem= {addItem}/>
      </Modal>
      <Heading pb="4">{column.name}</Heading>
      {/* {column.items.map((item, index)=> (
        <Item key= {item.id} content= {item.content} time= {item.time}></Item>
        ))
      } */}
      {tasks.map((task)=> (
        <Item key= {task.id} task= {task} deleteItem= {deleteItem}></Item>
      ))}
       {/* {(tasks[index]).map((list)=>(
        <Item key={list.id} content= {list.content} time= {list.time}></Item>
     ))} */}
      {/* {tasks.map((task) => (
        <Task key={task.id} event={task.text} time={task.time} />
      ))} */}
    </VStack>
  );
};

export default Column;
