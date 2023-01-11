import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import styled from "styled-components";

function Star () {
    
    const array = [0, 1, 2, 3, 4]

    const [clicked, setClicked] = useState([false, false, false, false, false]);

    const handleStarClick = index => {
        let clickStates = [...clicked];
        for (let i = 0; i < 5; i++) {
          clickStates[i] = i <= index ? true : false;
        }
        setClicked(clickStates);
    };
    
    return (
        <Wrap>
            <RatingText>평가하기</RatingText>
            <Stars>
                {array.map((el, idx) => {
                return (
                    <Icon icon="ic:baseline-star-border"
                    key={idx}
                    size="50"
                    onClick={() => handleStarClick(el)}
                    className={clicked[el] && 'yellowStar'}
                    />
                );
                })}
            </Stars>
        </Wrap>
    )

    
}

export default Star;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

const RatingText = styled.div`
  color: #787878;
  font-size: 12px;
  font-weight: 400;
`;

const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;
