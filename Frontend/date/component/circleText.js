import { Text } from "@chakra-ui/react";
import * as React from "react";

function CircleText(props) {
  return (
    <Text
      margin="0 auto"
      width="24px"
      height="24px"
      verticalAlign="middle"
      borderRadius="100%"
      color={"white"}
      backgroundImage={"./fontimg.png"}
      bgPosition={"center"}
      backgroundColor="blue"
    >
      {props.children}
    </Text>
  );
}

export default CircleText;
