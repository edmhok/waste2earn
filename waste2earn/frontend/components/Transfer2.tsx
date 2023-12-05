import React from "react"
import { useWallet, useTransfer } from "@connect2ic/react"

const Transfer2 = () => {

  const [wallet] = useWallet()
  const [transfer] = useTransfer({
    to: "5ac391813c15e6849d6d05d8c95732c79b49d20b9e2ed8e62f86d95a20d21961",
    amount: Number(0.01),
  })

  const onPurchase = async () => {
    const { height } = await transfer()
  }

  return (
    <div className="window white absolute z-10">
      {wallet ? (
        <>
          <p>Choose your option</p>
          <button className="connect-button" onClick={onPurchase}>Purchase</button>
        </>
      ) : (
        <p className="example-disabled">Connect with a wallet to access this example</p>
      )}
    </div>
  )
}

export { Transfer2 }
