import { Box, Text, Flex, VStack, Spacer } from "@chakra-ui/react";
import CircleText from "./circleText";
import "../App.css";

const months = [
  { en: "Jul", num: 7 },
  { en: "Aug", num: 8 },
  { en: "Sep", num: 9 },
];

const monthBar = [];
let monthNum;
for (let i = 0; i < months.length; i++) {
  if (i === 1) {
    monthNum = <CircleText>{months[i].num}</CircleText>;
  } else {
    monthNum = <Text h={"24px"}>{months[i].num}</Text>;
  }
  monthBar.push(
    <Box
      flex={1}
      textAlign={"center"}
      fontFamily={"poppinLight"}
      fontSize={"17px"}
      color={"#636773"}
    >
      <VStack justifyContent={"center"} spacing={"3"} h={"100%"}>
        <Text>{months[i].en}</Text>
        <Text>{monthNum}</Text>
      </VStack>
    </Box>
  );
}

export default monthBar;
