import "./App.css";
import * as React from "react";
import {
  ChakraProvider,
  Grid,
  GridItem,
  SimpleGrid,
  Box,
  Center,
  Square,
  Circle,
  Flex,
  Spacer,
  Text,
  Icon,
  createIcon,
  Link,
} from "@chakra-ui/react";
import { ChevronLeftIcon, AddIcon } from "@chakra-ui/icons";

const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Grid
        templateAreas={`"one one one"
                  "two two two"
                  "three1 three2 three3"
                  "four four four"
                  "five five five"
                  "six six six"
                  "seven seven seven"
                  `}
        gridTemplateRows={"44px 60px 78px 72px 415px auto 123px"}
        gridTemplateColumns={"auto"}
        w="375px"
        h="812px"
        color="blackAlpha.700"
        fontWeight="bold"
        margin={"auto"}
        border={"solid 2px black"}
      >
        <GridItem pl="2" bg="orange.300" area={"one"}></GridItem>
        <GridItem pl="2" bg="pink.300" area={"two"}>
          <Flex flexDirection={"row"} gap={"130px"} position={"absolute"}>
            <ChevronLeftIcon w={6} h={6} />

            <Center>2022</Center>
            <div>
              <CircleIcon boxSize={2} />
              <CircleIcon boxSize={2} />
              <CircleIcon boxSize={2} />
            </div>
          </Flex>
        </GridItem>
        <GridItem pl="2" bg="#ffffff" area={"three1"} textAlign={"center"}>
          <Text>Jul</Text>
          <br />
          <Text>7</Text>
        </GridItem>
        <GridItem pl="2" bg="green.00" area={"three2"} textAlign={"center"}>
          <Text>Aug</Text>
          <br />
          <Text>8</Text>
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"three3"} textAlign={"center"}>
          <Text>Sep</Text>
          <br />
          <Text>9</Text>
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"four"}>
          <Flex direction={"row"} padding={"10px"}>
            <h1>August 8</h1>
            <Spacer />
            <AddIcon />
          </Flex>
        </GridItem>
        <GridItem pl="2" bg="#ffffff" area={"five"} padding={"0px"}>
          <Grid templateRows="repeat(5,1fr)">
            <GridItem border={"1px solid gray"} w="100%" h="83">
              <Text>7.22~8.02</Text>
              <br />
              <Text>프로젝트 디자인 작업</Text>
            </GridItem>
            <GridItem border={"1px solid gray"} w="100%" h="83">
              <Text>7.22~8.02</Text>
              <br />
              <Text>프로젝트 디자인 작업</Text>
            </GridItem>
            <GridItem border={"1px solid gray"} w="100%" h="83">
              <Text>7.22~8.02</Text>
              <br />
              <Text>프로젝트 디자인 작업</Text>
            </GridItem>
            <GridItem border={"1px solid gray"} w="100%" h="83">
              <Text>7.22~8.02</Text>
              <br />
              <Text>프로젝트 디자인 작업</Text>
            </GridItem>
            <GridItem border={"1px solid gray"} w="100%" h="83">
              <Text>7.22~8.02</Text>
              <br />
              <Text>프로젝트 디자인 작업</Text>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem border={"1px solid gray"} area={"six"}></GridItem>
        <GridItem area={"seven"} bg="gray" borderTop={"3px soild"}></GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
