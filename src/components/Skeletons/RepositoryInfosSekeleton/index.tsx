import React from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import {useTheme} from "styled-components";

import {Container, InfosWrapper, StatsWrapper, Infos} from "./styles";

const RepositoryInfosSekeleton: React.FC = () => {
  const theme = useTheme();
  return (
    <SkeletonTheme color={theme.colors.secondary} highlightColor={theme.colors.primary}>
        <Container>
          <InfosWrapper>
              <Skeleton circle width={100} height={100} />
                <Infos>
                  <div>
                    <Skeleton height={35}/>
                  </div>
                  <div>
                    <Skeleton height={50}/>
                  </div>
                </Infos>
              </InfosWrapper>
              <StatsWrapper>
                <Skeleton height={50}/>
              </StatsWrapper>
        </Container>
    </SkeletonTheme>
  );
}

export default RepositoryInfosSekeleton;