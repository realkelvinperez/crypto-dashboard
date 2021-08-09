import { Box, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
import User from "./User";

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`

const Title = styled(Heading)`
    background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default function Header() {
    return (
        <HeaderWrap>
            <Box>
                <Title
                    size='lg'
                >
                    Crypto Portfolio
                </Title>
            </Box>
            <User />
        </HeaderWrap>
    );
}
