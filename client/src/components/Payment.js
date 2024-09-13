import { useState } from "react";
//import { ethers } from "ethers";
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";


const ethers = require("ethers");

const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether)
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

function Payment() {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: data.get("addr")
    });
  };

  return (
    <>
          <div class="col">
              <div class="card">
               <h2 class="mt-4">Payment Instructions</h2>
               <h2 class="doller">To Activate your account and access the RedSpy System Follow the instructions Below.</h2>
                <div class="card-body">
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> Currency will be <strong>USDT</strong>.</p>
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> Wallet Address: .</p>
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> Network: Ethereum (ERC20).</p>
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> Subscription Amount: $300 USDT.</p>
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> Subscription Duration: 12 Months.</p>
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> Device Monitoring: Maximum 5 Devices.</p>
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> Ensure you also have an Ethereum Wallet or a MetaMask web application.</p>
                 <h2 class = "mt-4">Further Instructions:</h2>
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> After Payment send an email to info@redspy.pro.</p>
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> On the email include your transaction ID(TxID) and the email you registered on our platform using.</p>
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> Your account will be activated upon payment confirmation.</p>
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> <strong>Please Note:</strong>.</p>
                 <p class="card-text"><i class="bi bi-arrow-right-circle"></i> <em>Only send Tether (ERC20) assets to this address, other assets will be lost forever</em>.</p>
                 </div>
              </div>
          </div>
                 
    <form className="m-4" onSubmit={handleSubmit}>
      <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">
            Send ETH payment
          </h1>
          <div className="">
            <div className="my-3">
              <input
                type="text"
                name="addr"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Recipient Address"
              />
            </div>
            <div className="my-3">
              <input
                name="ether"
                type="text"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Amount in ETH"
              />
            </div>
          </div>
        </main>
        <footer className="p-4">
          <button
            type="submit"
            className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
          >
            Pay now
          </button>
          <ErrorMessage message={error} />
          <TxList txs={txs} />
        </footer>
      </div>
    </form>
    </>
  );
}
export default Payment;
