import React from "react"
import logo from "./assets/logo.png"
/*
 * Connect2ic provides essential utilities for IC app development
 */
import { createClient } from "@connect2ic/core"
import { defaultProviders } from "@connect2ic/core/providers"
import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react"
import "@connect2ic/core/style.css"
/*
 * Import canister definitions like this:
 */
import * as token from "../.dfx/local/canisters/token"
/*
 * Some examples to get you started
 */
import { Profile } from "./components/Profile"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Faucet from "./components/Faucet"
import Balance from "./components/Balance"
import Transfer from "./components/Transfer"

function App(props) {
  return (
    <div className="bg-[#030014]">
      <ConnectDialog />
      <div className="w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <div className="h-auto w-auto flex flex-row items-center cursor-pointer">
            <a href="/">
              <img
                src={logo}
                alt="logo"
                width={90}
                height={90}
                className="cursor-pointer hover:animate-slowspin py-2"
              />
            </a>
            <span className="font-bold ml-[10px] hidden md:block text-gray-300">
              Waste2Earn
            </span>
          </div>

          <div className="h-full flex flex-row items-center justify-between md:mr-20">
            <div className="flex gap-5 items-center justify-center w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[30px] py-[10px] rounded-full text-gray-200">
              <a href="#connect" className="cursor-pointer">
                About
              </a>
              <a href="#connect" className="cursor-pointer">
                Blog
              </a>
              <a href="#connect" className="cursor-pointer">
                Market
              </a>
              <a href="#connect" className="cursor-pointer">
                News
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <button className=""><ConnectButton /> </button>
          </div>

        </div>
      </div>
      <Hero />
      <p className="examples-title">
        Examples
      </p>
      <div className="examples">
        <Header />
        <Faucet userPrincipal={props.loggedInPrincipal} />
        <Profile />
        <Balance />
        <Transfer />
      </div>
      <Footer />

    </div>
  )
}

const client = createClient({
  canisters: {
    token,
  },
  providers: defaultProviders,
  globalProviderConfig: {
    dev: import.meta.env.DEV,
  },
})

export default () => (
  <Connect2ICProvider client={client}>
    <App />
  </Connect2ICProvider>
)
