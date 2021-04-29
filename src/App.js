import {useEffect, useState} from 'react'
import { Global, css } from "@emotion/react";
import VConsole from "vconsole";
import Web3 from "web3";
// import axios from "axios"

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
    const [balance, setBalance] = useState(0)
    const [web3, setWeb3] = useState(null)

    // const [isLoading, setLoading] = useState(true)
    // const BSC_APIKEY = 'C8DVY3VCSKTFFBXTD11K712YP9T3GYT4PX'
    // const apiUrl = `https://api.bscscan.com/api?module=account&action=balance&address=${address}&tag=latest&apikey=${BSC_APIKEY}`
    // const testnetApiUrl = `https://api-testnet.bscscan.com/api?module=account&action=balance&address=${address}&tag=latest&apikey=${BSC_APIKEY}`
    // axios.get(testnetApiUrl).then(async ({ data }) => {
    //     console.log({data})
    // })
    // const userBalance = web3.utils.fromWei(ethBalance)

    const handleClick = async () => {
        if(window?.ethereum){
            const { eth } = web3
            const address = await eth.getCoinbase(); // coinbase gets the users address
            setChainID(await eth.getChainId())
            setAccounts(await eth.getAccounts())
            setAddress(address)
            const ethBalance = await eth.getBalance(address) // get balance gets the users current balance
            debugger;
            setBalance(parseFloat(web3.utils.fromWei(ethBalance)).toFixed(2))
            console.log({ethBalance})
        }
        else alert('No Ethereum Provider')
    }

    useEffect(() => {
        if(typeof window?.ethereum !== "undefined") {
            setWeb3(new Web3(window.ethereum))
            console.log('Set web3')
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
                       height: -webkit-fill-available;
                       min-height: -webkit-fill-available;
                       min-height: 100%;
                       @media (min-height: 768px){
                          min-height: 100%;
                          height: 100%;
                       }
                     }
                `
              }
          />
          <Container as="main" css={css`
            height: 100vh;
          `}>
              <Flex
                  direction={'column'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  css={css`
                    height: 100%;
                  `}
              >
                  <Heading marginY={1}>ViViFi Capital</Heading>
                  <Heading as="h3" size="sm">Dashboard</Heading>

                  <Button marginY={4} onClick={handleClick}>
                      {!address ? 'Connect Wallet' : 'Wallet Connected'}
                  </Button>

                  <Heading as="h3" size="sm">Address</Heading>
                  <Box>{address}</Box>
                  <Heading as="h3" size="sm">Blockchain</Heading>
                  {chainID === 56 && (<Box>Binance Mainnet Chain</Box>)}
                  {chainID === 97 && (<Box>Binance Testnet Chain</Box>)}
                  <Heading as="h3" size="sm">Balance</Heading>
                  <Box>{balance}</Box>
              </Flex>
          </Container>
      </>
  );
}

export default App;
