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
      <Box>
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
          <Card maxW="sm">
            <CardBody>
              <Img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMjdfMTQg%2FMDAxNjY2ODQwNDIxMDY2.tQqXDjbzCfx-ZQPVEM3vPdVfFS6vn9NnHSLt09iZwvQg.ZXKnoL6w7rPx63TVDqbFfU4yIrFDrxHthx88zm5DPKog.JPEG.aramnurimaru%2F20221024%25A3%25DF102003.jpg&type=a340"></Img>
              <Stack mt="6" spacing="3">
                <Text>개인정보</Text>
                <Text>내가쓴글</Text>
                <Text color="blue.600" fontSize="2xl">
                  슈퍼~
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
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
            </Stack>
            <Box
              as="button"
              border="2px solid black"
              p="5px"
              mt="400px"
              onClick={changeInfo}
            >
              Click
            </Box>
          </DrawerBody>
          <DrawerFooter>
            <InfoScreen />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
