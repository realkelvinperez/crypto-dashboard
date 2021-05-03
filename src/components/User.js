import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { updateProvider } from "../redux/actions/user.actions";
import { ethers } from "ethers";
import web3 from 'web3'

const Wrap = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 1rem 0;
`

const selectAddress = state => state.user.address

export default function User() {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const address = useSelector(selectAddress)

    const handleClick = async () => {
        // debugger;
        if(typeof window?.ethereum !== "undefined") {
            const { utils } = web3
            setIsLoading(true)
            await window.ethereum.request({method: "eth_requestAccounts"})
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner(0)
            dispatch(updateProvider(provider))
            console.log('Set web3', { provider })
            const signerBalance = await signer.getBalance()
            const floatBalance = parseFloat(utils.fromWei(signerBalance.toString())).toFixed(2)
            const signerAddress = await signer.getAddress()
            // console.log(floatBalance, signerAddress)
            setIsLoading(false)
        }

        // const address = await signer.getAddress();
        // dispatch(updateAddress(address[0]))
        // const userChainId = await signer.getChainId()
        // dispatch(updateChainId(userChainId))
        // const ethBalance = await signer.getBalance()
        // const formatBalance = parseFloat(provider.utils.fromWei(ethBalance)).toFixed(2)
        // dispatch(updateBalance(formatBalance))
        // setIsLoading(false)

        else alert('No Ethereum Provider')
    }

    return (
        <Wrap>
            <Button isLoading={isLoading} borderRadius="4rem" onClick={handleClick}>
                {!address ? 'Connect Wallet' : 'Wallet Connected'}
            </Button>
        </Wrap>
    );
}

// const [tokenTx, setTokenTx] = useState([])

// const BSC_APIKEY = 'C8DVY3VCSKTFFBXTD11K712YP9T3GYT4PX'
// const apiUrl = `https://api.bscscan.com/api?module=account&action=balance&address=${address}&tag=latest&apikey=${BSC_APIKEY}` // account balance
// const testnetApiUrl = `https://api-testnet.bscscan.com/api?module=account&action=balance&address=${address}&tag=latest&apikey=${BSC_APIKEY}` // test net account balance

// if(typeof window?.ethereum !== "undefined" && typeof address === 'undefined')

// const testAddress = '0x72750c3036aaad52fc4c9cf0a4fff36fa11db372'
// const addressTokens = `https://api.bscscan.com/api?module=account&action=tokentx&address=${testAddress}&sort=desc&apikey=${BSC_APIKEY}`
// axios.get(addressTokens).then(async ({ data : { result } }) => {
//     console.log({ result })
//     // setTokenTx(result)
// })
