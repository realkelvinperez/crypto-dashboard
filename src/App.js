import {useEffect, useState} from 'react'
import { Global, css } from "@emotion/react";
import VConsole from "vconsole";
import Web3 from "web3";
// import Web3Modal from "web3modal";

import {
    Box,
    Button,
    Container,
    Flex,
    Heading
} from "@chakra-ui/react";

function App() {
    const [address, setAddress] = useState('')
    // eslint-disable-next-line no-unused-vars
    const [accounts, setAccounts] = useState('')
    const [chainID, setChainID] = useState('')
    const [web3, setWeb3] = useState(null)

    const handleClick = async () => {
        if(window?.ethereum){
            setWeb3(new Web3(window.ethereum))
            setChainID(await web3.eth.chainId)
            setAccounts(await web3.eth.getAccounts())
            const address = await web3.eth.getAccounts()
            setAddress(address[0])
            console.log(accounts)
        }
        else alert('No Ethereum Provider')
    }

    useEffect(() => {
        if(window) {
            console.log({chainID, web3, accounts})
            if(!VConsole) new VConsole()
        }

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
