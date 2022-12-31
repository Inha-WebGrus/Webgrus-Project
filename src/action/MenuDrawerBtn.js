import { ArrowLeftIcon, HamburgerIcon } from '@chakra-ui/icons';
import 'https://kit.fontawesome.com/9596d68cb2.js';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuDrawerBtn.module.css';

const MenuDrawerBtn = ({ color }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  if (color === null) {
    color = 'black';
  }
  return (
    <div>
      <HamburgerIcon
        color={color}
        w={30}
        h={30}
        ref={btnRef}
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <span>IN PLACE</span>

            <Link to="/">
              <i class="fa-solid fa-house"></i>
            </Link>
          </DrawerHeader>
          <br />
          <DrawerBody>
            <Stack align="stretch" spacing={10} fontSize="24px">
              <Link to="/date">
                <Box>Date</Box>
              </Link>
              <Link to="/notice">
                <Box>Notice</Box>
              </Link>
              <Link to="/food">
                <Box>Food</Box>
              </Link>
            </Stack>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Stack w="100%">
              <Link to="/login">
                <Button variant="outline" onClick={onClose}>
                  로그인
                </Button>
              </Link>
              <Link to="/register_1">
                <Button colorScheme="blue">회원가입</Button>
              </Link>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default MenuDrawerBtn;
