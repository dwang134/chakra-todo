import React from 'react'
import {Heading, Text, Container, IconButton, Flex, useColorModeValue} from '@chakra-ui/react'
import {MdDelete} from 'react-icons/md'
import {Draggable} from 'react-beautiful-dnd'
import './Item.css'

const Item = ({task, deleteItem, index}) => {

    const bg = useColorModeValue('white', 'gray.400')
    const color = useColorModeValue('black', 'white')

    return (
        <Draggable draggableId= {task.id} index= {index}>
            {(provided, snapshot)=> (
                <Flex 
                className= "drag"
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref= {provided.innerRef}
                backgroundColor= {snapshot.isDragging? 'lightgreen' : bg}
                rounded= 'lg' p= '4' w='90%' ml={4} mb= {2} h= '7vh'
                >
                <Container justifySelf= 'center' alignSelf= 'center'>
                <Heading color= {color} fontSize= {{ base: '24px', md: '30px', lg: '22px' }}>{task.content}</Heading>
                <Text color= {color} fontSize= {{ base: '12px', md: '22px', lg: '18px' }}>{task.time}</Text>
                </Container>
                <IconButton justifySelf= 'end' alignSelf= 'end' isRound= 'true' size= 'md'><MdDelete onClick= {()=> deleteItem(index, task.id)}/></IconButton>
                </Flex>                
            )}
        </Draggable>
    )
}

export default Item
