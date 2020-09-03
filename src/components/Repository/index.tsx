import React, { memo, useMemo } from 'react';

import { Container, Avatar, InfoWrapper, ArrowIcon  } from './styles';

interface Props {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
};

const Repository: React.FC<Props> = ({full_name, description, owner}) => {
  const descriptionDoted = useMemo(() => {
    if(!description){
      return "No description available."
    }
    if(description.length > 120){
      return description.slice(0, 117).concat("...")
    }
    return description;
  }, [description]);

  return (
      <Container to={`repositories/${full_name}`}>
        <Avatar src={owner.avatar_url}/>
        <InfoWrapper>
          <strong>{full_name}</strong>
          <span>{descriptionDoted}</span>
        </InfoWrapper>
        <ArrowIcon/>
      </Container>
  );
}

export default memo(Repository);