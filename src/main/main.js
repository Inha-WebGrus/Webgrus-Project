import './main.css';
import '../font.css';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import { Link } from '@chakra-ui/react'
import SimpleSlider from './SimpleSlider.js';
import { Link as RouterLink } from 'react-router-dom';

function main() {
  return (
    <ChakraProvider className='page'>

      <div className='head'>
        <Link as={RouterLink} to='/menubar'>
          <div className='menu'><HamburgerIcon 
              color='white' w={30} h={30}/>
          </div>
        </Link>
        <Link as={RouterLink} to='/notice'><div className='name'>InPlace</div></Link>
      </div>

      <div>
        <div className='category' id='diner'>
          맛집
          <div className='seeAll' id='ds'>
            {' '}<Link as={RouterLink} to="/food_intro" color='#4364F7'>
            모두보기</Link>
          </div>
          <SimpleSlider/>
        </div>
        <div className='category' id='schedule'>
          일정
          <div className='seeAll' id='ss'>
            {' '}<Link as={RouterLink} to="/date" color='#4364F7'>
            모두보기</Link>
          </div>
          <SimpleSlider/>
        </div>
        <div className='category' id='schedule'>
          공지
          <div className='seeAll' id='ss'>
            {' '}<Link color='#4364F7' href='#'>
            모두보기</Link>
          </div>
          <SimpleSlider/>
        </div>
          
      </div>

    </ChakraProvider>
  );
}

export default main;
