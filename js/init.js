delete _;
var _ = () => {
    const levelData = createLevelState(currentLevel);
    if (!levelData) {
        gameWinMessage.style.display = 'block';
        gameWrapper.classList.add('game-over-backdrop');
        document.removeEventListener('keydown', handleKeyDown);
        return;
    }

    threadIds = [''];
    currentThreadIndex = 0;/*
    threadHistory = {'': {status: 'alive', history: []}};
    eigengramMessages = {};
    chronogramMessages = {};*/
    threadHistory = {'': {status: 'alive', history: [levelData]}};
    eigengramMessages = {'': ''};
    chronogramMessages = {'': ''};
    eigengramSourceThreadId = null;
    isGameOver = false;

    threadHistory[''].history.push(levelData);
    eigengramMessages[''] = '';
    chronogramMessages[''] = '';
    
    gameOverMessage.style.display = 'none';
    gameWinMessage.style.display = 'none';
    gameWrapper.classList.remove('game-over-backdrop');
    
    document.removeEventListener('keydown', handleRestart);
    document.addEventListener('keydown', handleKeyDown);
    
    // initiate the deterministic random sources
    levelData.buses.forEach(b => {
        b.p = .2;
        b.ranSource = [];
        for(i=0;i!=20;i++){
            b.ranSource.push(Math.random() < b.p);
        }
    });
    levelData.trapBuildings.forEach(tp => {
        tp.p = .5;
        tp.ranSource = [];
        for(i=0;i!=3;i++){
            tp.ranSource.push(Math.random() < tp.p);
        }
    });
    levelData.strangers.forEach(s => {
        s.p = .3;
        if (!s.isT) s.isT = -1;
        if (s.isInfected) s.p+=.1;
        s.ranSource = [{dx:s.dx, dy:s.dy}];
        const dirs = [{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:0},{dx:-1,dy:0}];
        for(i=1;i!=30;i++){
            if (Math.random()<s.p){
                s.ranSource.push(dirs[Math.floor(Math.random()*dirs.length)]);
            }else{
                s.ranSource.push(s.ranSource[i-1]);
            }
        }
    });
    levelData.strangers_blue.forEach(s => {
        s.p = .5;
        if (!s.ranSource) s.ranSource = [{dx:s.dx, dy:s.dy}];
        const dirs = [{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:0},{dx:-1,dy:0}];
        for(i=1;i!=30;i++){
            if (Math.random()<s.p){
                s.ranSource.push(dirs[Math.floor(Math.random()*dirs.length)]);
            }else{
                s.ranSource.push(s.ranSource[i-1]);
            }
        }
    });
    levelData.strangers_black.forEach(s => {
        s.p = .6;
        if (!s.ranSource) s.ranSource = [{dx:s.dx, dy:s.dy}];
        const dirs = [{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:0},{dx:-1,dy:0}];
        for(i=1;i!=5;i++){
            if (Math.random()<s.p){
                s.ranSource.push(dirs[Math.floor(Math.random()*dirs.length)]);
            }else{
                s.ranSource.push(s.ranSource[i-1]);
            }
        }
    });
    levelData.strangers_gold.forEach(s => {
        s.p = .2;
        if (!s.isT) s.isT = -1;
        if (s.isInfected) s.p+=.1;
        if (!s.ranSource) s.ranSource = [{dx:s.dx, dy:s.dy}];
        const dirs = [{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:0},{dx:-1,dy:0}];
        for(i=1;i!=20;i++){
            if (Math.random()<s.p){
                s.ranSource.push(dirs[Math.floor(Math.random()*dirs.length)]);
            }else{
                s.ranSource.push(s.ranSource[i-1]);
            }
        }
    });
    levelData.ducks.forEach(s => {
        s.p = .4;
        if (!s.isT) s.isT = -1;
        if (s.isInfected) s.p+=.1;
        s.ranSource = [{dx:s.dx, dy:s.dy}];
        const dirs = [{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:0},{dx:-1,dy:0}];
        for(i=1;i!=15;i++){
            if (Math.random()<s.p){
                s.ranSource.push(dirs[Math.floor(Math.random()*dirs.length)]);
            }else{
                s.ranSource.push(s.ranSource[i-1]);
            }
        }
    });
    
    if (levelData.deviceLocations.T[0]) STARTING_LIFETIME = levelData.deviceLocations.T[0].t;
    
    levelData.con = [Math.random()<.5,Math.random()<.5,Math.random()<.5];
    levelData.devicesOnBoard.med.forEach(m => {
        if (m.con) {
            if (m.prSide) {
                m.prSide = levelData.con[Math.abs(m.con)];
                if (m.con<0) m.prSide = 1-m.prSide;
                m.prEff = 1-m.prSide;
            } else {
                m.prEff = levelData.con[Math.abs(m.con)];
                if (m.con>0) m.prEff = 1-m.prEff; 
            }
        } else {
            m.prEff = Math.random() < m.prEff;
            m.prSide = Math.random() < m.prSide;
        }
    });
    levelData.devicesOnBoard.vac.forEach(m => {
        if (m.con) {
            m.prSide = levelData.con[Math.abs(m.con)];
            if (m.con<0) m.prSide = 1-m.prSide;
            m.prEff = 1-m.prSide;
        } else {
            m.prEff = Math.random() < m.prEff;
            m.prSide = Math.random() < m.prSide;
        }
    });
    levelData.desktopLayout.forEach(m => {
        if (m.con) {
            m.n = 1+levelData.con[Math.abs(m.con)];
            if (m.con<0) m.n = 3-m.n; 
        }
    });
    levelData.devicesOnBoard.id.forEach(m => {
        if (m.con) {
            m.n = levelData.con[Math.abs(m.con)] ? (m.con>0 ? 1 : -1) : (m.con>0 ? -1 : 1);
        } else {
            m.n = 1;
        }
    });
    //... TODO
    
    
    if (isMusic) document.getElementById("music").src = music[(currentLevel || 0) % music.length];
    if (isMusic) document.getElementById("music").play();
    weatherType = levels[currentLevel].weatherType || 0;
    if (isMusic && weatherType) {
        document.getElementById("weather").src = weatherMusic[(weatherType-1) % weatherMusic.length];
        //alert(weatherMusic[weatherType % weatherMusic.length]);
        switch (weatherType) {
            case 1: 
                document.querySelector(":root").style.setProperty("--grass-color","#388e3c");
                break;
            case 2: 
                document.querySelector(":root").style.setProperty("--grass-color","#336e2c");
                break;
            case 3:
                document.querySelector(":root").style.setProperty("--grass-color","darkgray");
                break;
            case 4: 
                document.querySelector(":root").style.setProperty("--grass-color","#452121");
                break;
            case 5: 
                document.querySelector(":root").style.setProperty("--grass-color","#1f1f1f");
                break;
            default:
                document.querySelector(":root").style.setProperty("--grass-color","#388e3c");
                break;
        }
        document.getElementById("weather").play();
        document.getElementById("weather").volume = 1;
    } else {
        document.querySelector(":root").style.setProperty("--grass-color","#388e3c");
        document.getElementById("weather").volume = 0;
        //document.getElementById("weather").stop();
    }
    

    drawGrid();
    updateStatsDisplay(levelData);
    updateThreadIdDisplay();
    updateThreadNavButtons();
    return;
}

initGameString = _.toString();
delete _;
