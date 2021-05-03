import { useEffect } from 'react'
import { Global, css } from "@emotion/react";
import VConsole from "vconsole";
import Header from "./components/Nav";
import { useSelector } from 'react-redux'
import { Container } from "@chakra-ui/react";

const selectAddress = state => state.user.address;

export default function App() {

    const address = useSelector(selectAddress)

    useEffect(() => {
        if(typeof VConsole !== "undefined") new VConsole()
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

          <Header />

          <Container as="main">

              { address ? address : 'Connect wallet to see address' }

          </Container>


      </>
  );
}


