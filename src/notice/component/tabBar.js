import { Box, Flex, Spacer } from "@chakra-ui/react";
import "../notice.css";
const tabBar = (
  <Flex
    className="tabBarColor"
    alignItems={"center"}
    gap="18px"
    padding={"4px"}
    paddingRight={"16px"}
    minWidth={"300px"}
    maxWidth={"600px"}
    borderRadius={"14px"}
    border="1px solid black"
    margin={"auto 20px"}
    justifyContent={"space-around"}
    fontFamily={"Poppins-Regular"}
    bg={"#C5DCFA"}
    opacity="0.5"
  >
    <Box
      as="button"
      borderRadius="12px"
      bg="blue"
      color="white"
      w={"44px"}
      h={"32px"}
    >
      All
    </Box>
    <div>officiall</div>
    <div>etc</div>
    <Spacer></Spacer>
    <div>more</div>
  </Flex>
);

export default tabBar;
