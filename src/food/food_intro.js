import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  theme,
  Flex,
  Link
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import '../font.css';
import { Link as RouterLink } from 'react-router-dom';


function food_intro()  {    
  return (
    <ChakraProvider theme={theme}>
        <Flex
          w="100%"
          h="100%"
          pos="relative"
        >
          <Box
            align="right" 
            w="100%" h = "375px"   
            pr={15} pt ={29}
            bgImage="url('/food_intro.jpg')"
            pos="relative"
            bgPosition="center"
            bgRepeat="no-repeat" 
            bgSize="cover">
              <Link as={RouterLink} to="/">
              <Box as='button' fontFamily={"PretendardVariable"}
              borderRadius='100px' bg='black' color='white' px={4} h={8}>
              Home</Box>
              </Link>
          </Box>
          <Box 
            w="100%" h = "479px"
            bg="white"
            top="345px"
            zIndex={2}
            borderTopRadius="24px"
            pos="absolute"
            //textAlign='center'
            align="center"
          >
          {/*박스 */}
          <Box
            w="100%" h="250px"
            pos="absolute"
            top="57px"
            >
          <Flex
           border= '1.62916px solid' borderColor='#CECECE'
           borderRadius="81.4579px"
           w="69px" h="68px"
           mb="33px"
           justify="center"//내부아이콘 가로세로 중앙정렬
           align="center"//
          >
            <Icon icon="mdi:chef-hat" color="#1abcfe" height="41" width="38" 
            />
          </Flex>
            <Text fontFamily={"PretendardVariable"}
            bgClip="text"
            bgImage="url('/blue_gd.png')" 
            bgPosition="center"
            color={'transparent'}
            fontSize="62px"
            fontWeight="700"
            mb="-10px"
            >inha.
            </Text>
            <Text fontFamily={"AppleSDGothicNeoB"}
            color='#8795AF' 
            fontSize="22px" letterSpacing="-0.005em"
            fontWeight="regular"
            mb="80px"
            >를 위한. 에 의한. 맛집 추천 서비스
            </Text>
            
            <Link as={RouterLink} to="/food_list">
              <Box as='button'
              borderRadius='100px' bgImage="url('/blue_gd.png')" bgSize="cover"
              color='white' px={4}
              w="239px" h="52px"
              fontFamily={"AppleSDGothicNeoB"} fontSize="18px" letterSpacing="0.06em"
              boxShadow='2xl'
              >맛집 보러가기
              </Box>
            </Link>
          </Box>
        </Box>
        </Flex>

    </ChakraProvider>
  );
};

export default food_intro;