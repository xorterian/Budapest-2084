// --- LEVELS DEFINITION ---
const levels = [

    // Level i: 
    {
        playerPos: { x: 0, y: 1 },
        flagLocation: { x: 6, y: 6 },
        roadLayout: [],
        wallLayout: [],
        trapBuildingLayout: [],
        fenceLayout: [],
        doorLayout: [{x: 4, y: 4, n: 1}, {x: 4, y: 5, n: 2}, {x: 4, y: 6, n: 3}],
        desktopLayout: [{x: 1, y: 4, n: 2, text: "Do you want to open/close the door 2?" }],
        houseLocations: [],
        initialMoneyLocations: [],
        initialKeyALocations: [{x: 3, y: 3}],
        initialKeyBLocations: [{x: 5, y: 3}],
        initialKeyCLocations: [{x: 3, y: 5}],
        initialDuckLocations: [],
        initialStrangerLocations: [],
        initialStrangerBlueLocations: [],
        initialStrangerBlackLocations: [],
        initialStrangerGoldLocations: [],
        initialCarLocations: [],
        initialBusLocations: [],
        playerCar: { x: 0, y: 0, occupied: false },
        deviceLocations: { 'R': [ ], 'E': [ ], 'T': [ ] },
        infoLocations: []
    },
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
        initialKeyALocations: [],
        initialKeyBLocations: [],
        initialKeyCLocations: [],
        doorLayout: [],
        desktopLayout: [],
        initialDuckLocations: [
            { x: 7, y: 4, dx: -1, dy: 0, isDead: false }
        ],
        initialStrangerLocations: [
        ],
        initialStrangerBlueLocations: [
        ],
        initialStrangerBlackLocations: [
        ],
        initialStrangerGoldLocations: [
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
        initialKeyALocations: [],
        initialKeyBLocations: [],
        initialKeyCLocations: [],
        doorLayout: [],
        desktopLayout: [],
        initialDuckLocations: [
            { x: 7, y: 4, dx: -1, dy: 0, isDead: false }
        ],
        initialStrangerLocations: [
            { x: 4, y: 7, dx: 0, dy: -1, isDead: false }
        ],
        initialStrangerBlueLocations: [
        ],
        initialStrangerBlackLocations: [
        ],
        initialStrangerGoldLocations: [
        ],
        initialCarLocations: [
        ],
        initialBusLocations: [
        ],
        playerCar: { x: -1, y: -1, occupied: false },
        deviceLocations: { 'R': [ ], 'E': [ ], 'T': [ ] },
        infoLocations: [{ x: 3, y: 1, text: "Watch out for the building!" }, { x: 5, y: 1, text: "Run away from the bombs!" }]
    },
    // Level 3: Poor man running cross the road.
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
        initialKeyALocations: [],
        initialKeyBLocations: [],
        initialKeyCLocations: [],
        doorLayout: [],
        desktopLayout: [],
        initialDuckLocations: [
        ],
        initialStrangerLocations: [
            { x: 4, y: 7, dx: 0, dy: -1, isDead: false }
        ],
        initialStrangerBlueLocations: [
        ],
        initialStrangerBlackLocations: [
        ],
        initialStrangerGoldLocations: [
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
        deviceLocations: { 'R': [ ], 'E': [ ], 'T': [ ] },
        infoLocations: []
    },
    // Level 4: The QRG
    {
        playerPos: { x: 1, y: 1 },
        flagLocation: { x: 6, y: 6 },
        roadLayout: [
            { type: 'horizontal', y: 4 }
        ],
        wallLayout: [
                { x: 0, y: 3 },
                { x: 1, y: 3 },
                { x: 2, y: 3 },
                { x: 3, y: 3 },
                { x: 4, y: 3 },
                { x: 6, y: 3 },
                { x: 7, y: 3 },
                { x: 0, y: 5 },
                //{ x: 0, y: 4 },
                { x: 1, y: 5 },
                { x: 4, y: 5 },
                { x: 5, y: 5 },
                { x: 6, y: 5 },
                { x: 7, y: 5 }
        ],
        trapBuildingLayout: [
                { x: 3, y: 5 }
        ],
        fenceLayout: [
        ],
        houseLocations: [
                { x: 6, y: 4 },
                { x: 0, y: 4 },
        ],
        initialMoneyLocations: [
        ],
        initialKeyALocations: [],
        initialKeyBLocations: [],
        initialKeyCLocations: [],
        doorLayout: [],
        desktopLayout: [],
        initialDuckLocations: [
        ],
        initialStrangerLocations: [
        ],
        initialStrangerBlueLocations: [
        ],
        initialStrangerBlackLocations: [
        ],
        initialStrangerGoldLocations: [
        ],
        initialCarLocations: [
        ],
        initialBusLocations: [
        ],
        playerCar: { x: -1, y: -1, occupied: false },
        deviceLocations: { 'R': [ {x:6, y:2 } ], 'E': [ ], 'T': [ ] },
        infoLocations: [{ x: 3, y: 0, text: "If you find a bomb with no enough space to escape, use a QRG (press \"R\") to branch the time, and try to defuse the bomb (press \"D\") by cutting different wires in different branches. Good luck!" }]
    },
    // Level 5: The Key 
    {
        playerPos: { x: 1, y: 6 },
        flagLocation: { x: 6, y: 6 },
        roadLayout: [
            { type: 'vertical', x: 3 }
        ],
        wallLayout: [
                { x: 4, y: 0 },
                //{ x: 4, y: 1 },
                { x: 4, y: 2 },
                { x: 4, y: 3 },
                { x: 4, y: 4 },
                { x: 4, y: 5 },
                { x: 4, y: 6 },
                { x: 4, y: 7 }
        ],
        trapBuildingLayout: [
        ],
        fenceLayout: [
        ],
        houseLocations: [
        ],
        initialMoneyLocations: [
                { x: 1, y: 1 }
        ],
        initialKeyALocations: [{x: 2, y: 1}],
        initialKeyBLocations: [],
        initialKeyCLocations: [],
        doorLayout: [{x: 4, y: 1, n: 1}],
        desktopLayout: [{x: 2, y: 7, n: 1, text: "Do you want to open/close the door?" }],
        initialDuckLocations: [
        ],
        initialStrangerLocations: [
        ],
        initialStrangerBlueLocations: [
                { x: 6, y: 5, dx: -1, dy: 0, isDead: false }
        ],
        initialStrangerBlackLocations: [
        ],
        initialStrangerGoldLocations: [
        ],
        initialCarLocations: [
            { x: 3, y: 3, dx: 0, dy: 1, isPlayerCar: false }
        ],
        initialBusLocations: [
        ],
        playerCar: { x: -1, y: -1, occupied: false },
        deviceLocations: { 'R': [ ], 'E': [ ], 'T': [ ] },
        infoLocations: [{ x: 0, y: 3, text: "Bring the hardware-key to the station and press \"D\". That opens the gate and you can go through." }, { x: 7, y: 1, text: "Don't worry! The police officer does not hurt you but takes your devices and the half of your money away." }]
    },
    // Level 6: The Car
    {
        playerPos: { x: 6, y: 1 },
        flagLocation: { x: 0, y: 7 },
        roadLayout: [
        ],
        wallLayout: [
                { x: 0, y: 4 },
                { x: 1, y: 4 },
                { x: 6, y: 4 },
                { x: 7, y: 4 },
                { x: 0, y: 5 },
                { x: 1, y: 5 },
                { x: 6, y: 5 },
                { x: 7, y: 5 },
                { x: 3, y: 3 },
                { x: 4, y: 3 },
                { x: 0, y: 4 },
                { x: 0, y: 1 },
                { x: 1, y: 2 },
                { x: 7, y: 2 },
                { x: 6, y: 3 }
        ],
        trapBuildingLayout: [
        ],
        fenceLayout: [
                { x: 2, y: 5 },
                { x: 3, y: 5 }
        ],
        houseLocations: [
        ],
        initialMoneyLocations: [
        ],
        initialKeyALocations: [],
        initialKeyBLocations: [],
        initialKeyCLocations: [],
        doorLayout: [],
        desktopLayout: [],
        initialDuckLocations: [
        ],
        initialStrangerLocations: [
        ],
        initialStrangerBlueLocations: [
        ],
        initialStrangerBlackLocations: [
                { x: 1, y: 6, dx: -1, dy: 0, isDead: false },
                { x: 3, y: 7, dx: 0, dy: -1, isDead: false },
                { x: 5, y: 6, dx: 0, dy: -1, isDead: false },
                { x: 2, y: 2, dx: 0, dy: -1, isDead: true }
        ],
        initialStrangerGoldLocations: [
        ],
        initialCarLocations: [
        ],
        initialBusLocations: [
        ],
        playerCar: { x: 1, y: 1, occupied: false },
        deviceLocations: { 'R': [ ], 'E': [ ], 'T': [ ] },
        infoLocations: [{ x: 4, y: 0, text: "The secret polie officers are about to kill you. You can escape from them easier with that red car!" }]
    },
    // Level 7: The Deal
    {
        playerPos: { x: 4, y: 0 },
        flagLocation: { x: 0, y: 7 },
        roadLayout: [
            { type: 'horizontal', y: 2 },
            { type: 'horizontal', y: 3 },
            { type: 'horizontal', y: 4 },
            { type: 'horizontal', y: 7 }
        ],
        wallLayout: [
                { x: 0, y: 6 },
                { x: 1, y: 6 },
                { x: 2, y: 6 },
                { x: 3, y: 6 },
                { x: 6, y: 6 },
                { x: 7, y: 6 },
                { x: 0, y: 5 },
                { x: 1, y: 5 },
                { x: 2, y: 5 },
                { x: 3, y: 5 },
                { x: 4, y: 5 },
                { x: 6, y: 5 },
                { x: 7, y: 5 }
        ],
        trapBuildingLayout: [
                { x: 4, y: 6 }
        ],
        fenceLayout: [],
        houseLocations: [],
        initialMoneyLocations: [
            {x: 1, y: 1},
            {x: 0, y: 3},
            {x: 2, y: 4}
        ],
        initialKeyALocations: [],
        initialKeyBLocations: [],
        initialKeyCLocations: [],
        doorLayout: [],
        desktopLayout: [],
        initialDuckLocations: [],
        initialStrangerLocations: [],
        initialStrangerBlueLocations: [],
        initialStrangerBlackLocations: [],
        initialStrangerGoldLocations: [
                { x: 6, y: 0, dx: 1, dy: 0, isDead: false }
        ],
        initialCarLocations: [
            { x: 1, y: 2, dx: -1, isPlayerCar: false },
            { x: 2, y: 3, dx: 1, isPlayerCar: false },
            { x: 6, y: 4, dx: -1, isPlayerCar: false }
        ],
        initialBusLocations: [],
        playerCar: { x: -1, y: -1, occupied: false },
        deviceLocations: { 'R': [ ], 'E': [ ], 'T': [ ] },
        infoLocations: [{ x: 1, y: 0, text: "For a guess, there will be a surprise bomb at the corner. If you don't have any QRGs, buy one from the dealer standing in brown jacket!" }]
    },
    // Level 8: The Decision
    {
        playerPos: { x: 1, y: 6 },
        flagLocation: { x: 7, y: 6 },
        roadLayout: [],
        wallLayout: [
                { x: 2, y: 0 },{ x: 3, y: 0 },{ x: 4, y: 0 },{ x: 5, y: 0 },{ x: 6, y: 0 },
                { x: 2, y: 1 },{ x: 3, y: 1 },{ x: 4, y: 1 },{ x: 5, y: 1 },{ x: 6, y: 1 },
                //{ x: 2, y: 0 },{ x: 3, y: 0 },{ x: 4, y: 0 },{ x: 5, y: 0 },{ x: 6, y: 0 },
                { x: 2, y: 3 },{ x: 3, y: 3 },{ x: 4, y: 3 },/*{ x: 5, y: 3 },*/{ x: 6, y: 3 },
                { x: 2, y: 4 },{ x: 3, y: 4 },/*{ x: 4, y: 4 },{ x: 5, y: 4 },*/{ x: 6, y: 4 },
                { x: 2, y: 5 },{ x: 3, y: 5 },{ x: 4, y: 5 },/*{ x: 5, y: 5 },*/{ x: 6, y: 5 },
                { x: 2, y: 6 },/*{ x: 3, y: 6 },{ x: 4, y: 6 },{ x: 5, y: 6 },*/{ x: 6, y: 6 },
                { x: 2, y: 7 },{ x: 3, y: 7 },{ x: 4, y: 7 },{ x: 5, y: 7 },{ x: 6, y: 7 }
                
        ],
        trapBuildingLayout: [{ x: 4, y: 4 }],
        fenceLayout: [],
        houseLocations: [],
        initialMoneyLocations: [
                { x: 5, y: 3 },
                { x: 5, y: 5 },
                { x: 4, y: 6 },
                { x: 3, y: 6 }
        ],
        initialKeyALocations: [],
        initialKeyBLocations: [],
        initialKeyCLocations: [],
        doorLayout: [],
        desktopLayout: [],
        initialDuckLocations: [],
        initialStrangerLocations: [],
        initialStrangerBlueLocations: [],
        initialStrangerBlackLocations: [],
        initialStrangerGoldLocations: [
                { x: 0, y: 0, dx: 1, dy: 0, isDead: false }
        ],
        initialCarLocations: [],
        initialBusLocations: [],
        playerCar: { x: -1, y: -1, occupied: false },
        deviceLocations: { 'R': [ ], 'E': [ ], 'T': [ ] },
        infoLocations: [{ x: 0, y: 3, text: "Don't take unnecessary risk!" }]
    },
    // Level 9: Keep your otherselves
    {
        playerPos: { x: 4, y: 4 },
        flagLocation: { x: 6, y: 6 },
        roadLayout: [
            { type: 'horizontal', y: 3 },
            { type: 'horizontal', y: 4 },
            { type: 'vertical', x: 3 },
            { type: 'vertical', x: 4 }
        ],
        wallLayout: [
            {x: 2, y: 2},{x: 3, y: 2},/*{x: 4, y: 2},*/{x: 5, y: 2},
            {x: 2, y: 3},                           {x: 5, y: 3},
            {x: 2, y: 4},                           {x: 5, y: 4},
            {x: 2, y: 5},/*{x: 3, y: 5},*/{x: 4, y: 5},{x: 5, y: 5},
            
            //{x: 4, y: 6},
            {x: 4, y: 7},
            {x: 3, y: 7},
            {x: 2, y: 7},
            
            {x: 0, y: 1},{x: 1, y: 1},{x: 2, y: 1},
            
            /*{x: 6, y: 3},*/{x: 6, y: 3}
        ],
        trapBuildingLayout: [
            {x: 4, y: 6},
            {x: 4, y: 0}
        ],
        fenceLayout: [
            {x: 7, y: 0},
            {x: 1, y: 0}
        ],
        houseLocations: [
            {x: 0, y: 6},
            {x: 7, y: 1},
        ],
        initialMoneyLocations: [],
        initialKeyALocations: [],
        initialKeyBLocations: [],
        initialKeyCLocations: [{x: 1, y: 2}],
        doorLayout: [{x: 7, y: 3, n: 3}],
        desktopLayout: [{x: 2, y: 0, n: 3, text: ""}],
        initialDuckLocations: [],
        initialStrangerLocations: [],
        initialStrangerBlueLocations: [],
        initialStrangerBlackLocations: [],
        initialStrangerGoldLocations: [],
        initialCarLocations: [],
        initialBusLocations: [],
        playerCar: { x: -1, y: -1, occupied: false },
        deviceLocations: { 'R': [ {x: 3, y: 3} ], 'E': [ ], 'T': [ ] },
        infoLocations: []
    },
    // Level i: 
    {
        playerPos: { x: 0, y: 1 },
        flagLocation: { x: 6, y: 6 },
        roadLayout: [],
        wallLayout: [],
        trapBuildingLayout: [],
        fenceLayout: [],
        houseLocations: [],
        initialMoneyLocations: [],
        initialKeyALocations: [],
        initialKeyBLocations: [],
        initialKeyCLocations: [],
        doorLayout: [],
        desktopLayout: [],
        initialDuckLocations: [],
        initialStrangerLocations: [],
        initialStrangerBlueLocations: [],
        initialStrangerBlackLocations: [],
        initialStrangerGoldLocations: [],
        initialCarLocations: [],
        initialBusLocations: [],
        playerCar: { x: -1, y: -1, occupied: false },
        deviceLocations: { 'R': [ ], 'E': [ ], 'T': [ ] },
        infoLocations: []
    }
];

