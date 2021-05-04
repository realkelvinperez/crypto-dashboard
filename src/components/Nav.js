import { Box, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
import User from "./User";

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`

export default function Header() {
    return (
        <HeaderWrap>
            <Box>
                <Heading
                    size='lg'
                    color="#21A142"
                >
                    ViViFi.Capital
                </Heading>
            </Box>
            <User />
        </HeaderWrap>
    );
}
