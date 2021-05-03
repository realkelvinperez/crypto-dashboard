import { Box, Heading, Text, Flex, Spacer } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { BsFillTriangleFill } from "react-icons/bs"

const Wrapper = styled(Box)`
  background: #EAF0F6;
  border-radius: 60px;
  padding: 1rem .5rem;
  position: relative;
`

const UnderLine = styled(Box)`
    width: 75%;
    height: 5px;
    background: #AB2525;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%)
`


export default function LongCard({name, ticker, percentChange, price}) {
    return (
        <Wrapper>
            <Flex paddingX={10}>
                <Box>
                    <Heading size="lg">Bitcoin</Heading>
                    <Text fontSize="md" color="#737373">BTC</Text>
                </Box>
                <Spacer />
                <Flex direction="column">
                    <Flex align="center" justify="center">
                        <BsFillTriangleFill color="#AB2525" />
                        <Heading color="#AB2525" align="right" size="lg" marginLeft={2}>
                            -1.43%
                        </Heading>
                    </Flex>
                    <Box>
                        <Text color="#737373" fontSize="md" align="right">$57,410.00</Text>
                    </Box>
                </Flex>
            </Flex>
            <UnderLine />
        </Wrapper>
    );
}
