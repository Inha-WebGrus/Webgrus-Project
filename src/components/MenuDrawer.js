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
  Card,
  CardBody,
  CardFooter,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Img,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { React, useState, useRef } from 'react';
import { ButtonGroup } from 'react-bootstrap';

const MenuDrawer = ({ color = 'black' }) => {
  const [size, setSize] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const navigate = useNavigate();
  const currentURL = useLocation().pathname;
  const [isInfo, setInfo] = useState(false);

  const InfoScreen = () => {
    return (
      <Box w="100%" m="12px">
        {isInfo === false ? (
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
        ) : (
          <Card py="12px" px="18px">
            <CardBody p="12px">
              <Flex>
                <Img
                  h="120px"
                  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMjdfMTQg%2FMDAxNjY2ODQwNDIxMDY2.tQqXDjbzCfx-ZQPVEM3vPdVfFS6vn9NnHSLt09iZwvQg.ZXKnoL6w7rPx63TVDqbFfU4yIrFDrxHthx88zm5DPKog.JPEG.aramnurimaru%2F20221024%25A3%25DF102003.jpg&type=a340"
                />
                <Flex direction="column" justify="space-around" mx="auto">
                  <Text>포포 / 이승주</Text>
                  <Text>학번: 18학번</Text>
                  <Text>Gold</Text>
                </Flex>
              </Flex>
              <Stack mt="1" spacing="1">
                <Button h="34px" colorScheme="blue">
                  내가 쓴 글
                </Button>
                <Button h="34px" colorScheme="blue">
                  스크랩
                </Button>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter p="5px">
              <Flex w="100%" spacing="5px">
                <Box as="button" w="50%">
                  회원정보
                </Box>
                <Box as="button" w="50%">
                  <Link to="/Setting">설정</Link>
                </Box>
              </Flex>
            </CardFooter>
          </Card>
        )}
      </Box>
    );
  };
  const handleClick = newSize => {
    setSize(newSize);
    onOpen();
  };
  const changeInfo = () => {
    setInfo(!isInfo);
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
              <Box as="button" border="2px solid black" onClick={changeInfo}>
                Click
              </Box>
            </Stack>
          </DrawerBody>
          <DrawerFooter p="0">
            <InfoScreen />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
