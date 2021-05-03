import { useEffect } from 'react'
import { Global, css } from "@emotion/react";
import VConsole from "vconsole";
import Header from "./components/Nav";
import { Container } from "@chakra-ui/react";
import FooterNav from "./components/FooterNav";
import TopTen from "./components/TopTen";

export default function App() {

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
                     
                     .vc-switch{
                      right: 20px !important;
                      bottom: 130px !important;
                     }
                `
              }
          />

          <Header />

          <Container as="main">
            <TopTen />
          </Container>

        <FooterNav />
      </>
  );
}


