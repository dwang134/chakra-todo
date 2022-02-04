import React, {useState} from 'react'
import {HStack, Container, Input, Button, Flex, Spacer, VStack, Text, Heading, IconButton} from '@chakra-ui/react'
import {AiOutlineClose} from 'react-icons/ai'
import {itemsBackend} from '../data'

const AddTask = ({setModal, addItem}) => {

  const [content, setcontent]= useState('')
  const [time, setTime]= useState('')
  // const [tasks, setTasks]= useState(itemsBackend[index])

  const handleSubmit= (e) => {
    e.preventDefault();

    if(!content){
      alert("Please enter a contentription")
      return
    }
    else if (!time){
      alert("Please enter a time")
      return
    }

    addItem({content, time})
    setcontent('')
    setTime('')
  }

  return (
    <form onSubmit= {handleSubmit}>
      <Container maxW= 'container.lg' height= '100%'>
      <VStack spacing= {4} align= 'stretch' mb= {10}>
      <Flex justify= 'flex-end'>
      <IconButton icon={<AiOutlineClose />} size= 'lg' onClick= {()=> setModal(false)} isRound='true' m= {0}/>
      </Flex>
            <Heading fontSize='lg' fontWeight= 'semibold' >Add Task</Heading>
            <Input variant= "filled" placeholder= "Enter a description" value= {content} onChange= {(e)=> setcontent(e.target.value)}/>
            <Spacer/>
            <Heading fontSize= 'lg' fontWeight= 'semibold'>Add Time</Heading>
            <Input variant= "filled" placeholder= "Enter a time here" value= {time} onChange= {(e)=> setTime(e.target.value)}/>
            <Spacer/>
            <Button colorScheme= "pink" type= "submit">Add new Task</Button>
      </VStack>
      </Container>
    </form>
  )
}

export default AddTask