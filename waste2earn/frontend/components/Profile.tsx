import React from "react"
import { useBalance, useWallet } from "@connect2ic/react"

const Profile = () => {

  const [wallet] = useWallet()
  const [assets] = useBalance()

  return (
    <div className="window white absolute z-10">
      {wallet ? (
        <>
          <p>Wallet address: <span style={{ fontSize: "0.7em" }}>{wallet ? wallet.principal : "-"}</span></p>
          <table>
            <tbody>
              {assets && assets.map(asset => (
                <tr key={asset.canisterId}>
                  <td>
                    {asset.name}
                  </td>
                  <td>
                    {asset.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p className="example-disabled">Connect with a wallet to access this example</p>
      )}
    </div>
  )
}

export { Profile }
