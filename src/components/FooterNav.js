import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Home, Search, Settings, Bell } from "@emotion-icons/feather";
import { Link } from 'react-router-dom'
import { EmotionIconBase } from '@emotion-icons/emotion-icon'
import {useColorMode} from "@chakra-ui/react";

const FooterWrap = styled.div`
  padding: 1rem;
  position: fixed;
  width: 100%;
  bottom: 0;
`

const IconsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  border-radius: 60px;
  ${props => props.themeMode === 'light' && css`
    background: #EDF2F7;
    box-shadow: 0 0 5px 0 #c1c4c7;
  `}
  ${props => props.themeMode === 'dark' && css`
    background: #2D3748;
    box-shadow: 0 0 5px 0 #5b6f90;
  `}
  & a ${EmotionIconBase} {
    cursor: pointer;
    stroke-width: 1.5px;
  }
`

export default function FooterNav() {
    const { colorMode } = useColorMode()
    const fontSize = 30;
    return (
        <FooterWrap>
                <IconsWrap themeMode={colorMode}>
                    <Link to="/">
                        <Home size={fontSize}/>
                    </Link>
                    <Link to="/search">
                        <Search size={fontSize}/>
                    </Link>
                    <Link to="/alerts">
                        <Bell size={fontSize} />
                    </Link>
                    <Link to="settings">
                        <Settings size={fontSize}/>
                    </Link>
                </IconsWrap>
        </FooterWrap>
    );
}
