import {
    Box,
    Heading,
    Text,
    Flex,
    Spacer,
    useColorMode,
    Stack
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { TriangleFill } from "@emotion-icons/bootstrap"
import { css } from "@emotion/react";

const Wrapper = styled.div`
  background: #EAF0F6;
  border-radius: 60px;
  padding: 1rem .5rem;
  position: relative;
  margin-bottom: 1.5rem;
  ${props => props.themeMode === 'light' && css`
    background: #EDF2F7;
  `}
  ${props => props.themeMode === 'dark' && css`
    background: #2D3748;
  `}
`

const UnderLine = styled(Box)`
    width: 75%;
    height: 5px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    ${props => props.color && css`
        background: ${props.color}
    `}
`

const Triangle = styled.div`
  ${props => !props.isPositive && css`
    transform: rotate(180deg);
  `}
`

export default function TokenCard({ticker, price, color, isPositive, bnbValue, dollarValue}) {

    const { colorMode } = useColorMode()

    return (
        <Wrapper themeMode={colorMode}>
            <Flex paddingX={10}>
                <Box>
                    <Heading size="lg">{ ticker || "BLAST"  }</Heading>
                    <Text fontSize="md" color="gray.400">{ bnbValue || "0.00 BNB" } </Text>
                </Box>
                <Spacer />
                <Stack>
                    <Box>
                        <Heading color={color} align="right" size="md" marginLeft={2}>
                            { dollarValue || "$0.00" }
                        </Heading>
                    </Box>
                    <Flex align="center" justify="flex-end">
                        <Triangle isPositive={isPositive}>
                            <TriangleFill color={color} />
                        </Triangle>
                        <Text color="gray.400" fontSize="md" align="right">
                            {/*{percentChange || "2,234%" }*/}
                            { price || "$0.00000024223" }
                        </Text>
                    </Flex>
                </Stack>
            </Flex>
            <UnderLine color={color} />
        </Wrapper>
    );
}
