import {Box, Heading, Text, Flex, Spacer, useColorMode} from "@chakra-ui/react";
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
  display: flex;
  ${props => !props.isPositive && css`
    transform: rotate(180deg);
  `}
`

export default function LongCard({name, ticker, percentChange, price, color, isPositive}) {
    const { colorMode } = useColorMode()
    return (
        <Wrapper themeMode={colorMode}>
            <Flex paddingX={10}>
                <Box>
                    <Heading size="lg">{ name && name }</Heading>
                    <Text fontSize="md" color="gray.400">{ticker && ticker }</Text>
                </Box>
                <Spacer />
                <Flex direction="column">
                    <Flex align="center" justify="center">
                        <Triangle isPositive={isPositive}>
                            <TriangleFill size={15} color={color} />
                        </Triangle>
                        <Heading color={color} align="right" size="lg" marginLeft={2}>
                            {percentChange && percentChange + "%"}
                        </Heading>
                    </Flex>
                    <Box>
                        <Text color="gray.400" fontSize="md" align="right">
                            { price && price }
                        </Text>
                    </Box>
                </Flex>
            </Flex>
            <UnderLine color={color} />
        </Wrapper>
    );
}
