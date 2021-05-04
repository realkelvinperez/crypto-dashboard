import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Home, Search, Settings, Bell } from "@emotion-icons/feather";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { EmotionIconBase } from '@emotion-icons/emotion-icon'

const FooterWrap = styled.div`
  padding: 1rem;
  position: fixed;
  width: 100%;
  bottom: 0;
`

const IconsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
  border-radius: 60px;
  ${props => props.themeMode === 'light' && css`
    background: #EDF2F7;
    box-shadow: 0 0 10px 0 #A0AEC0;
  `}
  ${props => props.themeMode === 'dark' && css`
    background: #2D3748;
    box-shadow: 0 0 13px 0 #A0AEC0;
  `}
  & a ${EmotionIconBase} {
    cursor: pointer;
    stroke-width: 1.5px;
  }
`

const selectUserTheme = state => state.user.theme;

export default function FooterNav() {
    const theme = useSelector(selectUserTheme)
    const fontSize = 35;
    return (
        <FooterWrap>
                <IconsWrap themeMode={theme}>
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
