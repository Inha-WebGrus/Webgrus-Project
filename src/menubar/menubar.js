import { ChakraProvider, Text } from "@chakra-ui/react";
import '../font.css';
import * as React from "react";
import { Box,Link } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import MenuList from "./component/menulist";
import LoginForm from "./component/loginform";
import { Link as RouterLink, Router } from 'react-router-dom';

function menubar() {
  return (
    <ChakraProvider>
      <Box w={"375px"} h="782px" border={"1px"} margin={"auto"}>
        <Flex
          bg={"#FAFBFD"}
          position="relative"
          direction="column"
          w="80%"
          h="100%"
          justifyContent={"space-between"}
          borderRight={"1px"}
        >
          <Box
            paddingLeft={"10px"}
            position={"relative"}
            h={"56px"}
            margin={"22px 25px"}
            marginLeft="30px"
            fontFamily={"Montserrat-Bold"}
          >
            <Flex
              justifyContent={"space-between"}
              alignItems="center"
              h={"100%"}
            >
              <Link as={RouterLink} to="/"><Text fontSize={"24px"}>IN Place</Text></Link>
              <ChevronLeftIcon color={"#AAADB5"} w="auto" h="25px" />
            </Flex>
          </Box>
          <Box margin={"10px 30px"} flex={1} fontFamily={"Montserrat-SemiBold"}>
            <MenuList />
          </Box>
          <Box borderTop={"1px"} h="177px">
            {LoginForm}
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default menubar;
