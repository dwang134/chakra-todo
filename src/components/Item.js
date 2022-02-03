import React from 'react'
import {Box, Heading, Text, Container} from '@chakra-ui/react'

const Item = ({content, time}) => {
    return (
        <Container backgroundColor= 'white' rounded= 'lg' p= '4' >
        <Heading fontSize= {{ base: '24px', md: '40px', lg: '22px' }}>{content}</Heading>
        <Text>{time}</Text>    
        </Container>
    )
}

export default Item
