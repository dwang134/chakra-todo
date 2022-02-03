import './App.css';
import {VStack, Container} from '@chakra-ui/react';
import React, { useState } from 'react';
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import {itemsBackend, columnsFromBackend} from './data'

function App() {


  //had task state here as itemsBackend
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    // entire body(can use bg to test)
    <VStack p={4} >
      <Header/>
        <Container maxW= "container.lg">
        <HeroSection columns= {columns}/>
        </Container>
    </VStack>
  );
}


export default App;
