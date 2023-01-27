import { ChakraProvider } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react';


function Main() {
// message 초기값을 ""으로 설정.
const [message, setMessage] = useState("");

// useEffect(함수,배열) : 컴포넌트가 화면에 나타났을(마운트)때 자동 실행.
useEffect( () => {
   
      // fetch(url,options) : HTTP 요청 함수
      fetch("/swagger-ui/index.html#/")
      .then((response) => response.text())
      .then((message) => {
      setMessage(message);
      });
      },[]);

  return (
    <ChakraProvider className='page'>
      안녕하세요{message}
    </ChakraProvider>
  );
}

export default Main;
