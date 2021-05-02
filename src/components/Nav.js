import {Box, Heading} from "@chakra-ui/react";
import styled from "@emotion/styled";
import User from "./User";

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`

export default function Nav() {
    return (
        <nav>
            <NavBar>
                <Box>
                    <Heading size='md'>ViViFi.Capital</Heading>
                </Box>
                <User />
            </NavBar>
        </nav>
    );
}
