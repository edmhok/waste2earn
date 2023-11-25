import React, { useState } from "react";
import { canisterId, createActor } from "../../src/declarations/token";
import { AuthClient } from "@dfinity/auth-client";

interface Props {
  userPrincipal: string;
}

function Faucet(props: Props) {

  const [isDisabled, setDisable] = useState(false);
  const [buttonText, setText] = useState("Gimme gimme");

  async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setDisable(true);

    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();

    const authenticatedCanister = createActor(canisterId, {
      agentOptions: {
        identity,
      },
    });

    const result = await authenticatedCanister.payOut();
    setText(result);
  }

  return (
    <div className="blue window absolute z-10">
      <h2 className="text-center">
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free Waste2Earn tokens here! Claim 10,000 W2E tokens to {props.userPrincipal}.</label>
      <p className="trade-buttons">
        <button
          id="btn-payout"
          onClick={handleClick}
          disabled={isDisabled}
        >
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
