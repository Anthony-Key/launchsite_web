import DonationQRCode from "@/components/Donation";
import React, { useEffect, useState } from "react";
import { Client } from "xrpl";
import Rocket from "../../public/rocket-svgrepo-com.svg";
import Twitter from "../../public/twitter-color-svgrepo-com.svg";
import Moon from "../../public/moon-svgrepo-com.svg";
import Image from "next/image";
import ChartComponent from "@/components/Chart";
import Speaker from "../../public/speaker-2-svgrepo-com.svg";
import axios from "axios";
import { Crypto, Player } from "../types/types";
import PlayerSpawner from "@/components/PlayerSpawner";
import Login from "@/components/Login";

export default function Home() {
  useEffect(() => {
    const client = new Client("wss://xrplcluster.com/"); // Replace with the appropriate WebSocket server

    const subscribeToTransactions = async () => {
      await client.connect();

      const response = await client.request({
        command: "account_info",
        account: "rJUG3PqxaDpwKNcfrS3bhni4Rub2nb1azi",
        ledger_index: "validated",
      });

      console.log(response);
    };

    subscribeToTransactions();
    return () => {
      client.disconnect();
    };
  }, []);

  const [prices, setCurrentPrices] = useState<Crypto[]>();
  const [players, setPlayers] = useState<Player[]>();

  const cryptoPricesUrl =
    "https://cryptopriceapi.azurewebsites.net/CryptoPrices";
  const cryptoPlayersUrl = "https://cryptopriceapi.azurewebsites.net/Players";

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     axios
  //       .get<Crypto[]>(cryptoPricesUrl)
  //       .then((response) => {
  //         console.log(response.data);
  //         setCurrentPrices(response.data);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [setCurrentPrices]);

  useEffect(() => {
    axios
      .get<Player[]>(cryptoPlayersUrl)
      .then((response) => {
        console.log(response.data);
        setPlayers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const color =
    "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-sky-950 from-gray-800";

  return (
    <div className={`${color} `}>
      <div>
        <ChartComponent />
      </div>

      <Login></Login>
      {players?.map((a) => (
        <div key={a.name}>
          <PlayerSpawner name={a.name} wallet={a.wallet}></PlayerSpawner>
        </div>
      ))}

      <div className="flex">
        <div className="absolute top-4 left-10 w-auto h-auto bg-blue-900 rounded-3xl p-3 bg-opacity-30 hover:bg-blue-800 cursor-pointer">
          <Image
            src={Speaker}
            width={20}
            height={20}
            alt="twitter redirect"
          ></Image>
        </div>
        <div className="absolute top-4 left-24 w-auto h-auto bg-blue-900 rounded-3xl p-3 bg-opacity-30 hover:bg-blue-800 cursor-pointer">
          <Image
            src={Twitter}
            width={20}
            height={20}
            alt="twitter redirect"
          ></Image>
        </div>
      </div>
      <div className="absolute bottom-0 left-3 w-auto h-auto rounded-3xl p-3 bg-opacity-30">
        <Image width={30} height={30} alt="" src={Rocket}></Image>
      </div>

      <div className="absolute -top-[100px] -right-24 transform h-auto rounded-3xl">
        <Image
          src={Moon}
          width={500}
          height={300} // Adjust the height value as needed
          alt="moon"
        />
      </div>

      <div className="absolute bottom-4 right-4 w-1/5 h-auto bg-blue-900 rounded-3xl p-3 bg-opacity-30 inline-flex">
        <DonationQRCode />
        <div className="ml-5">
          <h1>Support me</h1>
          <h2 className="text-gray-400">
            Helping out means a lot! Your donation will appear for everyone to
            see! <span className="text-white font-bold">Scan Xumm</span> /{" "}
            <span
              onClick={() => {
                navigator.clipboard.writeText(
                  "rKBgZMPdvhEmXYbetGJaoKHPwyWArvQETY"
                );
                alert("Copied");
              }}
              className="text-white font-bold underline cursor-pointer"
            >
              Copy Wallet
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}
