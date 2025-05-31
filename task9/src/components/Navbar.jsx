import React from "react";
import { Avatar, Box, Flex, Text, Link, Spacer } from "@chakra-ui/react";

function Navbar() {
  return (
    <Box className="bg-white shadow-md px-6 py-4">
      <Flex align="center" className="space-x-4">
        {/* Logo */}
        <Text fontWeight="bold" fontSize="xl" color="blue.600">
          MyApp
        </Text>

        {/* Navigation links */}
        <Flex className="space-x-4" ml={6}>
          <Link href="#" fontSize="md" color="gray.700" _hover={{ color: "blue.500" }}>
            Home
          </Link>
          <Link href="#" fontSize="md" color="gray.700" _hover={{ color: "blue.500" }}>
            About
          </Link>
          <Link href="#" fontSize="md" color="gray.700" _hover={{ color: "blue.500" }}>
            Contact
          </Link>
        </Flex>

        {/* Spacer pushes avatar to the right */}
        <Spacer />

        {/* Profile Avatar */}
        <Avatar
          size="sm"
          name="Sumitha Veera"
          src="/images/profile.jpg"
          className="cursor-pointer"
        />
      </Flex>
    </Box>
  );
}

export default Navbar;
