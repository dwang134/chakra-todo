import React from 'react'
import {Box, Heading, Text, Container, IconButton, Icon, Flex} from '@chakra-ui/react'
import {MdDelete} from 'react-icons/md'
import {Draggable} from 'react-beautiful-dnd'
import './Item.css'

const Item = ({task, deleteItem, index}) => {
    return (
        <Draggable draggableId= {task.id} index= {index}>
            {(provided, snapshot)=> (
                <Flex 
                className= "drag"
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref= {provided.innerRef}
                backgroundColor= 'white' rounded= 'lg' p= '4' w='90%' mb= {2}>
                <Container justifySelf= 'center' alignSelf= 'center'>
                <Heading fontSize= {{ base: '24px', md: '40px', lg: '22px' }}>{task.content}</Heading>
                <Text>{task.time}</Text>
                </Container>
                <IconButton justifySelf= 'end' alignSelf= 'end' isRound= 'true' size= 'md'><MdDelete onClick= {()=> deleteItem(task.id)}/></IconButton>
                </Flex>                
            )}
        </Draggable>
    )
}

export default Item
