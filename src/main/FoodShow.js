import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from 'react';
import Slider from 'react-slick';
import { Box, Flex } from '@chakra-ui/react';

const BgBox = () => (
  <Flex
    direction="column"
    h="180px"
    w="250px"
    bg="orange"
    color="white"
    mr="10px"
  >
    <Box h="70%" bg="skyblue">
      이미지
    </Box>
    <Box>인하대 베이커리</Box>
  </Flex>
);

const FoodShow = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 2,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <BgBox />
        <BgBox />
        <BgBox />
        <BgBox />
        <BgBox />
        <BgBox />
      </Slider>
    </div>
  );
};
export default FoodShow;
