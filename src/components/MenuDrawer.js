import 'https://kit.fontawesome.com/9596d68cb2.js';
import {
  BellIcon,
  CalendarIcon,
  ChevronLeftIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { React, useState, useRef } from 'react';

const MenuDrawer = ({ color = 'black' }) => {
  const [size, setSize] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const navigate = useNavigate();
  const currentURL = useLocation().pathname;

  const handleClick = newSize => {
    setSize(newSize);
    onOpen();
  };

  const moveLink = url => {
    if (url === currentURL) onClose();
    else navigate(url);
  };

  return (
    <div>
      <HamburgerIcon
        color={color}
        ref={btnRef}
        onClick={() => handleClick('xs')}
        boxSize={7}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={size}
      >
        <DrawerOverlay />
        <DrawerContent bg="#F7FAFC">
          <DrawerHeader layerStyle="flexRowBetween" display="flex" pr="10px">
            <Flex alignItems="center">
              <Text
                textStyle="fontColorMain"
                fontSize="36px"
                fontWeight="700"
                marginRight="20px"
              >
                IN PLACE
              </Text>
              <Box
                textStyle="fontColorMain"
                onClick={() => {
                  moveLink('/');
                }}
              >
                <i class="fa-solid fa-house fa-lg" />
              </Box>
            </Flex>
            <ChevronLeftIcon boxSize={12} color="#A0AEC0" onClick={onClose} />
          </DrawerHeader>

          <DrawerBody borderY="2px solid #E2E8F0">
            <br />
            <Stack
              align="stretch"
              spacing={8}
              fontSize="28px"
              fontWeight="500"
              color="#4A5568"
            >
              <Flex
                alignItems="center"
                onClick={() => {
                  moveLink('/date');
                }}
              >
                <CalendarIcon boxSize={7} />
                <Text display="inline" marginLeft="12px">
                  Date
                </Text>
              </Flex>
              <Flex
                alignItems="center"
                onClick={() => {
                  moveLink('/notice');
                }}
              >
                <BellIcon boxSize={7} />
                <Text display="inline" marginLeft="12px">
                  Notice
                </Text>
              </Flex>
              <Flex
                alignItems="center"
                onClick={() => {
                  moveLink('/food_intro');
                }}
              >
                <i class="fa-solid fa-utensils" />

                <Text display="inline" ml="16px" mb="2px">
                  Food
                </Text>
              </Flex>
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Stack w="100%" color="white">
              <Link to="/login">
                <Button textStyle="bgColorMain" w="100%" borderRadius="60px">
                  로그인
                </Button>
              </Link>
              <Link to="/register_1">
                <Button textStyle="bgColorMain" w="100%" borderRadius="60px">
                  회원가입
                </Button>
              </Link>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default MenuDrawer;
