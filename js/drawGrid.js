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
            //cell.style="";
            cell.classList.add('grid-cell', currentState.grid[row][col]);
            
            if (currentState.grid[row][col] === CELL_TYPES.trapBuilding) {
                cell.classList.remove(CELL_TYPES.trapBuilding);
                cell.classList.add(CELL_TYPES.wall);
            }

            const isDeadStrangerCell = currentState.deadStrangers.some(s => s.x === col && s.y === row);
            if (isDeadStrangerCell) cell.style.cssText+='transform: rotate(90deg);';
            
            const isDeadDuckCell = currentState.deadDucks.some(d => d.x === col && d.y === row);
            if (isDeadDuckCell) cell.style.cssText+='transform: rotate(90deg);';
            
            if (currentState.grid[row][col] === CELL_TYPES.flag) {
                cell.classList.remove(CELL_TYPES.flag);
                cell.classList.add('grass');
            }

            const isHouse = currentState.houseLocations.some(h => h.x === col && h.y === row);
            if (isHouse) {
                const houseIcon = document.createElement('img');
                houseIcon.src="css/svg/house.svg";
                //houseIcon.classList.add('fas', 'fa-house');
                cell.appendChild(houseIcon);
            }
            
            if (currentState.grid[row][col] === CELL_TYPES.wall || currentState.grid[row][col] === CELL_TYPES.trapBuilding) {
                const wallIcon = document.createElement('img');
                wallIcon.src="css/svg/building.svg";
                //wallIcon.classList.add('fas', 'fa-building', 'wall-icon');
                cell.appendChild(wallIcon);
            }
            
            if (currentState.grid[row][col] === CELL_TYPES.doorA) {
                const doorIcon = document.createElement('img');
                doorIcon.src="css/svg/doorA.svg";
                doorIcon.style.opacity="0.8";
                //doorIcon.classList.add('fas', 'fa-door-closed', 'door-a-icon');
                cell.appendChild(doorIcon);
            }
            
            if (currentState.grid[row][col] === CELL_TYPES.doorAOpen) {
                const doorIcon = document.createElement('img');
                doorIcon.src="css/svg/doorA.svg";
                doorIcon.style.opacity="0.4";
                //doorIcon.classList.add('fas', 'fa-door-closed', 'door-a-open-icon');
                cell.appendChild(doorIcon);
            }
            
            if (currentState.grid[row][col] === CELL_TYPES.doorB) {
                const doorIcon = document.createElement('img');
                doorIcon.src="css/svg/doorB.svg";
                doorIcon.style.opacity="0.8";
                //doorIcon.classList.add('fas', 'fa-door-closed', 'door-b-icon');
                cell.appendChild(doorIcon);
            }
            
            if (currentState.grid[row][col] === CELL_TYPES.doorBOpen) {
                const doorIcon = document.createElement('img');
                doorIcon.src="css/svg/doorB.svg";
                doorIcon.style.opacity="0.4";//TODO Is this correct?
                //doorIcon.classList.add('fas', 'fa-door-closed', 'door-b-open-icon');
                cell.appendChild(doorIcon);
            }
            
            if (currentState.grid[row][col] === CELL_TYPES.doorC) {
                const doorIcon = document.createElement('img');
                doorIcon.src="css/svg/doorC.svg";
                doorIcon.style.opacity="0.8";
                //doorIcon.classList.add('fas', 'fa-door-closed', 'door-c-icon');
                cell.appendChild(doorIcon);
            }
            
            if (currentState.grid[row][col] === CELL_TYPES.doorCOpen) {
                const doorIcon = document.createElement('img');
                doorIcon.src="css/svg/doorC.svg";
                doorIcon.style.opacity="0.4";
                //doorIcon.classList.add('fas', 'fa-door-closed', 'door-c-open-icon');
                cell.appendChild(doorIcon);
            }
            
            if (currentState.grid[row][col] === CELL_TYPES.desktop) {
                const desktopIcon = document.createElement('img');
                desktopIcon.src="css/svg/desktop.svg";
                cell.appendChild(desktopIcon);
            }

            if (currentState.grid[row][col] === CELL_TYPES.fence) {
                const fenceIcon = document.createElement('img');
                fenceIcon.src="css/svg/ruler-horizontal.svg";
                cell.appendChild(fenceIcon);
            }

            if (currentState.grid[row][col] === CELL_TYPES.flag) {
                const flagIcon = document.createElement('img');
                flagIcon.src="css/svg/flag-checkered.svg";
                cell.appendChild(flagIcon);
            }
            
            if (currentState.devicesOnBoard.money.some(m => m.x === col && m.y === row)) {
                 const moneyIcon = document.createElement('img');
                 moneyIcon.src="css/svg/money-bill-wave.svg";
                 //moneyIcon.classList.add('fas', 'fa-money-bill-wave', 'money-icon');
                 cell.appendChild(moneyIcon);
            }

            if (currentState.devicesOnBoard.keyA.some(k => k.x === col && k.y === row)) {
                 const keyIcon = document.createElement('img');
                 keyIcon.src="css/svg/keyA.svg";
                 //keyIcon.classList.add('fas', 'fa-key', 'key-a-icon');
                 cell.appendChild(keyIcon);
            }

            if (currentState.devicesOnBoard.keyB.some(k => k.x === col && k.y === row)) {
                 const keyIcon = document.createElement('img');
                 keyIcon.src="css/svg/keyB.svg";
                 keyIcon.classList.add('fas', 'fa-key', 'key-b-icon');
                 cell.appendChild(keyIcon);
            }

            if (currentState.devicesOnBoard.keyC.some(k => k.x === col && k.y === row)) {
                 const keyIcon = document.createElement('img');
                 keyIcon.src="css/svg/keyC.svg";
                 //keyIcon.classList.add('fas', 'fa-key', 'key-c-icon');
                 cell.appendChild(keyIcon);
            }
            
            if (currentState.devicesOnBoard.R.some(m => m.x === col && m.y === row)) {
                 const RanIcon = document.createElement('img');
                 RanIcon.src="css/svg/cube.svg";
                 //RanIcon.classList.add('fas', 'fa-cube', 'item-r-icon');
                 cell.appendChild(RanIcon);
            }
            if (currentState.devicesOnBoard.E.some(m => m.x === col && m.y === row)) {
                 const EigIcon = document.createElement('img');
                 EigIcon.src="css/svg/atom.svg";
                 //EigIcon.classList.add('fas', 'fa-atom', 'item-e-icon');
                 cell.appendChild(EigIcon);
            }
            if (currentState.devicesOnBoard.T.some(m => m.x === col && m.y === row)) {
                 const ChronIcon = document.createElement('img');
                 ChronIcon.src="css/svg/hourglass-half.svg";
                 //ChronIcon.classList.add('fas', 'fa-hourglass-half', 'item-t-icon');
                 cell.appendChild(ChronIcon);
            }

            const explosion = currentState.explosions.find(ex => ex.x === col && ex.y === row);
            if (explosion) {
                switch(explosion.typ){
                    case 'radio': cell.classList.add('explosion-radio-cell');break;
                    case 'bio': cell.classList.add('explosion-bio-cell');break;
                    default: cell.classList.add('explosion-cell');break;
                }
                
            }
            
            if (currentState.infoLocations.some(inf => inf.x === col && inf.y === row)) {
                 const infoIcon = document.createElement('img');
                 infoIcon.src="css/svg/info-circle.svg";
                 //infoIcon.classList.add('fas', 'fa-info-circle', 'info-icon');
                 cell.appendChild(infoIcon);
            }
            //...
            
            board.appendChild(cell);
        }
    }

    if (currentHistory.length > 1) {
        const previousState = currentHistory[currentHistory.length - 2];
        const previousPlayer = document.createElement('img');
        previousPlayer.src="css/svg/person.svg";
        previousPlayer.style.opacity="0.6";
        //previousPlayer.classList.add('fas', 'fa-person', 'past-player-one-step-back');
        const prevCell = board.children[previousState.playerPos.y * GRID_SIZE + previousState.playerPos.x];
        if(prevCell) prevCell.appendChild(previousPlayer);
    }

    const otherLivingThreads = threadIds.filter(id => id !== currentThreadId && threadHistory[id].status === 'alive');
    for (const otherThreadId of otherLivingThreads) {
        if (threadHistory[otherThreadId].history.length > 0) {
            const otherState = threadHistory[otherThreadId].history[threadHistory[otherThreadId].history.length - 1];
            const otherPlayerIcon = document.createElement('img');
            otherPlayerIcon.src="css/svg/person.svg";
            otherPlayerIcon.style.opacity="0.3";
            //otherPlayerIcon.classList.add('fas', 'fa-person', 'other-thread-player');
            const otherCell = board.children[otherState.playerPos.y * GRID_SIZE + otherState.playerPos.x];
            if(otherCell) otherCell.appendChild(otherPlayerIcon);
        }
    }
    
    drawEntities(currentState);
    updateDevicePanel(currentState);
    updateStatsDisplay(currentState);
    updateThreadNavButtons();
    
    
    function rearrangeScreen() {
        const main = document.getElementById('main-content-area');
        const board = document.getElementById('game-board');
        const panel = document.getElementById('device-panel');
        document.body.style.width=window.screen.width+'px';
        document.body.style.height=window.screen.height+'px';
        if (screen.orientation.type.includes('landscape')) {
            main.style.cssText.replace('flex-direction: column;','');
            main.style.cssText+='flex-direction: row;';
            x=String(Number(document.body.style.height.replace('px',''))*.75)+"px";
            board.style.width=x; board.style.height=x;
            panel.style.width="fit-content";
            panel.style.heigth=x;
        } else {
            main.style.cssText.replace('flex-direction: row;','');
            main.style.cssText+='flex-direction: column;';
            x=String(Number(document.body.style.width.replace('px',''))*.75)+"px";
            board.style.heigth=x; board.style.width=x;
            panel.style.width="fit-content";
            panel.style.heigth="auto";
        }
        x=String(Number(board.style.width.replace('px',''))/8)+"px";
        for(let i=0;i<64;i++){
            document.getElementsByClassName("grid-cell")[i].style.width=x;
            document.getElementsByClassName("grid-cell")[i].style.height=x;
        }
    }
    rearrangeScreen();
}

drawGridString = _.toString();
delete _;
