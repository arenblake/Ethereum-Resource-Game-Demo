import { ReactNode } from "react";
import { Flex, Text } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      h="8vh"
      w="100%"
      bg="gray.900"
      px="1rem"
    >
      <Text fontSize="4xl" color="tomato">
        Resource Game
      </Text>
      {children}
    </Flex>
  );
}
