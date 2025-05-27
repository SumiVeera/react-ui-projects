import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import CustomButton from "./components/CustomButton.jsx"; 
import { Flex, Text, Box, Button, MenuProvider} from '@chakra-ui/react'

function App() {
  const handleClick = () => {
    alert("Reusable Chakra Button clicked!");
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





/*import { useState } from 'react'
import { Flex, Text, Box, Button, MenuProvider} from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

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
        <Text>Count: {count}</Text>
        <Button  class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => setCount(count + 1)}>Increment</Button>
      </Box>

    </Flex>
    <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa' }}>
      <Text fontSize="sm" color="gray.600">
        © {new Date().getFullYear()} Your Company Name
      </Text>
    </footer>
     <Box mt={4}>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Hello Tailwind</h1>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Click me
      </button>
    </div>
      </Box>
    </>
  );
}
 */
// src/App.jsx




