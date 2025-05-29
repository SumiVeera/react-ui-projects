import React, { useState } from "react";
import { ChakraProvider, Box, Text, Button, VStack, HStack } from "@chakra-ui/react";

function CounterApp() {
    const [count, setCount] = useState(0);

    return (

        <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg="gray.50">
            <VStack spacing={6} bg="white" p={8} shadow="xl" rounded="lg">
                <Text fontSize="4xl" fontWeight="bold">
                    Count: {count}
                </Text>
                <HStack spacing={4}>
                    <Button colorScheme="teal" onClick={() => setCount(count + 1)}>
                        +
                    </Button>
                    <Button colorScheme="red" onClick={() => { if (count > 0) { setCount(count - 1) } }}>
                        -
                    </Button>
                    <Button colorScheme="gray" onClick={() => setCount(0)}>
                        Reset
                    </Button>
                </HStack>
            </VStack>
        </Box>

    );
}

export default CounterApp;
