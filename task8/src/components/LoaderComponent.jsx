import React, { useEffect, useState } from "react";
import { ChakraProvider, Spinner, Box, Text, Skeleton } from "@chakra-ui/react";

function LoaderComponent() {
  const [loading, setLoading] = useState(true);

  // Simulate data loading with a timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ChakraProvider>
      <Box className="p-8 flex items-center justify-center h-screen bg-gray-100">
        {loading ? (
          // You can switch between Spinner and Skeleton here
          <Spinner size="xl" color="purple.500" thickness="4px" />
          // OR Skeleton Example:
          // <Skeleton height="100px" width="300px" borderRadius="md" />
        ) : (
          <Box
            p={6}
            bg="white"
            rounded="lg"
            shadow="md"
            className="text-center"
          >
            <Text fontSize="xl" fontWeight="bold" color="green.600">
              🎉 Content Loaded!
            </Text>
            <Text mt={2} color="gray.600">
              This is the mock data shown after loading completes.
            </Text>
          </Box>
        )}
      </Box>
    </ChakraProvider>
  );
}

export default LoaderComponent;
