// import UserAvatar from '../../src/assets/UserAvatar.png'
import {Button} from "@chakra-ui/react";
import styled from "@emotion/styled";
import {useState} from "react";

const Wrap = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 1rem 0;
`

export default function User() {
    const [address, setAddress] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [chainID, setChainID] = useState(undefined)
    const [balance, setBalance] = useState(0)
    // const [tokenTx, setTokenTx] = useState([])

    // const BSC_APIKEY = 'C8DVY3VCSKTFFBXTD11K712YP9T3GYT4PX'
    // const apiUrl = `https://api.bscscan.com/api?module=account&action=balance&address=${address}&tag=latest&apikey=${BSC_APIKEY}` // account balance
    // const testnetApiUrl = `https://api-testnet.bscscan.com/api?module=account&action=balance&address=${address}&tag=latest&apikey=${BSC_APIKEY}` // test net account balance

    // if(typeof window?.ethereum !== "undefined" && typeof address === 'undefined')

    // const handleClick = async () => {
    //     if(window?.ethereum){
    //         setIsLoading(true)
    //         const { eth } = web3
    //         const address = await eth.getCoinbase(); // coinbase gets the users address
    //         setChainID(await eth.getChainId())
    //         setAddress(address)
    //         const ethBalance = await eth.getBalance(address) // get balance gets the users current balance
    //         setBalance(parseFloat(web3.utils.fromWei(ethBalance)).toFixed(2))
    //         setIsLoading(false)
    //         // const testAddress = '0x72750c3036aaad52fc4c9cf0a4fff36fa11db372'
    //         // const addressTokens = `https://api.bscscan.com/api?module=account&action=tokentx&address=${testAddress}&sort=desc&apikey=${BSC_APIKEY}`
    //         // axios.get(addressTokens).then(async ({ data : { result } }) => {
    //         //     console.log({ result })
    //         //     // setTokenTx(result)
    //         // })
    //     }
    //     else alert('No Ethereum Provider')
    // }

    return (
        <Wrap>
            {/* Wallet Address */}
            <Button borderRadius="4rem">
                {!address ? 'Connect Wallet' : 'Wallet Connected'}
            </Button>
        </Wrap>
    );
}
