import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Login() {
  const [username, setUsername] = useState<string>();
  const [wallet, setWallet] = useState<string>();
  const [showLogin, setShowLogin] = useState<boolean>(true);
  const cryptoPlayersUrl = "https://cryptopriceapi.azurewebsites.net/Players";

  const handleConnect = () => {
    const payload = {
      Name: username,
      WalletAddress: wallet,
    };

    axios
      .post(cryptoPlayersUrl, payload)
      .then((response) => {
        console.log(response.data);
        setShowLogin(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    //check cookie
  }, []);

  return (
    <>
      {showLogin && (
        <div className="w-1/4 h-auto bg-white bg-opacity-5 rounded-3xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex-col items-center justify-center p-5">
            <h1 className="text-2xl font-bold mt-5 mb-3">JOIN LOBBY</h1>
            <h2>Name</h2>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              onChange={(val) => {
                setUsername(val.target.value);
              }}
            />

            <h2 className="mt-3">Wallet</h2>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="wallet"
              type="text"
              placeholder="Wallet (Optional)"
              onChange={(val) => {
                setWallet(val.target.value);
              }}
            />
            <div className="w-full flex justify-end">
              <button
                className="mt-3 shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handleConnect}
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
