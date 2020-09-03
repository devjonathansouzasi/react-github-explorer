import React, { useState, FormEvent, useEffect, lazy, Suspense } from 'react';
import Header from 'components/Header';
import ListSekeleton from 'components/Skeletons/ListSekeleton';

import api from "services/api";

import { 
  Container,
  Body,
  Title,
  Form,
  ErrorMessage,
  Repositories 
} from './styles';

const Repository = lazy(() => import('components/Repository'));

interface RepositoryProps {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
};

const APP_STORAGE_NAME = "@GithubExplorer:repositories";

const Dashboard: React.FC = () => {
  const [search, setSearch] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [repositories, setRepositories] = useState<RepositoryProps[]>(() => {
    const storagedRepositories = localStorage.getItem(APP_STORAGE_NAME);

    if(storagedRepositories){
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(APP_STORAGE_NAME, JSON.stringify(repositories));
  }, [repositories]);

  const handleSearchRepository = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();
      if(!search || !search.includes("/") || search.trim().split("/").filter(pos => pos !== "").length !== 2){
        
        setSearchError("Search is not valid. Try author/repository!");
        return;
      }
      try {
        const response = await api.get<RepositoryProps>(`repos/${search}`);
        const newRepo = response.data;
  
        setRepositories([newRepo, ...repositories]); 
        setSearch("");
        setSearchError("");
      } catch {
        setSearchError("Repository not found!")
      }
  }

  return (
      <Container>
        <Header />
          <Body>
            <Title>Explore repositories on Github.</Title>
            <Form 
              onBlur={() => setSearchError("")}
              hasError={!!searchError}
              focused={searchFocused}
              onSubmit={handleSearchRepository} 
              noValidate>
              <input 
                value={search}
                onBlur={() => setSearchFocused(false)}
                onFocus={() => setSearchFocused(true)}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by author/repository"/>
              <button>Let`s go!</button>
            </Form>
            {searchError && <ErrorMessage>{searchError}</ErrorMessage>}
            <Repositories>
              <Suspense fallback={<ListSekeleton />}>
                {repositories.map(repository => (
                  <Repository 
                    key={repository.full_name} 
                    {...repository}/>
                ))}
              </Suspense>
            </Repositories>
          </Body>
      </Container>
  );
}

export default Dashboard;