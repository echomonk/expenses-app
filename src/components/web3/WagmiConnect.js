import React from "react";
import { useConnect } from "wagmi";
import "./WagmiConnect.css";

const WagmiConnect = () => {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  return (
    <div className="wagmi-connect">
      {connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          Connect to: {connector.name}
          {!connector.ready && " (unsupported)"}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            " (connecting)"}
        </button>
      ))}
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default WagmiConnect;
