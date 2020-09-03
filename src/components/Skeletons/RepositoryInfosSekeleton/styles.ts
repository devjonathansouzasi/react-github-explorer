import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const InfosWrapper = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;

    @media(min-width: 500px) {
        flex-direction: row;
    }
`;


export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 32px;

    > div {
        width: 100%;
        margin: 0 auto;
    }

    > div:first-child {
        max-width: min(500px, 100%);
    }

    @media(min-width: 768px) {
        margin-top: 0px;
        margin-left: 32px;
        > div {
        width: 100%;
        margin: unset;
    }
    }
`;

export const StatsWrapper = styled.div`
    margin: 32px auto;
    max-width: min(500px, 100%);
`;