import styled, { css } from 'styled-components';

import {StarFill, RepoForked, IssueOpened} from "styled-icons/octicons"

export const Container = styled.div`

`;

export const Body = styled.div`
    margin-top: 80px;
    width: 100%;
`;

export const InfosWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(min-width: 500px) {
        flex-direction: row;
    }
`;

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid ${({theme}) => theme.colors.hint};
`;

export const Infos = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    margin-top: 32px;
    text-align: center;

    @media(min-width: 500px) {
        margin-top: 0;
        margin-left: 32px;
        text-align: unset;
    }

    > strong {
        font-size: 26px;
    }

    span {
        font-size: 16px;
    }
`;

export const StatsWrapper = styled.div`
    display: flex;
    max-width: min(500px, 100%);
    margin: 32px auto;
`;

export const Stat = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    > strong {
        font-size: 16px;
        margin-bottom: 8px;
    }
`;

const iconsCSS = css`
    width: 22px;
    height: 22px;
    color: ${({theme}) => theme.colors.title};
`;

export const StarIcon = styled(StarFill)`
    ${iconsCSS};
`;

export const ForkIcon = styled(RepoForked)`
    ${iconsCSS};
`;

export const OpenedIssueIcon = styled(IssueOpened)`
    ${iconsCSS};
`;

export const IssuesList = styled.div`

`;