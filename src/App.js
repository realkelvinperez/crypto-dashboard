import { useEffect } from 'react'
import { Global, css } from "@emotion/react";
import VConsole from "vconsole";
import Header from "./components/Nav";
import { Container } from "@chakra-ui/react";
import FooterNav from "./components/FooterNav";
import TopTen from "./components/TopTen";
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
                     }
                `
              }
          />

          <Header />

          <Router>
              <Container as="main">
                 <Switch>
                     <Route path="/search">
                         <div>Search</div>
                     </Route>
                     <Route path="/alerts">
                         <div>Alerts</div>
                     </Route>
                     <Route path="/settings">
                         <div>Settings</div>
                     </Route>
                     <Route path="/">
                         <TopTen />
                     </Route>
                 </Switch>
              </Container>
              <FooterNav />
          </Router>
      </>
  );
}


