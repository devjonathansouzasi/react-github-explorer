import styled, {css} from 'styled-components';

import {Compass} from "@styled-icons/ionicons-sharp";
import { KeyboardArrowLeft } from "@styled-icons/material-rounded"
import {Sun} from "@styled-icons/icomoon";
import {MoonOutline} from "@styled-icons/evaicons-outline";
import { Link } from 'react-router-dom';


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
`;

export const ToggleThemeButton = styled.button`
    position: relative;
    opacity: 0.8;
    transition: all .2s ease-in-out;
    &:hover {
        opacity: 1;
        > svg:first-child {
            fill: ${({theme}) => theme.colors.title};
        }
    };
    & svg:nth-child(2) {
        position: absolute;
        top: -16px;
        left: 26px;
    };
`;

export const CompassIcon = styled(Compass)`
    width: 32px;
    height: 32px;
    fill: ${({theme}) => theme.colors.black};
`;

const themeIndicatorIconCSS = css`
    width: 20px;
    height: 20px;
`;

export const SunIcon = styled(Sun)`
    ${themeIndicatorIconCSS};
    fill: ${({theme}) => theme.colors.sun};
`;
export const MoonIcon = styled(MoonOutline)`
    ${themeIndicatorIconCSS};
    fill: ${({theme}) => theme.colors.moon};
`;

export const Title = styled(Link)`
    margin-left: 8px;
    text-decoration: none;
    color: ${({theme}) => theme.colors.title};
    font-weight: bold;
`;

export const BackButton = styled.button`
    svg,span {
        transition: all .2s ease-in-out;
        color: ${({theme}) => theme.colors.subtitle};
        fill: ${({theme}) => theme.colors.subtitle};
    }
    &:hover {
        svg, span {
            color: ${({theme}) => theme.colors.title};
            fill: ${({theme}) => theme.colors.title};
        }
    };

    > span {
        margin-left: 8px;
        font-weight: bold;
    }
`;

export const BackIcon = styled(KeyboardArrowLeft)`
    width: 24px;
    height: 24px;
`;
