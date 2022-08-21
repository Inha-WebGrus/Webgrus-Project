import * as React from "react";
import { CalendarIcon, BellIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";
import "../App.css";

const menuData = [
  { icon: <CalendarIcon />, title: "Date" },
  { icon: <BellIcon />, title: "Notice" },
  { icon: <StarIcon />, title: "Food" },
];

const menulist = [];

for (let i = 0; i < menuData.length; i++) {
  menulist.push(
    <Box
      m={"12px 0"}
      h={"40px"}
      fontFamily={"Montserrat-Regular"}
      fontSize="24px"
      color={"#AAADB5"}
      fontWeight="medium"
    >
      {menuData[i].icon}
      &nbsp;&nbsp;&nbsp;{menuData[i].title}
    </Box>
  );
}

function MenuList() {
  return <Flex direction={"column"}>{menulist}</Flex>;
}

export default MenuList;
