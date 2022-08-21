import { createIcon, Icon } from "@chakra-ui/icons";
import { Circle, Square } from "@chakra-ui/react";
import { ChevronLeftIcon, AddIcon } from "@chakra-ui/icons";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);

export default CircleIcon;
