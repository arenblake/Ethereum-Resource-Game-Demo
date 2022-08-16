import { useCall } from "@usedapp/core";
import { Falsy } from "@usedapp/core/dist/esm/src/model/types";
import { Contract, ethers } from "ethers";
import gameAbi from "../abis/Game";

export default function usePlayerInfo(
  contractAddress: string | Falsy,
  address: string | Falsy
) {
  const { value, error } =
    useCall(
      address &&
        contractAddress && {
          contract: new Contract(contractAddress, gameAbi), // instance of called contract
          method: "playerResources", // Method to be called
          args: [address], // Method arguments - address to be checked for balance
        }
    ) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value; //?.[0];
}
