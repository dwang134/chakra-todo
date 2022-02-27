import React from 'react'
import {Heading, Text, Container, IconButton, Flex, useColorModeValue, VStack} from '@chakra-ui/react'
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
                justify= 'space-around'
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref= {provided.innerRef}
                backgroundColor= {snapshot.isDragging? 'lightgreen' : bg}
                rounded= 'lg' p= '4' maxW= '30ch' w= '40vw' mb= {3} 
                >
                <VStack>
                    <Heading color= {color} fontSize= {{ base: '24px', md: '22px', lg: '22px' }}>{task.content}</Heading>
                    <Text color= {color} fontSize= {{ base: '16px', md: '18px', lg: '20px' }}>{task.time}</Text>
                </VStack>
                <IconButton justifySelf= 'end' alignSelf= 'end' isRound= 'true' size= 'md'><MdDelete onClick= {()=> deleteItem(index, task.id)}/></IconButton>
                </Flex>                
            )}
        </Draggable>
    )
}

export default Item
