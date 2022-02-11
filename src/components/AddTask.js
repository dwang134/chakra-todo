import React, {useState} from 'react'
import {Container, Input, Button, Flex, Spacer, VStack, Heading, IconButton, useToast, useColorModeValue} from '@chakra-ui/react'
import {AiOutlineClose} from 'react-icons/ai'

const AddTask = ({setModal, data, setData, countId, setCountId}) => {

  const color = useColorModeValue('black', 'white')

  const [content, setContent]= useState('')
  const [time, setTime]= useState('')
  
  // const [tasks, setTasks]= useState(itemsBackend[index])

  const toast= useToast()

  const handleSubmit = (e) => {
    
    e.preventDefault();

    if(!content || !time) {
      toast({
        position: 'top',
        title: 'Please fill out all fields',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return
    }else{
      toast({
        position: 'top',
        title: 'Added todo!',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    }

    const newTaskId = countId + 1
    const newTaskIds = [...data.columns['column-1'].taskIds]
    newTaskIds.push(`task${newTaskId}`)
    
    const newTodoColumn = {
      ...data.columns['column-1'],
      taskIds: newTaskIds
    }

    const newColumns = {
      ...data.columns,
      'column-1': newTodoColumn
    }

    const newTasks = {...data.tasks}
    const taskKey = `task${newTaskId}`
    newTasks[taskKey] = {id: `task${newTaskId}`, content: content, time: time}

    const newState ={
      ...data,
      tasks: newTasks,
      columns: newColumns
    }

    setData(newState)
    setContent('')
    setTime('')
    setCountId(newTaskId)
  }

  return (
    <form onSubmit= {handleSubmit}>
      <Container maxW= 'container.lg' height= '100%'>
      <VStack spacing= {4} align= 'stretch' mb= {10}>
      <Flex justify= 'flex-end'>
      <IconButton icon={<AiOutlineClose />} size= 'lg' onClick= {()=> setModal(false)} isRound='true' m= {0}/>
      </Flex>
            <Heading fontSize='lg' fontWeight= 'semibold' color={color} >Add Task</Heading>
            <Input variant= "filled" placeholder= "Enter a description" value= {content} onChange= {(e)=> setContent(e.target.value)}/>
            <Spacer/>
            <Heading fontSize= 'lg' fontWeight= 'semibold' color= {color}>Add Time</Heading>
            <Input variant= "filled" placeholder= "Enter a time here" value= {time} onChange= {(e)=> setTime(e.target.value)}/>
            <Spacer/>
            <Button colorScheme= "pink" type= "submit">Add new Task</Button>
      </VStack>
      </Container>
    </form>
  )
}

export default AddTask