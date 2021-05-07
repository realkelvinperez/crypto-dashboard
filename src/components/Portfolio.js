import {Box, Heading, Stack} from "@chakra-ui/react";
import {useSelector} from "react-redux"
import {useEffect, useState} from "react";
import axios from "axios";
import TokenCard from './TokenCard'

const getSigner = state => state.user.signer
const getBalance = state => state.user.balance
// const getChainId = state => state.user.chainId

export default function Portfolio() {

    const signer = useSelector(getSigner)
    const balance = useSelector(getBalance)
    // const chainId = useSelector(getChainId)
    const [rawTokenBalances, setRawTokenBalances] = useState(undefined)
    const [tokenBalances, setTokenBalances] = useState(undefined)
    const [dollars, setDollars] = useState(undefined)

    const getTokenBalances = async (rawTokenData) => {
        const tokenBalanceAddresses = rawTokenData.map(x => {
            return x.currency.address
        })
            const data = await axios({
                url: `https://graphql.bitquery.io`,
                method: 'post',
                headers: {
                    'X-API-KEY': "BQYrbzLx4lCWYhpfZQc2UL3VTkD63TQO"
                },
                data: {
                    query: `
                        query ($network: EthereumNetwork!, $quoteCurrency: [String!]!) {
                          ethereum(network: $network) {
                            dexTrades(
                              options: {desc: "block.timestamp.time"}
                              exchangeName: {is: "Pancake"}
                              baseCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}
                              quoteCurrency: {in: $quoteCurrency}
                            ) {
                              block {
                                timestamp {
                                  time(format: "%Y-%m-%d %H:%M:%S")
                                }
                              }
                              baseCurrency {
                                symbol
                                address
                              }
                              baseAmount
                              quoteCurrency {
                                symbol
                                address
                              }
                              quoteAmount
                              trades: count
                              quotePrice
                            }
                          }
                        }
                    `,
                    variables: {
                        "network": "bsc",
                        "quoteCurrency": tokenBalanceAddresses
                    }
                }
            })
            debugger;
        console.log(data)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        if(signer){
            const url = `https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd`
            const res = await axios.get(url)
            const { binancecoin : { usd : WBNB } } = res.data;
            const rawBnb = parseFloat((WBNB * balance).toFixed(2))
            const bnbValue = rawBnb.toLocaleString('en')
            setDollars(bnbValue)

            // make request for all token balances
            const rawTokenBalances = await axios({
                url: `https://graphql.bitquery.io`,
                method: 'post',
                headers: {
                 'X-API-KEY': "BQYrbzLx4lCWYhpfZQc2UL3VTkD63TQO"
                },
                data: {
                    query: `
                        query ($network: EthereumNetwork!, $address: String!) {
                          ethereum(network: $network) {
                            address(address: {is: $address}) {
                              balances {
                                value
                                currency {
                                  address
                                  symbol
                                  tokenType
                                }
                              }
                            }
                          }
                        }
                    `,
                    variables: {
                        "limit": 10,
                        "offset": 0,
                        "network": "bsc",
                        "address": await signer.getAddress()
                    }
                }
            })
            const { balances } = rawTokenBalances.data.data.ethereum.address[0]
            setRawTokenBalances(balances)

            // const finalBalances = await getTokenBalances(balances, WBNB)
            setTokenBalances(balances)
        }

    }, [balance, signer])

    return (
        <>
            <Heading size="sm" fontWeight="400" letterSpacing="1px">
                Portfolio Balance
            </Heading>
            <Heading size="2xl">
                ${dollars}
            </Heading>
            <Heading size="md" fontWeight="500" marginBottom={4}>
                {balance} BNB
            </Heading>
            <Heading marginY={4} size="2xl">
                Tokens
            </Heading>
            <Stack marginBottom="5rem">
                {tokenBalances && tokenBalances.map((x,i) => {
                    const {symbol, address} = x.currency
                    const { value } = x;
                   return (
                       <Box key={i}>
                           <TokenCard price={value} ticker={symbol} address={address} />
                       </Box>
                   )
                })}
            </Stack>
        </>
    );
}
