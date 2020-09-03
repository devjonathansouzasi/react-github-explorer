import styled, {css, keyframes} from 'styled-components';
import { shade } from "polished";

interface FormProps {
    hasError: boolean;
    focused: boolean;
}

const shake = keyframes`
  0% {
    transform: translateX(-10px);
  }

  50% {
    transform: translateX(10px);
  }

  100% {
    transform: translateX(0px);
  }
`;

const fadeScale = keyframes`
  from {
    opacity: 0.8;
    transform: scale(0.95) translateY(-10px);
  }

  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;


export const Container = styled.div``;

export const Body = styled.div`
    margin-top: 80px;
    width: min(700px, 100%);
`;

export const Title = styled.h1`
    max-width: 450px;
    font-size: 48px;
    line-height: 56px;
`;

export const Form = styled.form<FormProps>`
    display: flex;
    align-items: center;
    margin-top: 40px;
    border-left: 4px solid transparent;
    border-radius: 5px;
    transition: border-color .2s ease-in-out;

    ${({focused, theme}) => focused && css`
        border-color: ${theme.colors.hint};
    `};

    ${({hasError, theme}) => hasError && css`
        border-color: ${theme.colors.error};
        animation: ${shake} .2s;
    `};

    > input {
        flex: 1;
        height: 72px;
        padding: 0 30px;
        border-radius: 5px 0 0 5px;
        background-color: ${({theme}) => theme.colors.secondary}; 
        &::placeholder {
            color: ${({theme}) => theme.colors.subtitle}; 
        }
    }

    > button {
        flex-shrink: 0;
        width: min(210px, 30vw);
        align-self: stretch;
        border-radius: 0 5px 5px 0;
        font-weight: bold;
        background-color: ${({theme}) => theme.colors.hint};  
        color: ${({theme}) => theme.colors.white};
        transition: all .2s ease-in-out;
        &:hover{
            background-color: ${({theme}) => shade(0.1, theme.colors.hint)};    
        }
    }
`;

export const ErrorMessage = styled.div`
    position: absolute;
    display: flex;
    width: min(700px, calc(100% - 50px));
    margin-top: 8px;
    padding: 10px 10px;
    border-left: 4px solid ${({theme}) => theme.colors.error};
    border-radius: 5px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.title};    
    background-color: ${({theme}) => theme.colors.secondary};   
    animation: ${fadeScale} .2s; 
`;

export const Repositories = styled.div`
    width: calc(100% + 24px);
    margin-top: 80px;
    padding-right: 20px;
`;