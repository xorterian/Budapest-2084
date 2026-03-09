delete _;
var _ = () => {
    const currentThreadId = threadIds[currentThreadIndex];
    if (isGameOver || !threadHistory[currentThreadId] || threadHistory[currentThreadId].status === 'dead') {
        board.innerHTML = '';
        return;
    }

    board.innerHTML = '';
    const currentHistory = threadHistory[currentThreadId].history;
    //const currentState = currentHistory[currentHistory.length - 1];//?
    const currentState = threadHistory[currentThreadId].history.slice(-1)[0];
    
    if (!currentState) return;

    for (let row = 0; row < GRID_SIZE; row++) {
        for (let col = 0; col < GRID_SIZE; col++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell', currentState.grid[row][col]);
            
            if (currentState.grid[row][col] === CELL_TYPES.trapBuilding) {
                cell.classList.remove(CELL_TYPES.trapBuilding);
                cell.classList.add(CELL_TYPES.wall);
            }

            const isDeadStrangerCell = currentState.deadStrangers.some(s => s.x === col && s.y === row);
            if (isDeadStrangerCell) cell.classList.add('dead-stranger-cell');
            
            const isDeadDuckCell = currentState.deadDucks.some(d => d.x === col && d.y === row);
            if (isDeadDuckCell) cell.classList.add('dead-stranger-cell');
            
            if (currentState.grid[row][col] === CELL_TYPES.flag) {
                cell.classList.remove(CELL_TYPES.flag);
                cell.classList.add('grass');
            }

            const isHouse = currentState.houseLocations.some(h => h.x === col && h.y === row);
            if (isHouse) {
                const houseIcon = document.createElement('i');
                houseIcon.classList.add('fas', 'fa-house');
                cell.appendChild(houseIcon);
            }
            
            if (currentState.grid[row][col] === CELL_TYPES.wall || currentState.grid[row][col] === CELL_TYPES.trapBuilding) {
                const wallIcon = document.createElement('i');
                wallIcon.classList.add('fas', 'fa-building', 'wall-icon');
                cell.appendChild(wallIcon);
            }
            
            if (currentState.grid[row][col] === CELL_TYPES.doorA) {
                const doorIcon = document.createElement('i');
                doorIcon.classList.add('fas', 'fa-door-closed', 'door-a-icon');
                cell.appendChild(doorIcon);
            }
            
            if (currentState.grid[row][col] === CELL_TYPES.doorAOpen) {
                const doorIcon = document.createElement('i');
                doorIcon.classList.add('fas', 'fa-door-closed', 'door-a-open-icon');
                cell.appendChild(doorIcon);
            }
            
            if (currentState.grid[row][col] === CELL_TYPES.doorB) {
                const doorIcon = document.createElement('i');
                doorIcon.classList.add('fas', 'fa-door-closed', 'door-b-icon');
                cell.appendChild(doorIcon);
            }
            
            if (currentState.grid[row][col] === CELL_TYPES.doorBOpen) {
                const doorIcon = document.createElement('i');
                doorIcon.classList.add('fas', 'fa-door-closed', 'door-b-open-icon');
                cell.appendChild(doorIcon);
            }
            
            if (currentState.grid[row][col] === CELL_TYPES.doorC) {
                const doorIcon = document.createElement('i');
                doorIcon.classList.add('fas', 'fa-door-closed', 'door-c-icon');
                cell.appendChild(doorIcon);
            }
            
            if (currentState.grid[row][col] === CELL_TYPES.doorCOpen) {
                const doorIcon = document.createElement('i');
                doorIcon.classList.add('fas', 'fa-door-closed', 'door-c-open-icon');
                cell.appendChild(doorIcon);
            }
            
            if (currentState.grid[row][col] === CELL_TYPES.desktop) {
                const desktopIcon = document.createElement('i');
                desktopIcon.classList.add('fas', 'fa-desktop', 'desktop-icon');
                cell.appendChild(desktopIcon);
            }

            if (currentState.grid[row][col] === CELL_TYPES.fence) {
                const fenceIcon = document.createElement('i');
                fenceIcon.classList.add('fas', 'fa-ruler-horizontal', 'fence-icon');
                cell.appendChild(fenceIcon);
            }

            if (currentState.grid[row][col] === CELL_TYPES.flag) {
                const flagIcon = document.createElement('i');
                flagIcon.classList.add('fas', 'fa-flag-checkered', 'flag-icon');
                cell.appendChild(flagIcon);
            }
            
            if (currentState.devicesOnBoard.money.some(m => m.x === col && m.y === row)) {
                 const moneyIcon = document.createElement('i');
                 moneyIcon.classList.add('fas', 'fa-money-bill-wave', 'money-icon');
                 cell.appendChild(moneyIcon);
            }

            if (currentState.devicesOnBoard.keyA.some(k => k.x === col && k.y === row)) {
                 const keyIcon = document.createElement('i');
                 keyIcon.classList.add('fas', 'fa-key', 'key-a-icon');
                 cell.appendChild(keyIcon);
            }

            if (currentState.devicesOnBoard.keyB.some(k => k.x === col && k.y === row)) {
                 const keyIcon = document.createElement('i');
                 keyIcon.classList.add('fas', 'fa-key', 'key-b-icon');
                 cell.appendChild(keyIcon);
            }

            if (currentState.devicesOnBoard.keyC.some(k => k.x === col && k.y === row)) {
                 const keyIcon = document.createElement('i');
                 keyIcon.classList.add('fas', 'fa-key', 'key-c-icon');
                 cell.appendChild(keyIcon);
            }
            
            if (currentState.devicesOnBoard.R.some(m => m.x === col && m.y === row)) {
                 const RanIcon = document.createElement('i');
                 RanIcon.classList.add('fas', 'fa-cube', 'item-r-icon');
                 cell.appendChild(RanIcon);
            }
            if (currentState.devicesOnBoard.E.some(m => m.x === col && m.y === row)) {
                 const EigIcon = document.createElement('i');
                 EigIcon.classList.add('fas', 'fa-atom', 'item-e-icon');
                 cell.appendChild(EigIcon);
            }
            if (currentState.devicesOnBoard.T.some(m => m.x === col && m.y === row)) {
                 const ChronIcon = document.createElement('i');
                 ChronIcon.classList.add('fas', 'fa-hourglass-half', 'item-t-icon');
                 cell.appendChild(ChronIcon);
            }
            if (currentState.devicesOnBoard.vac.some(m => m.x === col && m.y === row)) {
                 const vacIcon = document.createElement('i');
                 vacIcon.classList.add('fas', 'fa-syringe', 'item-vac-icon');
                 cell.appendChild(vacIcon);
            }
            if (currentState.devicesOnBoard.med.some(m => m.x === col && m.y === row)) {
                 const medIcon = document.createElement('i');
                 medIcon.classList.add('fas', 'fa-tablets', 'item-med-icon');
                 cell.appendChild(medIcon);
            }
            if (currentState.devicesOnBoard.jacket.some(m => m.x === col && m.y === row)) {
                 const jacIcon = document.createElement('i');
                 jacIcon.classList.add('fas', 'fa-user-astronaut', 'item-jacket-icon');
                 cell.appendChild(jacIcon);
            }
            /*if (currentState.grid[row][col] === CELL_TYPES.tester && currentState.tester) {
                const testIcon = document.createElement('i');
                testIcon.classList.add('fas', 'fa-microscope', 'tester-icon');
                cell.appendChild(testIcon);
            }*/

            const explosion = currentState.explosions.find(ex => ex.x === col && ex.y === row);
            if (explosion) {
                switch(explosion.typ){
                    case 'radio': cell.classList.add('explosion-radio-cell');break;
                    case 'bio': cell.classList.add('explosion-bio-cell');break;
                    default: cell.classList.add('explosion-cell');break;
                }
                
            }
            
            if (currentState.infoLocations.some(inf => inf.x === col && inf.y === row)) {
                 const infoIcon = document.createElement('i');
                 infoIcon.classList.add('fas', 'fa-info-circle', 'info-icon');
                 cell.appendChild(infoIcon);
            }
            //...
            
            board.appendChild(cell);
        }
    }

    if (currentHistory.length > 1) {
        const previousState = currentHistory[currentHistory.length - 2];
        const previousPlayer = document.createElement('i');
        previousPlayer.classList.add('fas', 'fa-person', 'past-player-one-step-back');
        const prevCell = board.children[previousState.playerPos.y * GRID_SIZE + previousState.playerPos.x];
        if(prevCell) prevCell.appendChild(previousPlayer);
    }

    const otherLivingThreads = threadIds.filter(id => id !== currentThreadId && threadHistory[id].status === 'alive');
    for (const otherThreadId of otherLivingThreads) {
        if (threadHistory[otherThreadId].history.length > 0) {
            const otherState = threadHistory[otherThreadId].history[threadHistory[otherThreadId].history.length - 1];
            const otherPlayerIcon = document.createElement('i');
            otherPlayerIcon.classList.add('fas', 'fa-person', 'other-thread-player');
            const otherCell = board.children[otherState.playerPos.y * GRID_SIZE + otherState.playerPos.x];
            if(otherCell) otherCell.appendChild(otherPlayerIcon);
        }
    }
    
    drawEntities(currentState);
    
    updateDevicePanel(currentState);
    updateStatsDisplay(currentState);
    updateThreadNavButtons();
}

drawGridString = _.toString();
delete _;
