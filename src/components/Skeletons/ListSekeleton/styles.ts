import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

   > span {
    span + span {
        margin-top: 16px;
    }
  }
`;