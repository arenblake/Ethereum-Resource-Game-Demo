import { useEthers } from "@usedapp/core";
import { Text, Box } from "@chakra-ui/react";
import StartGame from "./StartGame";

type Props = {
  userData: any;
};

const PlayerInfo: React.FC<Props> = ({ userData }) => {
  const { account } = useEthers();
  return account ? (
    <Box>
      <Box my="2rem" bg="gray.600" borderRadius="2rem" p="1rem">
        <Text
          color="tomato"
          textAlign="center"
          fontSize="3xl"
          mb=".5rem"
          textDecorationLine="underline"
        >
          Player Info
        </Text>
        {/* <Button onClick={getUserData}>Get User Data</Button> */}
        {userData.isPlayer && (
          <>
            <Text textAlign="center" mb="2px" color="tomato">
              Gold: {userData.gold}
            </Text>
            <Text textAlign="center" mb="2px" color="tomato">
              Iron: {userData.iron}
            </Text>
            <Text textAlign="center" mb="2px" color="tomato">
              Stone: {userData.stone}
            </Text>
            <Text textAlign="center" mb="2px" color="tomato">
              Wood: {userData.wood}
            </Text>
            <Text textAlign="center" mb="2px" color="tomato">
              lastSpawn: {userData.lastSpawn}
            </Text>
            <Text textAlign="center" mb="2px" color="tomato">
              housingCapacity: {userData.housingCapacity}
            </Text>
          </>
        )}
        {!userData.isPlayer && (
          <>
            <Text textAlign="center" mb="1rem" color="tomato">
              Please Join the Game!
            </Text>
            {!userData.isPlayer && <StartGame />}
          </>
        )}
      </Box>
    </Box>
  ) : (
    <Text color="tomato">Loading...</Text>
  );
};

export default PlayerInfo;
