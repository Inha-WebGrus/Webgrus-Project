import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import HeaderBar from "./component/headerBar";
import tabBar from "./component/tabBar";
import NoticeListtemp from "./component/noticeList";
import NoticeList from "./component/noticeList";
import "./App.css";

function App() {
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
        <Box
          w={"100%"}
          h={"71px"}
          borderTop={"1px solid black"}
          padding={"10px 0"}
        >
          {tabBar}
        </Box>
        <NoticeList />
      </Box>
    </ChakraProvider>
  );
}

export default App;
