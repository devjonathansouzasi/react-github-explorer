import React, {memo} from 'react';

import useThemeContext from "hooks/useThemeContext";

import { 
    Container,
    TitleWrapper,
    ToggleThemeButton,
    CompassIcon,
    SunIcon,
    MoonIcon,
    Title,
    BackButton,
    BackIcon
} from './styles';

interface Props{
    goBack?: () => void; 
}

const Header: React.FC<Props> = ({goBack}) => {
    const {theme, toggleTheme} = useThemeContext();

    return (
        <Container>
            <TitleWrapper>
                <ToggleThemeButton title="Toggle theme" onClick={() => toggleTheme()}>
                <CompassIcon/>
                {theme?.title === "light" ? <SunIcon/> : <MoonIcon/>}
                </ToggleThemeButton>
                <Title to="/">Github Explorer</Title>
            </TitleWrapper>
            {!!goBack && 
                <BackButton onClick={goBack}>
                    <BackIcon/>
                    <span>Voltar</span>
                </BackButton>}
        </Container>
    );
}

export default memo(Header);