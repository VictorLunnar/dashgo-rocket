import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Victor Mayer</Text>
          <Text color="gray.300" fontSize="small">
            victor@lunnar.team
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Victor Mayer"
        src="https://github.com/vimayer.png"
      />
    </Flex>
  );
}
