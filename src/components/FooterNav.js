import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";
import { FiHome, FiSearch, FiSettings, FiBell } from "react-icons/fi";

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
`
const fontSize = 30

export default function FooterNav() {
    return (
        <FooterWrap>
            <IconsWrap>
                <FiHome style={{cursor: "pointer"}} size={fontSize} />
                <FiSearch style={{cursor: "pointer"}} size={fontSize} />
                <FiBell style={{cursor: "pointer"}}  size={fontSize} />
                <FiSettings style={{cursor: "pointer"}}  size={fontSize} />
            </IconsWrap>
        </FooterWrap>
    );
}
