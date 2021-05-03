import { Box, Heading, Text, Flex, Spacer } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { BsFillTriangleFill } from "react-icons/bs"
import { css } from "@emotion/react";

const Wrapper = styled(Box)`
  background: #EAF0F6;
  border-radius: 60px;
  padding: 1rem .5rem;
  position: relative;
  margin-bottom: 1.5rem;
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

export default function LongCard({name, ticker, percentChange, price, color, isPositive}) {
    return (
        <Wrapper>
            <Flex paddingX={10}>
                <Box>
                    <Heading size="lg">{ name && name }</Heading>
                    <Text fontSize="md" color="#737373">{ticker && ticker }</Text>
                </Box>
                <Spacer />
                <Flex direction="column">
                    <Flex align="center" justify="center">
                        <Triangle isPositive={isPositive}>
                            <BsFillTriangleFill color={color} />
                        </Triangle>
                        <Heading color={color} align="right" size="lg" marginLeft={2}>
                            {percentChange && percentChange + "%"}
                        </Heading>
                    </Flex>
                    <Box>
                        <Text color="#737373" fontSize="md" align="right">
                            { price && price }
                        </Text>
                    </Box>
                </Flex>
            </Flex>
            <UnderLine color={color} />
        </Wrapper>
    );
}
