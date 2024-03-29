import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import "../App.css";

const noticeData = [
  {
    date: "7.22",
    title: "공과대학 전공 수강신청 관련 안내",
    content:
      "전국 159개 새일센터에서 지원하는 취·창업지원 서비스 부문과 새일센터 이용자 부문으로 구분해 공모를 받는다. 새일센터 종사자와 서비스 이용자(여성 또는 기업 관계자)가 공동으로 참여하거나 여성 또는 기업이 단독으로 참여하는 것도 가능하다.",
  },
  {
    date: "7.29",
    title: "2022년 조기 개강 관련 안내",
    content:
      "올해 들어 삼성전자 주가는 반도체 업황 둔화 우려 등으로 연초 7만원대에서 지난달 5만원대까지 하락했으나 개인 투자자들은 상반기에만 삼성전자 주식을 15조원 이상 순매수했다.삼성전자 직원 수는 11만7904명으로 역대 최대 규모를 기록했다. 이는 작년 말(11만3485명)보다 4419명 증가한 것이다. 삼성전자는 그동안 수시 채용과 상반기 공채를 통해 직원을 늘려왔다",
  },
  {
    date: "8.17",
    title: "WEB Grus의 프로젝트 팀 인플에서 역대급 프로젝트를 개발",
    content: "그래",
  },
  {
    date: "8.17",
    title: "WEB Grus의 프로젝트 팀 인플에서 역대급 프로젝트를 개발",
    content: "그래",
  },
];
const NoticeListtemp = [];
function NoticeList() {
  return (
    <Accordion
      fontFamily={"PretendardVariable"}
      defaultIndex={[0]}
      allowMultiple
    >
      {NoticeListtemp}
    </Accordion>
  );
}
let noticebg;
for (let i = 0; i < noticeData.length; i++) {
  if (i % 2 === 0) {
    noticebg = "#F9FCFE";
  } else {
    noticebg = "#ffffff";
  }
  NoticeListtemp.push(
    <AccordionItem bg={noticebg}>
      <AccordionButton fontWeight={"semibold"} paddingLeft="0">
        <Box flex="1" textAlign="left">
          <Flex>
            <Box textAlign={"center"} width={"80px"}>
              {noticeData[i].date}
            </Box>

            <Box flex={1}>{noticeData[i].title}</Box>
          </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel
        paddingLeft={"0"}
        paddingRight={"40px"}
        pb={4}
        fontWeight="medium"
      >
        <Flex>
          <Box width={"80px"}></Box>

          <Box flex={1}>{noticeData[i].content}</Box>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default NoticeList;
