import { Box, Avatar, Text, Stack } from "@chakra-ui/react";

export default function ProfileCard() {
    return (
        <Box className="p-4 shadow-lg rounded-lg max-w-sm bg-white">
            <Stack align="center" spacing={4}>
                <Avatar
                    size="xl"
                    name="Sumitha Veera"
                    src="images/profile_avatar.jpg" // 
                />
                <Box textAlign="center">
                    <Text fontSize="xl" fontWeight="bold">
                        Sumitha Veera
                    </Text>
                    <Text color="gray.500">Full Stack Developer</Text>
                </Box>
            </Stack>
        </Box>
    );
}
