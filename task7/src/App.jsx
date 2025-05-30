// src/App.jsx
import React from "react";
import { ChakraProvider, Box, Text } from "@chakra-ui/react";

const cards = [
  {
    title: "Profile Overview",
    content: "View and edit your personal information, profile picture, and contact details.",
  },
  {
    title: "Task Manager",
    content: "Create, track, and manage your daily tasks with reminders and deadlines.",
  },
  {
    title: "Analytics Dashboard",
    content: "Get insights into your app usage, performance stats, and user engagement.",
  },
  {
    title: "Messages",
    content: "Check your latest messages and notifications from your team or system.",
  },
  {
    title: "Settings",
    content: "Customize your preferences, theme, and notification settings.",
  },
  {
    title: "Help & Support",
    content: "Need assistance? Access FAQs or reach out to our support team.",
  },
];


function App() {
  return (
    <ChakraProvider>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Box
              key={index}
              className="shadow-md rounded-lg p-6 hover:shadow-xl transition duration-200"
              bg="gray.500"
            >
              <Text fontSize="xl" className="text-indigo-600 font-bold mb-2">
                {card.title}
              </Text>
              <Text color="black.600">{card.content}</Text>
            </Box>
          ))}
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;





