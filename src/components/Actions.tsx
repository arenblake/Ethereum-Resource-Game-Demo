import {
  Box,
  Button,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
} from "@chakra-ui/react";
import { useContractFunction } from "@usedapp/core";
import { Contract, ethers, BigNumber } from "ethers";
import { useEffect, useState } from "react";

type Props = {
  contract: Contract;
};

const Actions: React.FC<Props> = ({ contract }) => {
  const [resource, setResource] = useState("0");
  const [amount, setAmount] = useState("100");

  const { send: spawnWorker } = useContractFunction(contract, "spawnWorker");
  const { send: buildHouse } = useContractFunction(contract, "buildHouse");
  const { send: buildFarm } = useContractFunction(contract, "buildFarm");
  const { send: buildBarrak } = useContractFunction(contract, "buildBarrak");
  const { send: trade } = useContractFunction(contract, "trade");

  const handleSpawn = () => {
    void spawnWorker();
  };

  const handleBuildHouse = () => {
    void buildHouse();
  };

  const handleBuildFarm = () => {
    void buildFarm();
  };

  const handleBuildBarrak = () => {
    void buildBarrak();
  };

  const handleTrade = () => {
    void trade(resource, amount);
  };
  return (
    <Box my="2rem" bg="gray.600" borderRadius="2rem" p="1rem">
      <Text
        color="tomato"
        textAlign="center"
        fontSize="3xl"
        mb=".5rem"
        textDecorationLine="underline"
      >
        Actions
      </Text>
      <Button mx="1rem" onClick={handleSpawn}>
        Spawn Worker
      </Button>
      <Button mx="1rem" onClick={handleBuildHouse}>
        Build House
      </Button>
      <Button mx="1rem" onClick={handleBuildFarm}>
        Build Farm
      </Button>
      <Button mx="1rem" onClick={handleBuildBarrak}>
        Build Barrak
      </Button>
      <Box my="1rem">
        <Flex gridGap="1rem">
          <Select
            color="gray.900"
            bg="gray.200"
            onChange={(e) => setResource(e.target.value)}
          >
            <option value="0">Wood</option>
            <option value="1">Stone</option>
            <option value="2">Iron</option>
          </Select>
          <NumberInput defaultValue={100} min={1}>
            <NumberInputField
              color="gray.900"
              bg="gray.200"
              onChange={(e) =>
                e.target.value &&
                setAmount(ethers.utils.parseEther(e.target.value).toString())
              }
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Button onClick={handleTrade}>Trade</Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Actions;
