delete _;
var _ = (currentState) => {
    const carCell = board.children[currentState.playerCar.y * GRID_SIZE + currentState.playerCar.x];
    if (carCell) {
        const carIcon = document.createElement('i');
        carIcon.classList.add('fas', 'fa-car', 'player-car-icon');
        carCell.appendChild(carIcon);
    }

    const { x, y } = currentState.playerPos;
    if (y >= 0 && y < GRID_SIZE && x >= 0 && x < GRID_SIZE) {
        const playerCell = board.children[y * GRID_SIZE + x];
        if (playerCell) {
            if (!currentState.isDriving) {
                const playerIcon = document.createElement('i');
                playerIcon.classList.add('fas', 'fa-person', 'player-icon');
                playerCell.appendChild(playerIcon);
            } else if (playerCell === carCell) {
                const playerIcon = document.createElement('i');
                playerIcon.classList.add('fas', 'fa-person', 'player-icon');
                playerCell.appendChild(playerIcon);
            }
            if (currentState.playerStatus === 'dead') playerCell.classList.add('dead-player-cell');
        }
    }
    
    currentState.cars.forEach(car => {
        const cell = board.children[car.y * GRID_SIZE + car.x];
        if(cell) {
            const carIcon = document.createElement('i');
            carIcon.classList.add('fas', 'fa-car', 'car-icon');
            cell.appendChild(carIcon);
        }
    });

    currentState.buses.forEach(bus => {
        const cell = board.children[bus.y * GRID_SIZE + bus.x];
        if(cell) {
            const busIcon = document.createElement('i');
            busIcon.classList.add('fas', 'fa-bus', 'bus-icon');
            cell.appendChild(busIcon);
        }
    });

    // Stranger civil
    currentState.strangers.forEach(stranger => {
        const cell = board.children[stranger.y * GRID_SIZE + stranger.x];
        if(cell) {
            const strangerIcon = document.createElement('i');
            strangerIcon.classList.add('fas', 'fa-person-walking', 'stranger-icon');
            if (stranger.isDead) strangerIcon.classList.add('dead-stranger-icon');
            cell.appendChild(strangerIcon);
        }
    });
    
    // Police officer
    currentState.strangers_blue.forEach(stranger_blue => {
        const cell = board.children[stranger_blue.y * GRID_SIZE + stranger_blue.x];
        if(cell) {
            const strangerIcon = document.createElement('i');
            strangerIcon.classList.add('fas', 'fa-person-walking', 'stranger-blue-icon');
            if (stranger_blue.isDead) strangerIcon.classList.add('dead-stranger-icon');
            cell.appendChild(strangerIcon);
        }
    });
    
    // Secret police
    currentState.strangers_black.forEach(stranger_black => {
        const cell = board.children[stranger_black.y * GRID_SIZE + stranger_black.x];
        if(cell) {
            const strangerIcon = document.createElement('i');
            strangerIcon.classList.add('fas', 'fa-person-walking', 'stranger-black-icon');
            if (stranger_black.isDead) strangerIcon.classList.add('dead-stranger-icon');
            cell.appendChild(strangerIcon);
        }
    });
    
    // Dealer
    currentState.strangers_gold.forEach(stranger_gold => {
        const cell = board.children[stranger_gold.y * GRID_SIZE + stranger_gold.x];
        if(cell) {
            const strangerIcon = document.createElement('i');
            strangerIcon.classList.add('fas', 'fa-person-walking', 'stranger-gold-icon');
            if (stranger_gold.isDead) strangerIcon.classList.add('dead-stranger-icon');
            cell.appendChild(strangerIcon);
        }
    });
    
    currentState.ducks.forEach(duck => {
        const cell = board.children[duck.y * GRID_SIZE + duck.x];
        if(cell) {
            const duckIcon = document.createElement('i');
            duckIcon.classList.add('fas', 'fa-dog', 'duck-icon');
            if (duck.isDead) duckIcon.classList.add('dead-duck-icon');
            cell.appendChild(duckIcon);
        }
    });

    currentState.bombs.forEach(bomb => {
        const cell = board.children[bomb.y * GRID_SIZE + bomb.x];
        if(cell) {
            const bombIcon = document.createElement('i');
            bombIcon.classList.add('fas', 'fa-bomb', 'bomb-icon');
            cell.appendChild(bombIcon);
        }
    });
    
    currentState.radios.forEach(r => {
        const cell = board.children[r.y * GRID_SIZE + r.x];
        if(cell) {
            const rIcon = document.createElement('i');
            rIcon.classList.add('fas', 'fa-radiation', 'radio-icon');
            cell.appendChild(rIcon);
        }
    });
    
    currentState.bios.forEach(r => {
        const cell = board.children[r.y * GRID_SIZE + r.x];
        if(cell) {
            const rIcon = document.createElement('i');
            rIcon.classList.add('fas', 'fa-biohazard', 'bio-icon');
            cell.appendChild(rIcon);
        }
    });
    
    currentState.testers.forEach(r => {
        const cell = board.children[r.y * GRID_SIZE + r.x];
        if(cell) {
            const rIcon = document.createElement('i');
            rIcon.classList.add('fas', 'fa-microscope', 'tester-icon');
            cell.appendChild(rIcon);
        }
    });
    
    currentState.devicesOnBoard.vac.forEach(r => {
        const cell = board.children[r.y * GRID_SIZE + r.x];
        if(cell) {
            const rIcon = document.createElement('i');
            if (r.color) {
                rIcon.classList.add('fas', 'fa-syringe');
                rIcon.style = "opacity: .7; color: " + r.color + ";";
            } else {
                rIcon.classList.add('fas', 'fa-syringe', 'item-vac-icon');
            }
            cell.appendChild(rIcon);
        }
    });
    currentState.devicesOnBoard.med.forEach(r => {
        const cell = board.children[r.y * GRID_SIZE + r.x];
        if(cell) {
            const rIcon = document.createElement('i');
            if (r.color) {
                rIcon.classList.add('fas', 'fa-tablets');
                rIcon.style = "opacity: .7; color: " + r.color + ";";
            } else {
                rIcon.classList.add('fas', 'fa-tablets', 'item-med-icon');
            }
            cell.appendChild(rIcon);
        }
    });
    currentState.devicesOnBoard.jacket.forEach(r => {
        const cell = board.children[r.y * GRID_SIZE + r.x];
        if(cell) {
            const rIcon = document.createElement('i');
            if (r.color) {
                rIcon.classList.add('fas', 'fa-user-astronaut');
                rIcon.style = "opacity: .7; color: " + r.color + ";";
            } else {
                rIcon.classList.add('fas', 'fa-user-astronaut', 'item-jacket-icon');
            }
            cell.appendChild(rIcon);
        }
    });
    
}

drawEntitiesString = _.toString();
delete _;
