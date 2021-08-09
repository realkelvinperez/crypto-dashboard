import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { updateProvider } from "../redux/actions/user.actions";
import { ethers } from "ethers";
import web3 from 'web3'
import { useHistory } from "react-router-dom"
import {
    updateAddress,
    updateChainId,
    updateBalance,
    updateSigner
} from "../redux/actions/user.actions";

const Wrap = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 1rem 0;
`

const UserButton = styled(Button)`
`

const selectAddress = state => state.user.address

export default function User() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const [isUserConnected, setUserConnected] = useState(false)
    const address = useSelector(selectAddress)

    const handleClick = async (history) => {
        if(isUserConnected) return history.push('/portfolio')
        if(typeof window.ethereum !== "undefined" && !isUserConnected) {

            setIsLoading(true)
            const { ethereum } = window
            const { utils } = web3

            await ethereum.request({ method: "eth_requestAccounts" })

            const provider = new ethers.providers.Web3Provider(ethereum)
            dispatch(updateProvider(provider))

            const signer = provider.getSigner(0)
            dispatch(updateSigner(signer))

            const userChainId = await signer.getChainId()
            dispatch(updateChainId(userChainId))

            const signerBalance = await signer.getBalance()
            const floatBalance = parseFloat(utils.fromWei(signerBalance.toString())).toFixed(2)
            dispatch(updateBalance(floatBalance))

            const signerAddress = await signer.getAddress()
            dispatch(updateAddress(signerAddress))

            console.log({signerAddress, floatBalance})
            history.push('/portfolio')
            // change router to portfolio and display all the users assets
            setUserConnected(true)
            setIsLoading(false)
        }

        else alert('No Ethereum Provider')
    }

    const truckAddress = (signerAddress) => {
        const first4 = signerAddress.substr(0, 4)
        const last4 = signerAddress.substr(-4, 4)
        return `${first4}...${last4}`
    }

    return (
        <Wrap>
            <UserButton isLoading={isLoading} borderRadius="4rem" onClick={() => handleClick(history)}>
                {!address ? 'Connect Wallet' : truckAddress(address)}
            </UserButton>
        </Wrap>
    );
}

// const BSC_APIKEY = 'C8DVY3VCSKTFFBXTD11K712YP9T3GYT4PX'
// const apiUrl = `https://api.bscscan.com/api?module=account&action=balance&address=${address}&tag=latest&apikey=${BSC_APIKEY}` // account balance
// const testnetApiUrl = `https://api-testnet.bscscan.com/api?module=account&action=balance&address=${address}&tag=latest&apikey=${BSC_APIKEY}` // test net account balance

// const testAddress = '0x72750c3036aaad52fc4c9cf0a4fff36fa11db372'
// const addressTokens = `https://api.bscscan.com/api?module=account&action=tokentx&address=${testAddress}&sort=desc&apikey=${BSC_APIKEY}`
// axios.get(addressTokens).then(async ({ data : { result } }) => {
//     console.log({ result })
//     // setTokenTx(result)
// })
