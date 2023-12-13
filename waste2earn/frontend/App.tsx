import React from "react"
/*
 * Connect2ic provides essential utilities for IC app development
 */
import { createClient } from "@connect2ic/core"
import { defaultProviders } from "@connect2ic/core/providers"
import { ConnectDialog, Connect2ICProvider } from "@connect2ic/react"
import "@connect2ic/core/style.css"
/*
 * Import canister definitions like this:
 */
import * as token from "../.dfx/ic/canisters/token"
/*
 * Some examples to get you started
 */
import { Profile } from "./components/Profile"
import { Transfer2 } from "./components/Transfer2"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Faucet from "./components/Faucet"
import Balance from "./components/Balance"
import Transfer from "./components/Transfer"
import Encryption from "./components/Encryption"
import StarsCanvas from "./components/StarBackground"
import Navbar from "./components/Navbar"

function App(props: { loggedInPrincipal: string }) {
  return (
    <div className="bg-[#030014]">
      <ConnectDialog />
      <Navbar />
      <Hero />
      <Profile />
      <Transfer2 />

      <div className="flex flex-col">
        <Faucet userPrincipal={props.loggedInPrincipal} />
        <Balance />
        <Transfer />
      </div>
      <Encryption />
      <StarsCanvas />
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
    <App loggedInPrincipal={""} />
  </Connect2ICProvider>
)
