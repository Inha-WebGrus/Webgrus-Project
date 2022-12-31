import {
  BrowserRouter,
  Routes,
  Route,
  Link as RouteLink,
} from 'react-router-dom';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

//import시 첫 글자:대문자로
import Main from './main/main';
import Menubar from './menubar/menubar';

import Food_intro from './food/food_intro';
import Food_list from './food/food_list';
import Food_info from './food/food_info';
import Food_review from './food/food_review';

import Login from './login/login';
import Register_1 from './login/register_1';
import Register_2 from './login/register_2';
import Register_complete from './login/register_complete';
import DateScreen from './date/DateScreen';
import NoticeScreen from './notice/NoticeScreen';

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menubar" element={<Menubar />} />
          <Route path="/food_intro" element={<Food_intro />} />
          <Route path="/food_list" element={<Food_list />} />
          <Route path="/food_info" element={<Food_info />} />
          <Route path="/food_review" element={<Food_review />} />
          <Route path="/date" element={<DateScreen />} />
          <Route path="/notice" element={<NoticeScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register_1" element={<Register_1 />} />
          <Route path="/register_2" element={<Register_2 />} />
          <Route path="/register_complete" element={<Register_complete />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

//export default App; 있으면 오류
