import React from "react";
import ReactDOM from "react-dom";
import { DAppProvider, useEthers, useContractFunction } from "@usedapp/core";
import { utils } from "ethers";
import { Contract } from "@ethersproject/contracts";
import gameAbi from "../abis/Game";
import { Button, ButtonGroup, Text } from "@chakra-ui/react";
// import { WethAbi, WETH_ADDRESSES, SUPPORTED_TEST_CHAINS } from './constants/Weth'
// import { MetamaskConnect } from './components/MetamaskConnect'

export default function StartGame() {
  //   const { account, chainId } = useEthers();
  const gameAddr = "0x0002Bc31940420ee76EcD3091643e590679CF9e4"; // Deployed game address
  const gameInterface = new utils.Interface(gameAbi);
  const contract = new Contract(gameAddr, gameInterface) as any;

  const { send } = useContractFunction(contract, "joinGame");
  // const { status } = state;

  const joinGame = () => {
    void send();
  };

  return (
    <div>
      <Button mb=".5rem" onClick={() => joinGame()}>
        Join Game
      </Button>
      {/* <Text>Status: {status}</Text> */}
    </div>
  );
}
