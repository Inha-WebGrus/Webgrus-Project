import { Box, Container, Flex } from "@chakra-ui/react";
import * as React from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import CircleIcon from "./icon";
import { Text } from "@chakra-ui/react";
import "../date.css";

function HeaderBar() {
  return (
    <Flex
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      h={"100%"}
    >
      <ChevronLeftIcon w="auto" h="25px" marginLeft="16.3" />

      <Text
        fontFamily={"pretendardVariable"}
        fontWeight={"bold"}
        fontSize={"20px"}
        color={"transparent"}
        bgClip="text"
        backgroundImage={"./fontimg.png"}
        bgPosition={"center"}
      >
        2022
      </Text>
      <Box marginRight={"29px"}>
        <CircleIcon boxSize={2} />
        <CircleIcon boxSize={2} />
        <CircleIcon boxSize={2} />
      </Box>
    </Flex>
  );
}

export default HeaderBar;
