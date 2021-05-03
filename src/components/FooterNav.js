import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";
import { FiHome, FiSearch, FiSettings, FiBell } from "react-icons/fi";
import {Link} from 'react-router-dom'

const FooterWrap = styled.div`
  padding: 1rem;
  position: fixed;
  width: 100%;
  bottom: 0;
`

const IconsWrap = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #EAF0F6;
  padding: 1rem;
  border-radius: 60px;
  box-shadow: 0px 0px 20px 0px #bcbaba;
`
const fontSize = 30

export default function FooterNav() {
    return (
        <FooterWrap>
            <IconsWrap>
                <Link to="/">
                    <FiHome style={{cursor: "pointer"}} size={fontSize} />
                </Link>
                <Link to="/search">
                    <FiSearch style={{cursor: "pointer"}} size={fontSize} />
                </Link>
                <Link to="/alerts">
                    <FiBell style={{cursor: "pointer"}}  size={fontSize} />
                </Link>
                <Link to="settings">
                    <FiSettings style={{cursor: "pointer"}}  size={fontSize} />
                </Link>
            </IconsWrap>
        </FooterWrap>
    );
}
