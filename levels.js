// --- LEVELS DEFINITION ---
const levels = [
    // Level 21: 
    {
        playerPos: { x: 0, y: 1 },
        flagLocation: { x: 6, y: 6 },
        roadLayout: [],
        wallLayout: [],
        trapBuildingLayout: [],
        fenceLayout: [],
        initialMoneyLocations: [],
        doorLayout: [],
        desktopLayout: [],
        initialDuckLocations: [],
        playerCar: { x: -1, y: -1, occupied: false },
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
        trapBuildingLayout: [],
        initialMoneyLocations: [],
        initialDuckLocations: [
            { x: 7, y: 4, dx: -1, dy: 0, isDead: false }
        ],               
        initialCarLocations: [],
        initialBusLocations: [],
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
        fenceLayout: [],        
        initialMoneyLocations: [
            { x: 6, y: 2 },
            { x: 1, y: 6 }
        ],
        doorLayout: [],
        desktopLayout: [],
        initialDuckLocations: [
            { x: 7, y: 4, dx: -1, dy: 0, isDead: false }
        ],
        initialStrangerLocations: [
            { x: 4, y: 7, dx: 0, dy: -1, isDead: false }
        ],                        
        initialCarLocations: [],
        initialBusLocations: [],
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
        fenceLayout: [],
        houseLocations: [
            { x: 7, y: 0 },
        ],
        initialMoneyLocations: [],
        doorLayout: [],
        desktopLayout: [],
        initialDuckLocations: [],
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
        fenceLayout: [],
        houseLocations: [
                { x: 6, y: 4 },
                { x: 0, y: 4 },
        ],
        initialMoneyLocations: [],
        doorLayout: [],
        desktopLayout: [],
        initialDuckLocations: [],                                
        initialCarLocations: [],
        initialBusLocations: [],
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
        trapBuildingLayout: [],
        fenceLayout: [],        
        initialMoneyLocations: [
                { x: 1, y: 1 }
        ],
        initialKeyALocations: [{x: 2, y: 1}],
        doorLayout: [{x: 4, y: 1, n: 1}],
        desktopLayout: [{x: 2, y: 7, n: 1, text: "" }],
        initialDuckLocations: [],        
        initialStrangerBlueLocations: [
                { x: 6, y: 5, dx: -1, dy: 0, isDead: false }
        ],                
        initialCarLocations: [
            { x: 3, y: 3, dx: 0, dy: 1, isPlayerCar: false }
        ],
        initialBusLocations: [],
        playerCar: { x: -1, y: -1, occupied: false },
        deviceLocations: { 'R': [ ], 'E': [ ], 'T': [ ] },
        infoLocations: [{ x: 0, y: 3, text: "Bring the hardware-key to the station and press \"D\". That opens the gate and you can go through." }, { x: 7, y: 1, text: "Don't worry! The police officer does not hurt you but takes your devices and the half of your money away." }]
    },
    // Level 6: The Car
    {
        playerPos: { x: 6, y: 1 },
        flagLocation: { x: 0, y: 7 },
        roadLayout: [],
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
        trapBuildingLayout: [],
        fenceLayout: [
                { x: 2, y: 5 },
                { x: 3, y: 5 }
        ],        
        initialMoneyLocations: [],
        doorLayout: [],
        desktopLayout: [],
        initialDuckLocations: [],                
        initialStrangerBlackLocations: [
                { x: 1, y: 6, dx: -1, dy: 0, isDead: false },
                { x: 3, y: 7, dx: 0, dy: -1, isDead: false },
                { x: 5, y: 6, dx: 0, dy: -1, isDead: false },
                { x: 2, y: 2, dx: 0, dy: -1, isDead: true }
        ],        
        initialCarLocations: [],
        initialBusLocations: [],
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
        initialMoneyLocations: [
            {x: 1, y: 1},
            {x: 0, y: 3},
            {x: 2, y: 4}
        ],
        doorLayout: [],
        desktopLayout: [],
        initialDuckLocations: [],
        initialStrangerGoldLocations: [
                { x: 6, y: 0, dx: 1, dy: 0, isDead: false }
        ],
        initialCarLocations: [
            { x: 1, y: 2, dx: -1, isPlayerCar: false },
            { x: 2, y: 3, dx: 1, isPlayerCar: false },
            { x: 6, y: 4, dx: -1, isPlayerCar: false }
        ],
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
        initialMoneyLocations: [
                { x: 5, y: 3 },
                { x: 5, y: 5 },
                { x: 4, y: 6 },
                { x: 3, y: 6 }
        ],
        doorLayout: [],
        desktopLayout: [],
        initialDuckLocations: [],
        initialStrangerGoldLocations: [
                { x: 0, y: 0, dx: 1, dy: 0, isDead: false }
        ],
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
        initialKeyCLocations: [{x: 1, y: 2}],
        doorLayout: [{x: 7, y: 3, n: 3}],
        desktopLayout: [{x: 2, y: 0, n: 3, text: ""}],
        initialDuckLocations: [],
        
        playerCar: { x: -1, y: -1, occupied: false },
        deviceLocations: { 'R': [ {x: 3, y: 3} ], 'E': [ ], 'T': [ ] },
        infoLocations: []
    },
    // Level 10: The Three-door
    {
        playerPos: { x: 3, y: 6 },
        flagLocation: { x: 3, y: 0 },
        roadLayout: [],
        wallLayout: [
            {x: 1, y: 0},{x: 6, y: 0},
            {x: 1, y: 1},{x: 6, y: 1},
            {x: 1, y: 2},{x: 6, y: 2},
            {x: 1, y: 3},{x: 6, y: 3},
            {x: 1, y: 4},{x: 6, y: 4},
            {x: 1, y: 5},{x: 6, y: 5}
        ],
        trapBuildingLayout: [],
        fenceLayout: [
            {x: 2, y: 1},{x: 5, y: 1},
            {x: 2, y: 3},{x: 5, y: 3},
            {x: 2, y: 5},{x: 5, y: 5}
        ],
        doorLayout: [
            {x: 3, y: 1, n: 1},{x: 4, y: 1, n: 1},
            {x: 3, y: 3, n: 2},{x: 4, y: 3, n: 2},
            {x: 3, y: 5, n: 3},{x: 4, y: 5, n: 3}
        ],
        desktopLayout: [
            {x:2 ,y: 7, n: 1, text: ""},
            {x:3 ,y: 7, n: 2, text: ""},
            {x:4 ,y: 7, n: 3, text: ""}
        ],
        initialMoneyLocations: [],
        initialKeyALocations: [{x:2, y: 2}],
        initialKeyBLocations: [{x:7, y: 0}],
        initialKeyCLocations: [{x:0, y: 0}],
        initialDuckLocations: [],
        initialStrangerBlackLocations: [
            {x: 3, y: 4, dx: -1, dy: 0, isDead: false },
            {x: 3, y: 2, dx: -1, dy: 0, isDead: false },
            {x: 4, y: 2, dx: 1, dy: 0, isDead: false },
            {x: 4, y: 0, dx: -1, dy: 0, isDead: false }
        ],
        playerCar: { x: -1, y: -1, occupied: false },
        deviceLocations: { 'R': [ ], 'E': [ ], 'T': [ ] },
        infoLocations: []
    },
    // Level 11: The Double QRG 
    {
        playerPos: { x: 1, y: 1 },
        flagLocation: { x: 7, y: 0 },
        roadLayout: [
            { type: 'horizontal', y: 4 },
            { type: 'horizontal', y: 5 },
            { type: 'horizontal', y: 6 }
        ],
        wallLayout: [
            {x: 6, y: 0},{x: 6, y: 1},
            {x: 0, y: 4},{x: 1, y: 4},{x: 2, y: 4},{x: 3, y: 4},{x: 4, y: 4},{x: 5, y: 4},/*{x: 6, y: 4},*/{x: 7, y: 4},
            {x: 0, y: 5},{x: 1, y: 5},{x: 2, y: 5},{x: 3, y: 5},{x: 4, y: 5},{x: 5, y: 5},/*{x: 6, y: 5},*/{x: 7, y: 5},
            {x: 0, y: 6},{x: 1, y: 6},/*{x: 2, y: 6},{x: 3, y: 6},{x: 4, y: 6},{x: 5, y: 6},/*{x: 6, y: 6},*/{x: 7, y: 6},
            {x: 0, y: 7},{x: 1, y: 7},{x: 2, y: 7},/*{x: 3, y: 7},/*{x: 4, y: 7},*/{x: 5, y: 7},{x: 6, y: 7},{x: 7, y: 7}
        ],
        trapBuildingLayout: [{x: 4, y: 7},{x: 3, y: 7}],
        fenceLayout: [],
        doorLayout: [{x: 7, y: 1, n: 1}],
        desktopLayout: [{x:0 ,y: 3, n: 1, text: ""}],
        initialMoneyLocations: [],
        initialKeyALocations: [{x: 2, y: 6}],
        initialDuckLocations: [],
        
        playerCar: { x: -1, y: -1, occupied: false },
        deviceLocations: { 'R': [{x: 4, y: 1},{x: 4, y: 2}], 'E': [], 'T': [ ] },
        infoLocations: [{x: 2, y: 0, text: "In some cases it can be useful to have two QRGs at the same time."}]
    },
    // Level 12: The Eigengram 
    {
        playerPos: { x: 1, y: 1 },
        flagLocation: { x: 7, y: 0 },
        roadLayout: [
            { type: 'horizontal', y: 4 },
            { type: 'horizontal', y: 5 },
            { type: 'horizontal', y: 6 }
        ],
        wallLayout: [
            {x: 6, y: 0},{x: 6, y: 1},
            {x: 0, y: 4},{x: 1, y: 4},{x: 2, y: 4},{x: 3, y: 4},{x: 4, y: 4},{x: 5, y: 4},/*{x: 6, y: 4},*/{x: 7, y: 4},
            {x: 0, y: 5},{x: 1, y: 5},{x: 2, y: 5},{x: 3, y: 5},/*{x: 4, y: 5},*/{x: 5, y: 5},/*{x: 6, y: 5},*/{x: 7, y: 5},
            {x: 0, y: 6},{x: 1, y: 6},/*{x: 2, y: 6},{x: 3, y: 6},{x: 4, y: 6},{x: 5, y: 6},/*{x: 6, y: 6},*/{x: 7, y: 6},
            {x: 0, y: 7},{x: 1, y: 7},{x: 2, y: 7},/*{x: 3, y: 7},/*{x: 4, y: 7},*/{x: 5, y: 7},{x: 6, y: 7},{x: 7, y: 7}
        ],
        trapBuildingLayout: [{x: 4, y: 5},{x: 4, y: 7},{x: 3, y: 7}],
        fenceLayout: [],
        doorLayout: [{x: 7, y: 1, n: 1}],
        desktopLayout: [{x:0 ,y: 3, n: 1, text: ""}],
        initialMoneyLocations: [],
        initialKeyALocations: [{x: 2, y: 6}],
        initialDuckLocations: [],
        
        playerCar: { x: -1, y: -1, occupied: false },
        deviceLocations: { 'R': [{x: 4, y: 1}], 'E': [{x: 4, y: 2}], 'T': [ ] },
        infoLocations: [{x: 2, y: 0, text: "The case looks similar but this time you need to apply the device called Eigengram to send the key to your otherself. So after picking the items up, branch the time (press \"R\"), one of your otherself stays at the station, and the other one goes to the key. Because of the traps, he/she switches the eigengram on (press \"E\" in both branches!) via the key will be sent. Then the first otherself will be able to use the key to open the door, and go to the next level. Good luck!"}]
    },
    // Level 13: The Self-destruction Button
    {
        playerPos: { x: 1, y: 1 },
        flagLocation: { x: 6, y: 1 },
        roadLayout: [],
        wallLayout: [],
        trapBuildingLayout: [],
        fenceLayout: [],
        doorLayout: [],
        desktopLayout: [{x: 4, y: 6, n: -1, text: "Do you want to launch the self-destruction mode?"}],
        houseLocations: [{x: 1, y: 3},{x: 1, y: 5},{x: 6, y: 5}],
        initialMoneyLocations: [],
        initialDuckLocations: [{x: 1, y: 7, dx: -1, dy: 0, isDead: false}],
        playerCar: { x: -1, y: -1, occupied: false },
        deviceLocations: { 'R': [{x: 4, y: 3}], 'E': [ ], 'T': [ ] },
        infoLocations: [{x: 3, y: 0, text: "Some stations can be used to launch the self-destruction of the city. You can use a thread for testing it."}]
    },
    // Level 14: The Gate-puzzle
    {
        playerPos: { x: 7, y: 0 },
        flagLocation: { x: 0, y: 0 },
        roadLayout: [
            { type: 'vertical', x: 2 },
            { type: 'vertical', x: 5 },
            { type: 'horizontal', y: 2 },
            { type: 'horizontal', y: 5 }
        ],
        wallLayout: [{x: 2,y: 2},{x: 2,y: 5},{x: 5,y: 2},{x: 5,y: 5}],
        trapBuildingLayout: [],
        fenceLayout: [
            {x: 2,y: 1},{x: 2,y: 0},
            {x: 3,y: 5},{x: 4,y: 5},
            {x: 5,y: 6},{x: 5,y: 7}
        ],
        doorLayout: [
            {x: 6,y: 2,n: -1},{x: 7,y: 2,n: -1},
            {x: 6,y: 5,n: 1},{x: 7,y: 5,n: 1},
            {x: 2,y: 6,n: 1},{x: 2,y: 7,n: 1},
            {x: 5,y: 1,n: -2},{x: 5,y: 0,n: -2},
            {x: 2,y: 3,n: 2},{x: 2,y: 4,n: 2},
            {x: 1,y: 5,n: 2},{x: 0,y: 5,n: 2},
            {x: 0,y: 2,n: 3},{x: 1,y: 2,n: 3}
        ],
        initialKeyALocations: [{x: 3, y: 3}],
        initialKeyBLocations: [{x: 7, y: 3}],
        initialKeyCLocations: [{x: 0, y: 7}],
        desktopLayout: [
            {x: 6,y: 4,n: 1, text: "Red gates"},
            {x: 4,y: 1,n: 2, text: "White gates"},
            {x: 6,y: 7,n: 3, text: "Green gates"}
        ],
        bios: [{x: 3, y: 7}],
        initialMoneyLocations: [],
        initialDuckLocations: [
            {x: 1, y: 7, dx: -1, dy: 0, isDead: false},
            {x: 1, y: 7, dx: 0, dy: -1, isDead: false},
            {x: 0, y: 3, dx: 1, dy: 0, isDead: false},
            {x: 1, y: 4, dx: -1, dy: 0, isDead: false}
        ],
        //initialVacLocations: [{x: 1, y: 1, prSide: .01, prEff: 0.99}],
        //initialMedLocations: [{x: 3, y: 1, prSide: .01, prEff: 0.99}],
        //initialJacketLocations: [{x: 4, y: 0, prEff: 0.3}],
        deviceLocations: { 'R': [ ], 'E': [ ], 'T': [ ], 'vac': [], 'med': [], 'jacket': [] },
        infoLocations: []
    },
    // Level 15: The vaccination
    {
        playerPos: { x: 1, y: 1 },
        flagLocation: { x: 6, y: 1 },
        roadLayout: [],
        wallLayout: [
            {x: 2, y: 0},{x: 5, y: 0},
            {x: 2, y: 1},{x: 3, y: 1},{x: 5, y: 1},
            {x: 2, y: 2},{x: 5, y: 2},
            {x: 2, y: 3},{x: 5, y: 3},{x: 4, y: 3},
            {x: 2, y: 4},{x: 5, y: 4},
            {x: 2, y: 5},{x: 3, y: 5},{x: 5, y: 5}
        ],
        trapBuildingLayout: [],
        fenceLayout: [],
        doorLayout: [{x: 6, y: 3, n: 3},{x: 7, y: 3, n: 3}],
        initialKeyCLocations: [{x: 4, y: 0}],
        desktopLayout: [
            {x: 3,y: 0,n: 3, text: ""},
        ],
        bios: [{x: 3, y: 3},{x: 4, y: 2}],
        initialMoneyLocations: [],
        initialDuckLocations: [],
        initialVacLocations: [{x: 7, y: 6, prSide: .01, prEff: 0.99}],
        //initialMedLocations: [{x: 3, y: 1, prSide: .01, prEff: 0.99}],
        //initialJacketLocations: [{x: 4, y: 0, prEff: 0.3}],
        deviceLocations: { 'R': [ ], 'E': [ ], 'T': [ ] },
        infoLocations: [{x: 0, y: 4, text: "You easily become infected in biohazard area without vaccination. Note that, it's 99% that serum gives you protection for this level, and it's 1% that you will be died in side effects."}]
    },
    // Level 16: The Medications
    {
        playerPos: { x: 0, y: 1 },
        flagLocation: { x: 7, y: 1 },
        roadLayout: [],
        wallLayout: [
            {x: 1, y: 0},{x: 6, y: 0},
            {x: 1, y: 1},{x: 3, y: 1},{x: 4, y: 1},{x: 5, y: 1},{x: 6, y: 1},
            {x: 1, y: 2},{x: 6, y: 2},
            {x: 1, y: 3},{x: 3, y: 3},{x: 4, y: 3},{x: 5, y: 3},{x: 6, y: 3},
            {x: 1, y: 4},{x: 6, y: 4},
            {x: 1, y: 5},{x: 3, y: 5},{x: 4, y: 5},{x: 5, y: 5},{x: 6, y: 5}
        ],
        trapBuildingLayout: [],
        fenceLayout: [],
        doorLayout: [{x: 7, y: 3, n: 1},{x: 7, y: 4, n: 2}],
        initialKeyALocations: [{x: 3, y: 4}],
        initialKeyBLocations: [{x: 3, y: 2}],
        desktopLayout: [
            {x: 4,y: 0,n: 1, text: ""},
            {x: 3,y: 0,n: 2, text: ""},
        ],
        bios: [{x: 2, y: 4},{x: 2, y: 2},{x: 2, y: 1}],
        initialMoneyLocations: [],
        initialDuckLocations: [],
        //initialVacLocations: [{x: 7, y: 6, prSide: .01, prEff: 0.99}],
        initialMedLocations: [
            {x: 4, y: 2, prSide: .01, prEff: 0.99},
            {x: 5, y: 2, prSide: .01, prEff: 0.99},
            {x: 4, y: 4, prSide: .01, prEff: 0.99},
            {x: 5, y: 4, prSide: .01, prEff: 0.99},
            {x: 5, y: 0, prSide: .01, prEff: 0.99},
            {x: 3, y: 7, prSide: .01, prEff: 0.99},
        ],
        //initialJacketLocations: [{x: 4, y: 0, prEff: 0.3}],
        deviceLocations: { 'R': [ ], 'E': [ ], 'T': [ ] },
        infoLocations: [{x: 0, y: 7, text: "The medication can cure if you get infected. (A new disease needs new medications.) It's 99% that a given medication works, and it's 1% that the side effects kill you."}]
    },
    // Level 17: Infected otherself's key
    {
        playerPos: { x: 1, y: 1 },
        flagLocation: { x: 4, y: 0 },
        roadLayout: [],
        wallLayout: [
            {x: 0, y: 5},{x: 1, y: 5},{x: 2, y: 5},{x: 3, y: 5},{x: 4, y: 5},{x: 5, y: 5},{x: 7, y: 5},
            {x: 0, y: 7},{x: 1, y: 7},{x: 2, y: 7},{x: 3, y: 7},{x: 4, y: 7},{x: 5, y: 7},{x: 6, y: 7},{x: 7, y: 7},
            {x: 0, y: 6},{x: 7, y: 6},
            {x: 3, y: 0},//{x: 5, y: 0},
            {x: 3, y: 1},{x: 5, y: 1}
        ],
        trapBuildingLayout: [{x: 5, y: 0}],
        fenceLayout: [],
        initialMoneyLocations: [],
        doorLayout: [{x: 4, y: 1, n: 2}],
        desktopLayout: [{x: 7, y: 0, n: 2}],
        initialKeyBLocations: [{x: 1, y: 6}],
        bios: [{x: 4, y: 6},{x: 3, y: 6}],
        initialDuckLocations: [],
        playerCar: { x: -1, y: -1, occupied: false },
        deviceLocations: { 'R': [{x: 1, y: 3}], 'E': [{x: 1, y: 4}], 'T': [ ] },
        infoLocations: []
    },
    // Level 18: The PCR test
    {
        playerPos: { x: 5, y: 3 },
        flagLocation: { x: 7, y: 3 },
        roadLayout: [],
        wallLayout: [
            {x: 0, y: 0},{x: 1, y: 0},{x: 2, y: 0},
            {x: 0, y: 1},{x: 1, y: 1},{x: 2, y: 1},
            {x: 0, y: 2},{x: 1, y: 2},{x: 2, y: 2},
            
            {x: 0, y: 5},{x: 1, y: 5},{x: 2, y: 5},
            {x: 0, y: 6},{x: 1, y: 6},{x: 2, y: 6},
            {x: 0, y: 7},{x: 1, y: 7},{x: 2, y: 7},
            
            {x: 5, y: 0},{x: 6, y: 0},{x: 7, y: 0},
            {x: 5, y: 1},{x: 6, y: 1},{x: 7, y: 1},
            {x: 5, y: 2},{x: 6, y: 2},{x: 7, y: 2},
            
            {x: 5, y: 5},{x: 6, y: 5},{x: 7, y: 5},
            {x: 5, y: 6},{x: 6, y: 6},{x: 7, y: 6},
            {x: 5, y: 7},{x: 6, y: 7},{x: 7, y: 7}
        ],
        trapBuildingLayout: [],
        fenceLayout: [],
        initialMoneyLocations: [{x: 0, y: 4}],
        initialKeyALocations: [{x: 3, y: 7}],
        doorLayout: [{x: 6, y: 4, n: 1},{x: 6, y: 3, n: 1}],
        desktopLayout: [{x: 4, y: 0, n: 1}],
        testers: [{x: 4, y: 4}],
        bios: [{x: 3, y: 0},{x: 4, y: 7}],
        initialDuckLocations: [],
        playerCar: { x: -1, y: -1, occupied: false },
        initialMedLocations: [
            {x: 0, y: 3, prSide: .01, prEff: 1},
            {x: 3, y: 2, prSide: .01, prEff: 0.66},
            {x: 3, y: 5, prSide: .01, prEff: 0.66}
        ],
        deviceLocations: { 'R': [ ], 'E': [ ], 'T': [ ] },
        infoLocations: [{x: 3, y: 3, text: "The two pills can cure your disease (independently) with 65%. The pill next to the banknote has 99% efficiency but you have only one piece of that. So you can use the PCR to test if the weaker ones could not cure you (press \"P\"). You have only 1% to die in side effects."}]
    },
    // Level 19: The Chronogram
    {
        playerPos: { x: 5, y: 7 },
        flagLocation: { x: 4, y: 1 },
        roadLayout: [],
        wallLayout: [
            {x: 1, y: 0},{x: 1, y: 1},{x: 1, y: 2},{x: 1, y: 3},{x: 1, y: 4},{x: 1, y: 5},{x: 1, y: 6},
            {x: 6, y: 0},{x: 6, y: 1},{x: 6, y: 2},{x: 6, y: 3},{x: 6, y: 4},{x: 6, y: 5},{x: 6, y: 6},
            {x: 2, y: 6},{x: 4, y: 6},{x: 5, y: 6},
            {x: 2, y: 4},{x: 4, y: 4},{x: 5, y: 4}
        ],
        trapBuildingLayout: [],
        fenceLayout: [{x: 2, y: 5},{x: 4, y: 5},{x: 5, y: 5}],
        initialMoneyLocations: [],
        doorLayout: [{x: 3, y: 6, n: 3},{x: 3, y: 5, n: 3},{x: 3, y: 4, n: 3}],
        initialKeyCLocations: [{x: 7, y: 2}],
        desktopLayout: [{x: 3, y: 7, n: 3},{x: 3, y: 3, n: 3}],
        initialDuckLocations: [],                           
        initialStrangerBlackLocations: [
            { x: 0, y: 0, dx: 0, dy: 1, isDead: false },
            { x: 0, y: 1, dx: 0, dy: 1, isDead: false }
        ],
        playerCar: { x: -1, y: -1, occupied: false },
        deviceLocations: { 'R': [ ], 'E': [ ], 'T': [{x: 0, y: 7}] },
        infoLocations: [{x: 1, y: 7, text: "That device on the corner is a chronogram. Get it, run to the station, activate it by pressing \"C\", then get the key. Until that the secret police is about the catch you, so you have to send the key back in the time to your pre-self with the chronogram. Hurry!"}]
    },
    // Level 20: The Dilemma (infected dog)
    {
        playerPos: { x: 4, y: 4 },
        flagLocation: { x: 0, y: 3 },
        roadLayout: [],
        wallLayout: [
            {x: 5, y: 0},{x: 5, y: 1},{x: 5, y: 2},{x: 5, y: 3},{x: 5, y: 4},{x: 5, y: 5},{x: 5, y: 6},{x: 5, y: 7},
            {x: 7, y: 2},{x: 7, y: 3},{x: 7, y: 4},{x: 7, y: 5},
            {x: 0, y: 1},{x: 1, y: 1},{x: 2, y: 1},
            {x: 0, y: 6},{x: 1, y: 6},{x: 2, y: 6}
        ],
        trapBuildingLayout: [],
        fenceLayout: [],
        initialMoneyLocations: [],
        doorLayout: [
            {x: 1, y: 2, n: 2},{x: 1, y: 3, n: 2},{x: 1, y: 4, n: 2},{x: 1, y: 5, n: 2},
            {x: 6, y: 2, n: 1},{x: 6, y: 5, n: 3}
        ],
        desktopLayout: [{x: 2, y: 4, n: 2},{x: 4, y: 2, n: 1},{x: 4, y: 5, n: 3}],
        initialMedLocations: [
            {x: 6, y: 1, prSide: .01, prEff: 0.99},{x: 4, y: 1, prSide: .01, prEff: 0.99},
            {x: 6, y: 6, prSide: .01, prEff: 0.99},{x: 4, y: 6, prSide: .01, prEff: 0.99}
        ],
        bios: [{x: 2, y: 7},{x: 2, y: 0}],
        initialKeyBLocations: [{x: 0, y: 0},{x: 0, y: 7}],
        initialKeyALocations: [{x: 3, y: 2}],
        initialKeyCLocations: [{x: 3, y: 5}],
        initialDuckLocations: [{x: 6, y: 4, dx: 0, dy: -1, isDead: false}],
        playerCar: { x: -1, y: -1, occupied: false },
        deviceLocations: { 'R': [ ], 'E': [ ], 'T': [ ] },
        infoLocations: [{x: 3, y: 3, text: "Poor dog is infected :( But one (and only one) of the medications can cure it without side effects. You can count with similar efficiency on your side, too. Decide which way you wish to leave the dog."}]
    },
    
    
    // Level 22: The Dilemma (healthy dog)
    {
        playerPos: { x: 4, y: 4 },
        flagLocation: { x: 1, y: 0 },
        roadLayout: [],
        wallLayout: [
            {x: 5, y: 0},{x: 5, y: 1},{x: 5, y: 2},{x: 5, y: 3},{x: 5, y: 4},{x: 5, y: 5},{x: 5, y: 6},{x: 5, y: 7},
            {x: 7, y: 2},{x: 7, y: 3},{x: 7, y: 4},{x: 7, y: 5},
            {x: 2, y: 0},{x: 2, y: 1},{x: 2, y: 2},{x: 2, y: 3},{x: 2, y: 4},{x: 2, y: 5},{x: 2, y: 6},
            {x: 1, y: 6},{x: 1, y: 2}
        ],
        trapBuildingLayout: [{x: 0, y: 4}],
        fenceLayout: [],
        initialMoneyLocations: [],
        doorLayout: [
            {x: 6, y: 2, n: 1},{x: 6, y: 5, n: 3}
        ],
        desktopLayout: [{x: 4, y: 2, n: 1},{x: 4, y: 5, n: 3}],
        initialMedLocations: [
            {x: 6, y: 1, prSide: .01, prEff: 0.99},{x: 6, y: 6, prSide: .01, prEff: 0.99}
        ],
        initialVacLocations: [
            {x: 4, y: 1, prSide: .01, prEff: 0.99},{x: 4, y: 6, prSide: .01, prEff: 0.99}
        ],
        bios: [{x: 1, y: 7},{x: 1, y: 5},{x: 0, y: 3}],
        initialKeyALocations: [{x: 3, y: 2}],
        initialKeyCLocations: [{x: 3, y: 5}],
        initialDuckLocations: [{x: 6, y: 4, dx: 0, dy: -1, isDead: false}],
        playerCar: { x: -1, y: -1, occupied: false },
        deviceLocations: { 'R': [{x: 3, y: 0}], 'E': [ ], 'T': [ ] },
        infoLocations: [{x: 3, y: 3, text: "That dog is healthy. But you have to go through an infectious area. One of the vaccination give you 95% protection, the other one unintentionally kills you with 80%. On the other side the medications has the same effects that you can test on that dog if you want."}]
    },
    // Level i: 
    {
        playerPos: { x: 0, y: 1 },
        flagLocation: { x: 6, y: 6 },
        roadLayout: [],
        wallLayout: [],
        trapBuildingLayout: [],
        fenceLayout: [],
        initialMoneyLocations: [],
        doorLayout: [],
        desktopLayout: [],
        initialDuckLocations: [],
        playerCar: { x: -1, y: -1, occupied: false },
        deviceLocations: { 'R': [ ], 'E': [ ], 'T': [ ] },
        infoLocations: []
    }
];

