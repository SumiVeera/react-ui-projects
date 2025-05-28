import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ProfileCard from "./components/ProfileCard.jsx";
// test
function App() {
  const handleClick = () => {
    alert("Chakra Button clicked!");
  };

  return (
  

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <ProfileCard />
      </div>

  );
}

export default App;





