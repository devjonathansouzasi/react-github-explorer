import styled from 'styled-components';

import {Link} from "react-router-dom";

import { KeyboardArrowRight } from "@styled-icons/material-rounded"

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border-radius: 5px;
  text-decoration: none;
  background-color: ${({theme}) => theme.colors.secondary};
  transition: transform .2s ease-in-out;

  @media(min-width: 768px){
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    > svg {
      margin-top: 0;
    }
  }

  & + a {
    margin-top: 16px;
  }

  svg {
    margin-top: 16px;
    fill: ${({theme}) => theme.colors.title};
    @media(min-width: 768px) {
      margin-top: 0px;
    }
  }

  &:hover {
    border-left: 4px solid ${({theme}) => theme.colors.hint};
    transform: translateX(10px) scale(1.02);

    svg {
        fill: ${({theme}) => theme.colors.hint};
    }
  }

  &:only-child {
    cursor: pointer;
  }
`;

export const Avatar = styled.img`
  flex-shrink: 0;
  width: max(45px, min(80px, 20vw));
  height: max(45px, min(80px, 20vw));
  border-radius: 50%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 24px;
  text-align: center;

  @media(min-width: 768px){
    align-items: flex-start;
    text-align: unset;

  }

  > strong {
      font-size: 18px;
      color: ${({theme}) => theme.colors.title};
  };
  > span {
      font-size: 16px;
      color: ${({theme}) => theme.colors.subtitle};
  };
`;

export const ArrowIcon = styled(KeyboardArrowRight)`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
`;
