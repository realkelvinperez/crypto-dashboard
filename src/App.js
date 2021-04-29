import {useEffect, useState} from 'react'
import { Global, css } from "@emotion/react";
import VConsole from "vconsole";
import Web3 from "web3";
// import Web3Modal from "web3modal";

// 56 - BSC Main Net
// 97 - BSC Test Net

import {
    Box,
    Button,
    Container,
    Flex,
    Heading
} from "@chakra-ui/react";

function App() {
    const [address, setAddress] = useState(null)
    const [accounts, setAccounts] = useState(null)
    const [chainID, setChainID] = useState(null)
    // const [balance, setBalance] = useState(null)
    const [web3, setWeb3] = useState(null)

    const handleClick = async () => {
        if(window?.ethereum){
            const address = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setChainID(await web3.eth.getChainId())
            setAccounts(await web3.eth.getAccounts())
            setAddress(address[0])
            console.log(accounts)
        }
        else alert('No Ethereum Provider')
    }

    useEffect(() => {
        if(typeof window !== "undefined") {
            setWeb3(new Web3(window.ethereum))
            if(typeof VConsole !== "undefined") new VConsole()
            if (typeof window.ethereum !== 'undefined') {
                console.log('MetaMask is installed!');
            }
        }

    },[])

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
                  <Heading as="h3" size="sm">Chain Id</Heading>
                  <Box>{chainID}</Box>
                  {/*<Heading as="h3" size="sm">Balance</Heading>*/}
                  {/*<Box>{balance}</Box>*/}
              </Flex>
          </Container>
      </>
  );
}

export default App;
