// import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle Dark Mode"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      isRound
      size="md"
      className="shadow dark:shadow-lg"
    />
  );
};

export default ColorModeToggle;
