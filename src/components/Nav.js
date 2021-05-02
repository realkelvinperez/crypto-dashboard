import {Box, Heading} from "@chakra-ui/react";
import styled from "@emotion/styled";
import User from "./User";

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`

export default function Nav(props) {
    return (
        <nav>
            <NavBar>
                <Box>
                    <Heading>ViViFi</Heading>
                </Box>
                <User />
            </NavBar>
        </nav>
    );
}
