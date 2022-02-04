import React from 'react'
import {Box, Heading, Text, Container, IconButton, Icon, Flex} from '@chakra-ui/react'
import {MdDelete} from 'react-icons/md'

const Item = ({task, deleteItem}) => {
    return (
        <Flex backgroundColor= 'white' rounded= 'lg' p= '4' w='90%'>
        <Container justifySelf= 'center' alignSelf= 'center'>
        <Heading fontSize= {{ base: '24px', md: '40px', lg: '22px' }}>{task.content}</Heading>
        <Text>{task.time}</Text> 
        </Container>
        <IconButton justifySelf= 'end' alignSelf= 'end' isRound= 'true' size= 'md'><MdDelete onClick= {()=> deleteItem(task.id)}/></IconButton>
        </Flex>
    )
}

export default Item
