import React from "react";
import { Box, VStack, Text } from "@chakra-ui/react";
import ColorModeToggle from "./components/ColorModeToggle";

function App() {
  return (
    <Box className="p-6 dark:bg-gray-900 min-h-screen">
      <VStack spacing={6}>
        <ColorModeToggle />
        <Text fontSize="2xl" className="text-black dark:text-white">
          Toggle Dark Mode!
        </Text>
      </VStack>
    </Box>
  );
}

export default App;
