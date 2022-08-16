const gameAbi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    inputs: [],
    name: "buildBarrak",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "buildFarm",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "buildHouse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum Resources.ResourceType",
        name: "_resource",
        type: "uint8",
      },
      { internalType: "uint256[]", name: "_workers", type: "uint256[]" },
    ],
    name: "gatherResource",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_player", type: "address" },
      { internalType: "uint256", name: "_house", type: "uint256" },
    ],
    name: "getHouse",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "capacity", type: "uint256" },
          { internalType: "uint256", name: "hp", type: "uint256" },
        ],
        internalType: "struct Buildings.House",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_player", type: "address" },
      { internalType: "uint256", name: "_worker", type: "uint256" },
    ],
    name: "getWorker",
    outputs: [
      {
        components: [
          { internalType: "bool", name: "isWorker", type: "bool" },
          { internalType: "bool", name: "isAvail", type: "bool" },
          { internalType: "uint256", name: "timeDeployed", type: "uint256" },
          {
            internalType: "enum Resources.ResourceType",
            name: "resourceType",
            type: "uint8",
          },
          { internalType: "uint256", name: "harvestRate", type: "uint256" },
        ],
        internalType: "struct Units.Worker",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gold",
    outputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "replenishRate", type: "uint256" },
      { internalType: "uint256", name: "lastUpdate", type: "uint256" },
      { internalType: "uint256", name: "totWorkers", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "iron",
    outputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "replenishRate", type: "uint256" },
      { internalType: "uint256", name: "lastUpdate", type: "uint256" },
      { internalType: "uint256", name: "totWorkers", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "joinGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "playerResources",
    outputs: [
      { internalType: "bool", name: "isPlayer", type: "bool" },
      { internalType: "uint256", name: "wood", type: "uint256" },
      { internalType: "uint256", name: "stone", type: "uint256" },
      { internalType: "uint256", name: "iron", type: "uint256" },
      { internalType: "uint256", name: "gold", type: "uint256" },
      { internalType: "uint256", name: "lastSpawn", type: "uint256" },
      { internalType: "uint256", name: "housingCapacity", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "_workers", type: "uint256[]" },
    ],
    name: "recallWorkers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "spawnWorker",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stone",
    outputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "replenishRate", type: "uint256" },
      { internalType: "uint256", name: "lastUpdate", type: "uint256" },
      { internalType: "uint256", name: "totWorkers", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum Resources.ResourceType",
        name: "_resource",
        type: "uint8",
      },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "trade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "wood",
    outputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "replenishRate", type: "uint256" },
      { internalType: "uint256", name: "lastUpdate", type: "uint256" },
      { internalType: "uint256", name: "totWorkers", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export default gameAbi;
