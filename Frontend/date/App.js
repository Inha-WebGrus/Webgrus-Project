import "./App.css";
import * as React from "react";
import { Box, ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import noticeList from "./component/notice";
import { AddIcon } from "@chakra-ui/icons";
import monthBar from "./component/months";
import HeaderBar from "./component/headerBar";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Box
        minWidth={"300px"}
        maxWidth={"600px"}
        minHeight="100vh"
        border={"1px"}
        margin={"auto"}
      >
        <Box w="100%" h={"60px"}>
          <HeaderBar />
        </Box>
        <Box bg="#f0f0f1" w="100%" h={"78px"}>
          <Flex h={"100%"}>{monthBar}</Flex>
        </Box>
        <Box w="100%" h={"72px"}>
          <Flex
            direction={"row"}
            justifyContent={"space-between"}
            padding={"0 20px"}
            alignItems="center"
            h={"100%"}
          >
            <Heading as="h1" fontFamily={"poppinLight"} fontSize={"26px"}>
              August 8
            </Heading>

            <AddIcon />
          </Flex>
        </Box>
        {noticeList}
      </Box>
    </ChakraProvider>
  );
}

export default App;
