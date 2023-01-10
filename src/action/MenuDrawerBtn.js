import {
  ArrowLeftIcon,
  BellIcon,
  CalendarIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';
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
  RangeSliderThumb,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuDrawerBtn.module.css';

const MenuDrawer = ({ color = 'black' }) => {
  const [size, setSize] = React.useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleClick = newSize => {
    setSize(newSize);
    onOpen();
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
        <DrawerContent className={styles.DrawerContent}>
          <DrawerHeader
            borderBottomWidth="10px"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box bgGradient="pink" bgClip="text">
              <Text
                display="inline"
                fontSize="28px"
                fontWeight="700"
                marginRight="20px"
                color="black"
              >
                IN PLACE
              </Text>
              <Link to="/">
                <i class="fa-solid fa-house"></i>
              </Link>
            </Box>
            <DrawerCloseButton />
          </DrawerHeader>
          <br />
          <DrawerBody>
            <Stack
              align="stretch"
              spacing={7}
              fontSize="24px"
              fontWeight="500"
              opacity="0.7"
            >
              <Link to="/date">
                <Box>
                  <CalendarIcon boxSize={7} />
                  <Text display="inline" marginLeft="12px">
                    Date
                  </Text>
                </Box>
              </Link>
              <Link to="/notice">
                <Box>
                  <BellIcon boxSize={7} />
                  <Text display="inline" marginLeft="12px">
                    Notice
                  </Text>
                </Box>
              </Link>
              <Link to="/food">
                <Box marginLeft="3px">
                  <i class="fa-solid fa-utensils"></i>
                  <Text display="inline" marginLeft="16px">
                    Food
                  </Text>
                </Box>
              </Link>
            </Stack>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Stack w="100%">
              <Link to="/login">
                <Button
                  color="white"
                  borderRadius="20px"
                  width="100%"
                  variant="outline"
                  onClick={onClose}
                  bgGradient="pink"
                >
                  로그인
                </Button>
              </Link>
              <Link to="/register_1">
                <Button
                  color="white"
                  borderRadius="20px"
                  width="100%"
                  bgGradient="pink"
                >
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
