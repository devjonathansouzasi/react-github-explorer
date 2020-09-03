import React, {memo} from 'react';

import { Container, InfoWrapper, ArrowIcon  } from './styles';

interface Props {
  title: string;
  user: string;
  url: string
};

const Issue: React.FC<Props> = ({title, user, url}) => {

  return (
      <Container href={url}>
        <InfoWrapper>
          <strong>{title}</strong>
          <span>{user}</span>
        </InfoWrapper>
        <ArrowIcon/>
      </Container>
  );
}

export default memo(Issue);