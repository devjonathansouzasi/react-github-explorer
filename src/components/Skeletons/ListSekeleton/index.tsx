import React from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import {useTheme} from "styled-components";

import {Container} from "./styles";

const ListSekeleton: React.FC = () => {
  const theme = useTheme();
  return (
    <SkeletonTheme color={theme.colors.secondary} highlightColor={theme.colors.primary}>
      <Container>
          <Skeleton height={85} count={6}/>
      </Container>
    </SkeletonTheme>
  );
}

export default ListSekeleton;