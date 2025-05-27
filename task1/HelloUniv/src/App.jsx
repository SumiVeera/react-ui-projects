import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import CustomButton from "./components/CustomButton.jsx"; 
import { Flex, Text, Box, Button, MenuProvider} from '@chakra-ui/react'

function App() {
  const handleClick = () => {
    alert("Chakra Button clicked!");
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100vh"
      bgGradient="linear(to-r, teal.500, blue.500)"
    >
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg="white">
        <Text fontSize="xl" mb={4}>
          Hello Universe
        </Text>
    
        <CustomButton
          label="Click Me"
          onClick={handleClick}
          colorScheme="teal"
          variant="outline"
          size="lg"
        />
      </Box>

    </Flex>

    // </ChakraProvider>
  );
}

export default App;





