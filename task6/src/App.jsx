import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Input,
  Button,
  List,
  ListItem,
  IconButton,
  HStack,
  Text,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDelete = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  return (
    <ChakraProvider>
      <Box maxW="md" mx="auto" mt={10} p={4}>
        <HStack spacing={3}>
          <Input
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button colorScheme="blue" onClick={handleAdd}>
            Add
          </Button>
        </HStack>

        <List spacing={3} mt={5}>
          {tasks.map((item, idx) => (
            <ListItem
              key={idx}
              className="border p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text>{item}</Text>
              <IconButton
                aria-label="Delete"
                icon={<DeleteIcon />}
                size="sm"
                onClick={() => handleDelete(idx)}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </ChakraProvider>
  );
};

export default App;



