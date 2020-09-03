import React, { useEffect, Suspense } from 'react';
import {useParams, useHistory} from "react-router-dom";

import Header from 'components/Header';
import Issue from "components/Issue";

import { BASE_URL } from 'services/api';

import useFetch from "hooks/useFetch";

import { Container, Body, InfosWrapper, Avatar, Infos, StatsWrapper, Stat, StarIcon, ForkIcon, OpenedIssueIcon, IssuesList } from './styles';
import RepositoryInfosSekeleton from 'components/Skeletons/RepositoryInfosSekeleton';
import ListSekeleton from 'components/Skeletons/ListSekeleton';
import { ConfigInterface } from 'swr';

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string
  }
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}

const RepositoryDetails: React.FC = () => {

  const regex = /\w+\/\w+/g;

  const history = useHistory();
  const {id} = useParams();

  const handleGoBack = () => {
    history.go(-1);
  };
  
  useEffect(() => {
    if(!id || !id.match(regex)){
      history.replace("/");
      return;
    }  
  }, [id, history, regex]);

  const {data: repository} = useFetch<Repository | null>((!id || !id.match(regex)) ? null : `${BASE_URL}/repos/${id}`);
  const {data: issues} = useFetch<Issue[]>((!id || !id.match(regex)) ? null : `${BASE_URL}/repos/${id}/issues`);


  return (
      <Container>
        <Header goBack={handleGoBack}/>
        <Body>
          <Suspense fallback={RepositoryInfosSekeleton}>
            {!repository ? 
              <RepositoryInfosSekeleton /> :
              <>
                <InfosWrapper>
                  <Avatar src={repository?.owner.avatar_url}/>
                  <Infos>
                    <strong>{repository?.full_name}</strong>
                    <span>{repository?.description}</span>
                  </Infos>
                </InfosWrapper>
                <StatsWrapper>
                  <Stat>
                    <strong>{repository?.stargazers_count}</strong>
                    <StarIcon />
                  </Stat>
                  <Stat>
                    <strong>{repository?.forks_count}</strong>
                    <ForkIcon />
                  </Stat>
                  <Stat>
                    <strong>{repository?.open_issues_count}</strong>
                    <OpenedIssueIcon />
                  </Stat>
                </StatsWrapper>
              </>
            }
          </Suspense>
          <Suspense fallback={RepositoryInfosSekeleton}>
            {!issues ? 
              <ListSekeleton /> :
              <IssuesList>
                {issues?.map(issue => (
                  <Issue key={issue.id} title={issue.title} user={issue.user.login} url={issue.html_url}/>
                ))}
              </IssuesList>
            }
          </Suspense>
        </Body>
      </Container>
  );
}

export default RepositoryDetails;