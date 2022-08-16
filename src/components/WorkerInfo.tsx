import { useContractFunction } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";

import { Button, Text, Box, Flex, Spacer, Select } from "@chakra-ui/react";

type Props = {
  setResource: React.Dispatch<React.SetStateAction<any>>;
  userWorkers: any;
  resource: any;
  contract: Contract;
};

const WorkerInfo: React.FC<Props> = ({
  setResource,
  resource,
  userWorkers,
  contract,
}) => {
  const { send: gatherResource, events: gatherEvents } = useContractFunction(
    contract,
    "gatherResource"
  );
  const { send: recallWorkers, events: recallEvents } = useContractFunction(
    contract,
    "recallWorkers"
  );

  const handleHarvest = (index: number) => {
    void gatherResource(Number(resource), [index]);
  };

  const handleReturn = (index: number) => {
    void recallWorkers([index]);
  };
  return (
    <Box my="2rem" bg="gray.600" borderRadius="2rem" p="1rem">
      <Text
        color="tomato"
        textAlign="center"
        fontSize="3xl"
        mb="1rem"
        textDecorationLine="underline"
      >
        Worker Info
      </Text>
      {userWorkers &&
        userWorkers.map((worker: any, index: number) => (
          <>
            <Flex
              key={index}
              alignItems="center"
              justifyContent="space-between"
              my="1rem"
            >
              <Text color="tomato">Worker {index + 1}:</Text>
              <Spacer w="1rem" />
              <Text color="tomato">
                {worker["isAvail"] ? (
                  <Box>
                    <Flex>
                      <Select
                        mr="1rem"
                        onChange={(e) => setResource(e.target.value)}
                      >
                        <option value="0">Wood</option>
                        <option value="1">Stone</option>
                        <option value="2">Iron</option>
                      </Select>
                      <Button onClick={() => handleHarvest(index)}>
                        Harvest
                      </Button>
                    </Flex>
                  </Box>
                ) : (
                  <Button onClick={() => handleReturn(index)}>
                    Return From{" "}
                    {userWorkers[index]["resourceType"] === 0
                      ? "Wood"
                      : userWorkers[index]["resourceType"] === 1
                      ? "Stone"
                      : "Iron"}{" "}
                    Harvest
                  </Button>
                )}
              </Text>
              <Spacer w="1rem" />
              <Text color="tomato">Harvest Rate: {worker.harvestRate}</Text>
            </Flex>
            {index + 1 !== userWorkers.length ? <hr></hr> : null}
          </>
        ))}
    </Box>
  );
};

export default WorkerInfo;
