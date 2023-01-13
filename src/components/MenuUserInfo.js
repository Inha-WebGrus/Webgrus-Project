import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Img,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ButtonGroup } from 'react-bootstrap';

const MenuUserInfo = ({ isInfo }) => {
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
        <Card justify="center" alignItems="center">
          <CardBody justifyContent="center" alignItems="center">
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
          <CardFooter flexDirection="column">
            <Box>22</Box>
            <ButtonGroup direction="column" spacing="2">
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

export default MenuUserInfo;
