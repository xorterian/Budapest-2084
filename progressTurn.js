delete _;
var _ = () => {
if (isGameOver) return;
const currentThreadId = threadIds[currentThreadIndex];
if (!threadHistory[currentThreadId] || threadHistory[currentThreadId].status === 'dead') return;

const history = threadHistory[currentThreadId].history;
let updatedState = deepClone(history.slice(-1)[0]);

updatedState.explosions = [];

if (playerDesiredMove) {
    let { x: dx, y: dy } = playerDesiredMove;
    let newX = updatedState.playerPos.x + dx;
    let newY = updatedState.playerPos.y + dy;
    if (!isObstacle(newX, newY, updatedState.grid)) {
        updatedState.playerPos.x = newX;
        updatedState.playerPos.y = newY;
        updatedState.lastMoveDirection = { x: dx, y: dy };
    }
    if (updatedState.isDriving) {
        updatedState.playerCar.x = updatedState.playerPos.x;
        updatedState.playerCar.y = updatedState.playerPos.y;
    }
    playerDesiredMove = null;
}

if (updatedState.playerStatus !== 'dead') {
    updatedState.cars.forEach(c => {
        c.x += c.dx || 0;
        if (c.x < 0) c.x = GRID_SIZE - 1;
        if (c.x >= GRID_SIZE) c.x = 0;
        c.y += c.dy || 0;
        if (c.y < 0) c.y = GRID_SIZE - 1;
        if (c.y >= GRID_SIZE) c.y = 0;
    });
    updatedState.buses.forEach(b => {
        if (!b.stopped) {
            b.x += b.dx || 0;
            if (b.x < 0) b.x = GRID_SIZE - 1;
            if (b.x >= GRID_SIZE) b.x = 0;
            b.y += b.dy || 0;
            if (b.y < 0) b.y = GRID_SIZE - 1;
            if (b.y >= GRID_SIZE) b.y = 0;
            if (b.ranSource[0]){//(Math.random() < 0.2) {
                b.stopped = true;
                b.stopDuration = 4;//Math.floor(Math.random() * 5) + 2;
            }
            b.ranSource.shift();
            b.ranSource.push(Math.random()<b.p);
        } else if (--b.stopDuration <= 0) b.stopped = false;
    });
    updatedState.strangers.forEach(s => {
        if (s.isDead) return;
        s.dx = s.ranSource[0].dx;
        s.dy = s.ranSource[0].dy;
        s.ranSource.shift();
        const dirs = [{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:0},{dx:-1,dy:0}];
        if (Math.random()<s.p){
            s.ranSource.push(dirs[Math.floor(Math.random()*dirs.length)]);
        }else{
            s.ranSource.push(s.ranSource[s.ranSource.length-1]);
        }
        const nX = s.x + s.dx, nY = s.y + s.dy;
        if (isObstacle(nX, nY, updatedState.grid)) { s.dx *= -1; s.dy *= -1; }
        else { s.x = nX; s.y = nY; }
    });
    updatedState.strangers_blue.forEach(s => {
        if (s.isDead) return;
        s.dx = s.ranSource[0].dx;
        s.dy = s.ranSource[0].dy;
        s.ranSource.shift();
        const dirs = [{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:0},{dx:-1,dy:0}];
        if (Math.random()<s.p){
            s.ranSource.push(dirs[Math.floor(Math.random()*dirs.length)]);
        }else{
            s.ranSource.push(s.ranSource[s.ranSource.length-1]);
        }
        const nX = s.x + s.dx, nY = s.y + s.dy;
        if (isObstacle(nX, nY, updatedState.grid)) { s.dx *= -1; s.dy *= -1; }
        else { s.x = nX; s.y = nY; }
    });
    updatedState.strangers_black.forEach(s => {
        if (s.isDead) return;
        s.dx = s.ranSource[0].dx;
        s.dy = s.ranSource[0].dy;
        s.ranSource.shift();
        const dirs = [{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:0},{dx:-1,dy:0}];
        if (Math.random()<s.p){
            s.ranSource.push(dirs[Math.floor(Math.random()*dirs.length)]);
        }else{
            s.ranSource.push(s.ranSource[s.ranSource.length-1]);
        }
        const nX = s.x + s.dx, nY = s.y + s.dy;
        if (isObstacle(nX, nY, updatedState.grid)) { s.dx *= -1; s.dy *= -1; }
        else { s.x = nX; s.y = nY; }
    });
    updatedState.strangers_gold.forEach(s => {
        if (s.isDead) return;
        s.dx = s.ranSource[0].dx;
        s.dy = s.ranSource[0].dy;
        s.ranSource.shift();
        const dirs = [{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:0},{dx:-1,dy:0}];
        if (Math.random()<s.p){
            s.ranSource.push(dirs[Math.floor(Math.random()*dirs.length)]);
        }else{
            s.ranSource.push(s.ranSource[s.ranSource.length-1]);
        }
        const nX = s.x + s.dx, nY = s.y + s.dy;
        if (isObstacle(nX, nY, updatedState.grid)) { s.dx *= -1; s.dy *= -1; }
        else { s.x = nX; s.y = nY; }
    });
    updatedState.ducks.forEach(d => {
        if (d.isDead) return;
        d.dx = d.ranSource[0].dx;
        d.dy = d.ranSource[0].dy;
        d.ranSource.shift();
        const dirs = [{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:0},{dx:-1,dy:0}];
        if (Math.random()<d.p){
            d.ranSource.push(dirs[Math.floor(Math.random()*dirs.length)]);
        }else{
            d.ranSource.push(d.ranSource[d.ranSource.length-1]);
        }
        const nX = d.x + d.dx, nY = d.y + d.dy;
        if (isObstacle(nX, nY, updatedState.grid)) { d.dx *= -1; d.dy *= -1; }
        else { d.x = nX; d.y = nY; }
    });
    updatedState.trapBuildings.forEach(tp => {
        if (!tp.stopped) {
            if ((Math.abs(updatedState.playerPos.x - tp.x)==1 && updatedState.playerPos.y == tp.y) || (Math.abs(updatedState.playerPos.y - tp.y)==1 && updatedState.playerPos.x == tp.x)){
                updatedState.bombs.push({ x: updatedState.playerPos.x, y: updatedState.playerPos.y, timer: 4, correctWire: ((tp.ranSource[0])?'b':'g') });
                tp.stopped = true;
                tp.stopDuration = 10;
                tp.ranSource.shift();
                tp.ranSource.push(Math.random()<tp.p);
            }
        } else if (--tp.stopDuration <= 0) tp.stopped = false;
        
    });

    updatedState.deadStrangers = updatedState.deadStrangers.filter(s => --s.deathTimer > 0);
    updatedState.deadDucks = updatedState.deadDucks.filter(d => --d.deathTimer > 0);

    const explodingBombs = [];
    updatedState.bombs = updatedState.bombs.filter(b => {
        if (--b.timer <= 0) {
            explodingBombs.push(b);
            return false;
        }
        return true;
    });
    explodingBombs.forEach(bomb => triggerExplosion(bomb, updatedState));
    
    updatedState.radios.forEach(r => triggerExplosion(r, updatedState, 1, 0.2, 'radio'));
    updatedState.bios.forEach(b => triggerExplosion(b, updatedState, 1, 0.3, 'bio'));


    if (updatedState.eigengram.isOn && --updatedState.eigengram.lifetime <= 0) {
        updatedState.eigengram.isOn = false;
        eigengramSourceThreadId = null;
    }
    if (updatedState.chronogram.isOn && --updatedState.chronogram.lifetime <= 0) {
        updatedState.chronogram.isOn = false;
    }
}

checkItemPickup(updatedState);
checkStrangerCollisions(updatedState);
checkPlayerCollisions(updatedState);

updatedState.moveCount++;
history.push(updatedState);

drawGrid();

const livingThreads = getLivingThreads();
if (livingThreads.length > 1) {
    switchThread('next');
}
}

progressTurnString = _.toString();
delete _;
