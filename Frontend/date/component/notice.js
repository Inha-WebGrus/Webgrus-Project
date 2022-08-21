import { Flex, Text, Box } from "@chakra-ui/react";
import "../App.css";

const noticeData = [
  { date: "7.22~8.02", content: "프로젝트 디자인 작업" },
  { date: "7.22~8.02", content: "프로젝트 디자인 작업" },
  { date: "7.22~8.02", content: "프로젝트 디자인 작업" },
  { date: "7.22~8.02", content: "프로젝트 디자인 작업" },
];

const noticeList = [];

for (let i = 0; i < noticeData.length; i++) {
  noticeList.push(
    <Box h={"83px"} borderBottom={"1px solid gray"} padding={"10px"}>
      <Flex h={"100%"} direction={"column"} justifyContent={"space-around"}>
        <Text fontFamily={"Poppins-Medium"} fontSize={"16px"}>
          {noticeData[i].date}
        </Text>
        <Text fontFamily={"AppleSDGothicNeoM"} fontSize={"16px"}>
          {noticeData[i].content}
        </Text>
      </Flex>
    </Box>
  );
}

export default noticeList;
