import { useEffect } from 'react'
import { Global, css } from "@emotion/react";
import VConsole from "vconsole";
import Header from "./components/Nav";
import { Container } from "@chakra-ui/react";
import FooterNav from "./components/FooterNav";
import Top20 from "./components/Top20";
import Search from "./components/Search";
import Alerts from "./components/Alerts";
import Settings from "./components/Settings";
import Portfolio from "./components/Portfolio";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

export default function App() {

    useEffect(() => {
        // Only show in development mode
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
                      cursor: pointer;
                      background: #AA32FF !important;
                     }
                `
              }
          />

              <Router>
                  <Header />
                  <Container as="main">
                     <Switch>
                         <Route path="/search" component={Search} />
                         <Route path="/alerts" component={Alerts} />
                         <Route path="/settings" component={Settings} />
                         <Route path="/portfolio" exact component={Portfolio} />
                         <Route path="/" exact component={Top20} />
                     </Switch>
                  </Container>
                  <FooterNav />
              </Router>
      </>
  );
}


