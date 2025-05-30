import React, { useState } from "react";
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    useToast,
    VStack,
} from "@chakra-ui/react";

const FormWithToast = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const toast = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        toast({
            position: "top right",
            title: `Hello, ${name}!`,
            description: "Your form has been submitted successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
        });

        setName("");
        setEmail("");
    };

    return (
        <Box
        border="10px solid"
            maxW="md"
            //  h="100vh"
            mx="auto"
            mt={10}
            p={6}
            borderWidth={1}
            borderRadius="lg"
            boxShadow="lg"
            className="bg-white dark:bg-gray-800"
        >
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                    <FormControl isRequired>
                        <FormLabel className="text-blue-400">Name</FormLabel>
                        <Input
                        border={"1px solid"}
                        className="text-black dark:text-white"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel className="text-blue-400">Email</FormLabel>
                        <Input
                        className="text-black dark:text-white "
                        border={"1px solid"}
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>

                    <Button type="submit" colorScheme="teal" width="full" onClick={handleSubmit}>
                        Submit
                    </Button>
                </VStack>
            </form>
        </Box>
    );
};

export default FormWithToast;
