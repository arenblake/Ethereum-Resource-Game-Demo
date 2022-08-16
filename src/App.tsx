import {
  ChakraProvider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
  Text,
  Box,
} from "@chakra-ui/react";
import theme from "./theme";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import Header from "./components/Header";
import PlayerInfo from "./components/PlayerInfo";
import "@fontsource/inter";
import { useEffect, useState } from "react";
import WorkerInfo from "./components/WorkerInfo";
import Actions from "./components/Actions";
import { Contract, ethers } from "ethers";
import { useEthers } from "@usedapp/core";
import gameAbi from "./abis/Game";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userData, setUserData] = useState({
    isPlayer: false,
    gold: 0,
    wood: 0,
    iron: 0,
    stone: 0,
    housingCapacity: 0,
    lastSpawn: 0,
  });
  const [userWorkers, setUserWorkers] = useState([
    {
      isWorker: false,
      isAvail: true,
      harvestRate: 0,
      timeDeployed: 0,
      resourceType: 0,
    },
  ]);
  const [resource, setResource] = useState(String);
  const [chain, setChain] = useState(5);

  const gameAddr = "0x0002Bc31940420ee76EcD3091643e590679CF9e4"; // Deployed game address
  const { account, library, chainId } = useEthers();
  const contract = new Contract(gameAddr, gameAbi, library);

  window.ethereum.on("chainChanged", (_chainId: any) =>
    window.location.reload()
  );

  window.ethereum.on("accountsChanged", (_: Array<string>) =>
    window.location.reload()
  );

  useEffect(() => {
    const getUserData = async () => {
      return await contract.playerResources(account);
    };

    if (account && chainId === 5) {
      getUserData().then((resp) => {
        console.log(resp);
        setUserData({
          isPlayer: resp.isPlayer,
          gold: Number(ethers.utils.formatEther(resp.gold)),
          wood: Number(ethers.utils.formatEther(resp.wood)),
          iron: Number(ethers.utils.formatEther(resp.iron)),
          stone: Number(ethers.utils.formatEther(resp.stone)),
          housingCapacity: Number(resp.housingCapacity._hex),
          lastSpawn: Number(resp.lastSpawn._hex),
        });
        getUserWorkers();
      });
    }
    chainId && setChain(chainId);
  }, [account]);

  const getUserWorkers = async () => {
    let index = 0;
    let workers = [];
    while (true) {
      const { isWorker, isAvail, harvestRate, timeDeployed, resourceType } =
        await contract.getWorker(account, index);
      if (isWorker === false) {
        break;
      }
      workers.push({
        isWorker: isWorker,
        isAvail: isAvail,
        harvestRate: Number(ethers.utils.formatEther(harvestRate)),
        timeDeployed: Number(ethers.utils.formatEther(timeDeployed)),
        resourceType: resourceType,
      });
      index++;
    }
    setUserWorkers(workers);
  };
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Header>
          <ConnectButton handleOpenModal={onOpen} />
        </Header>
        <AccountModal isOpen={isOpen} onClose={onClose} />
        {chain == 5 ? (
          <Tabs isFitted variant="enclosed" align="center" mt="2rem">
            <TabList w="50vw">
              <Tab color="gray.300" _selected={{ color: "tomato" }}>
                Player Info
              </Tab>
              <Tab color="gray.300" _selected={{ color: "tomato" }}>
                Worker Info
              </Tab>
              <Tab color="gray.300" _selected={{ color: "tomato" }}>
                Actions
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <PlayerInfo userData={userData} />
              </TabPanel>
              <TabPanel>
                <WorkerInfo
                  setResource={setResource}
                  resource={resource}
                  userWorkers={userWorkers}
                  contract={contract}
                />
              </TabPanel>
              <TabPanel>
                <Actions contract={contract} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        ) : account ? (
          <Box my="2rem" bg="gray.600" borderRadius="2rem" p="1rem">
            <Text color="tomato">Switch to Goerli test net in Metamask</Text>
          </Box>
        ) : (
          <Box my="2rem" bg="gray.600" borderRadius="2rem" p="1rem">
            <Text color="tomato">Loading...</Text>
          </Box>
        )}
      </Layout>
    </ChakraProvider>
  );
}

export default App;
