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
  background: rgb(252,0,255);
  background: linear-gradient(9deg, rgba(252,0,255,1) 0%, rgba(0,219,222,1) 100%);
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
                    Twerk Finance
                </Title>
            </Box>
            <User />
        </HeaderWrap>
    );
}
