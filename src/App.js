import {useEffect, useState} from 'react'
import { Global, css } from "@emotion/react";
import VConsole from "vconsole";

import {
    Box,
    Button,
    Container,
    Flex,
    Heading
} from "@chakra-ui/react";

function App() {
    const [address, setAddress] = useState('')
    const [accounts, setAccounts] = useState('')

    const handleClick = async () => {
        if(window?.ethereum){
            const accounts = await window.ethereum.send('eth_requestAccounts')
            setAccounts(accounts)
            setAddress(accounts.result[0])
        }
        else alert('No Ethereum Provider')
    }

    useEffect(() => {
        if(window) new VConsole();
    })

  return (
      <>
          <Global
              styles={
                  css`
                     body, #__next, #__next div {
                       min-height: 100vh;
                       min-height: -webkit-fill-available;
                     }
                `
              }
          />
          <Container as="main">
              <Flex
                  direction={'column'}
                  alignItems={'center'}
                  justifyContent={'center'}
              >
                  <Heading marginY={1}>ViViFi Capital</Heading>
                  <Heading as="h3" size="sm">Dashboard</Heading>

                  <Button marginY={4} onClick={handleClick}>
                      {!address ? 'Connect Wallet' : 'Wallet Connected'}
                  </Button>

                  <Heading as="h3" size="sm">Account Address</Heading>
                  <Box>{address}</Box>
              </Flex>
          </Container>
      </>
  );
}

export default App;
