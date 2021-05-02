import {useEffect, useState} from 'react'
import { Global, css } from "@emotion/react";
import VConsole from "vconsole";
import Web3 from "web3";
import axios from "axios"

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
    const [address, setAddress] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [chainID, setChainID] = useState(undefined)
    const [balance, setBalance] = useState(0)
    const [web3, setWeb3] = useState(undefined)
    // const [tokenTx, setTokenTx] = useState([])

    const BSC_APIKEY = 'C8DVY3VCSKTFFBXTD11K712YP9T3GYT4PX'
    // const apiUrl = `https://api.bscscan.com/api?module=account&action=balance&address=${address}&tag=latest&apikey=${BSC_APIKEY}` // account balance
    // const testnetApiUrl = `https://api-testnet.bscscan.com/api?module=account&action=balance&address=${address}&tag=latest&apikey=${BSC_APIKEY}` // test net account balance

    const handleClick = async () => {
        if(window?.ethereum){
            setIsLoading(true)
            const { eth } = web3
            const address = await eth.getCoinbase(); // coinbase gets the users address
            setChainID(await eth.getChainId())
            setAddress(address)
            const ethBalance = await eth.getBalance(address) // get balance gets the users current balance
            setBalance(parseFloat(web3.utils.fromWei(ethBalance)).toFixed(2))
            setIsLoading(false)
            const testAddresss = '0x72750c3036aaad52fc4c9cf0a4fff36fa11db372'
            const addressTokens = `https://api.bscscan.com/api?module=account&action=tokentx&address=${testAddresss}&sort=desc&apikey=${BSC_APIKEY}`
            axios.get(addressTokens).then(async ({ data : { result } }) => {
                console.log({result})
                // setTokenTx(result)
            })
        }
        else alert('No Ethereum Provider')
    }

    useEffect(() => {
        if(typeof window?.ethereum !== "undefined" && typeof address === 'undefined') {
            setWeb3(new Web3(window.ethereum))
            console.log('Set web3')
            if(typeof VConsole !== "undefined") new VConsole()
            if (typeof window.ethereum !== 'undefined') {
                console.log('MetaMask is installed!');
            }
        }

    },[address])

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
                  css={css`
                    height: 100%;
                  `}
              >
                  <Heading marginY={1}>ViViFi Capital</Heading>

                  <Button marginY={4} onClick={handleClick}>
                      {!address ? 'Connect Wallet' : 'Wallet Connected'}
                  </Button>

                  <Heading as="h3" size="sm">Address</Heading>
                  <Box>{address}</Box>
                  <Heading as="h3" size="sm">Blockchain</Heading>
                  {chainID === 56 && (<Box>Binance Mainnet Chain</Box>)}
                  {chainID === 97 && (<Box>Binance Testnet Chain</Box>)}
                  <Heading as="h3" size="sm">Balance</Heading>
                  {!isLoading ? (<Box>{balance} BNB</Box>) : 'Loading...'}
              </Flex>
          </Container>
      </>
  );
}

export default App;
