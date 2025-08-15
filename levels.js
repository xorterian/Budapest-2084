// --- LEVELS DEFINITION ---
const levels = [
    // Level 1: The ducg crossing the road. 
    {
        playerPos: { x: 1, y: 1 },
        flagLocation: { x: 6, y: 1 },
        roadLayout: [
            { type: 'vertical', x: 4 }
        ],
        wallLayout: [
        ],
        trapBuildingLayout: [
        ],
        fenceLayout: [
        ],
        houseLocations: [
        ],
        initialMoneyLocations: [
        ],
        initialDuckLocations: [
            { x: 7, y: 4, dx: -1, dy: 0, isDead: false }
        ],
        initialStrangerLocations: [
        ],
        initialCarLocations: [
        ],
        initialBusLocations: [
        ],
        playerCar: { x: -1, y: -1, occupied: false },
        deviceLocations: { 'R': [], 'E': [], 'T': [] },
        infoLocations: [{ x: 1, y: 3, text: "Get to the flags!" }]
    },
    // Level 2: The ducg crossing the road. 
    {
        playerPos: { x: 1, y: 1 },
        flagLocation: { x: 6, y: 6 },
        roadLayout: [
            { type: 'horizontal', y: 4 }
        ],
        wallLayout: [
            { x: 7, y: 1 },
            { x: 7, y: 2 }
        ],
        trapBuildingLayout: [
            { x: 2, y: 7 }
        ],
        fenceLayout: [
        ],
        houseLocations: [
        ],
        initialMoneyLocations: [
            { x: 6, y: 2 },
            { x: 1, y: 6 }
        ],
        initialDuckLocations: [
            { x: 7, y: 4, dx: -1, dy: 0, isDead: false }
        ],
        initialStrangerLocations: [
            { x: 4, y: 7, dx: 0, dy: -1, isDead: false }
        ],
        initialCarLocations: [
        ],
        initialBusLocations: [
        ],
        playerCar: { x: -1, y: -1, occupied: false },
        deviceLocations: { 'R': [{ x: 1, y: 3 } ], 'E': [ ], 'T': [ ] },
        infoLocations: [{ x: 3, y: 1, text: "Watch out for the building!" }, { x: 5, y: 1, text: "Run away from the bombs!" }]
    },
    // Level 2: Poor man running cross the road.
    {
        playerPos: { x: 0, y: 1 },
        flagLocation: { x: 6, y: 6 },
        roadLayout: [
            { type: 'horizontal', y: 3 },
            { type: 'horizontal', y: 4 },
            { type: 'vertical', x: 3 },
            { type: 'vertical', x: 4 }
        ],
        wallLayout: [
            { x: 5, y: 0 },
            { x: 6, y: 0 },
            { x: 6, y: 1 },
            
            { x: 1, y: 5 },
            { x: 2, y: 5 },
            { x: 1, y: 6 },
            { x: 2, y: 6 },
            { x: 1, y: 7 },
            { x: 2, y: 7 }
        ],
        trapBuildingLayout: [
            { x: 5, y: 1 },
        ],
        fenceLayout: [
        ],
        houseLocations: [
            { x: 7, y: 0 },
        ],
        initialMoneyLocations: [
        ],
        initialDuckLocations: [
        ],
        initialStrangerLocations: [
            { x: 4, y: 7, dx: 0, dy: -1, isDead: false }
        ],
        initialCarLocations: [
            { x: 7, y: 4, dx: -1, isPlayerCar: false },
            { x: 3, y: 3, dx: -1, isPlayerCar: false }
        ],
        initialBusLocations: [
            { x: 3, y: 2, dy: 1, stopped: false, stopDuration: 0 },
            { x: 4, y: 7, dy: -1, stopped: false, stopDuration: 0 }
        ],
        playerCar: { x: -1, y: -1, occupied: false },
        deviceLocations: { 'R': [ { x: 2, y: 0 } ], 'E': [ ], 'T': [ ] },
        infoLocations: []
    }
];

