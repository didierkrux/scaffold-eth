import React from "react";

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 **/
function Home() {
  // you can also use hooks locally in your component of choice
  // in this case, let's keep track of 'purpose' variable from our contract

  return (
    <div style={{ height: "900px", maxWidth: "1200px", margin: "auto" }}>
      <iframe
        id="bankless-academy"
        src="https://app.banklessacademy.com/lessons/wallet-basics?embed=demo"
        frameborder="0"
        style={{ width: "100%", height: "100%" }}
        title="Bankless Academy"
      ></iframe>
    </div>
  );
}

export default Home;
