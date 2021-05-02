import {useEffect, useState} from 'react'
import { Global, css } from "@emotion/react";
import VConsole from "vconsole";
import Web3 from "web3";
import Nav from "./components/Nav";
import { useDispatch } from 'react-redux'
import { updateProvider } from "./redux/actions/user.actions";

import {
    Container,
} from "@chakra-ui/react";

export default function App() {
    const dispatch= useDispatch()

    useEffect(() => {
        if(typeof window?.ethereum !== "undefined") {
            const provider = new Web3(window.ethereum)
            dispatch(updateProvider(provider))
            console.log('Set web3', { provider })
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
              <Nav />
              <Container as="main" css={css`
                height: 100vh;
              `}>
                  Center
              </Container>
      </>
  );
}
