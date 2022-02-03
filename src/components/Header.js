import React from 'react';
import {IconButton, Text, useColorMode} from '@chakra-ui/react'


const Header = () => {

const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
    <IconButton 
    icon={colorMode === 'light' ? <i className="fa fa-sun-o fa-2x"></i> : <i class="fa fa-moon-o fa-2x"></i>}
    w={20}
    h={20}
    alignSelf="flex-end"
    onClick= {toggleColorMode}
  />
  <Text
    fontSize="6xl"
    // fontWeight="thin"
    pb= {5}
    className= "arch-black"
  >
    TellMe.
  </Text>
  </>
  )
};

export default Header;
