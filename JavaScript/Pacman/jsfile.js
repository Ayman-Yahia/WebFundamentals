function random(max,min){
    return Math.floor(Math.random()* (max-min +1))+min;
    }
    var map=[
        [1,1,1,1,1,1,1,1,1,1],
        [1,0,0,random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),1],
        [1,0,0,random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),1],
        [1,random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),1],
        [1,random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),1],
        [1,random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),1],
        [1,random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),1],
        [1,random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),1],
        [1,random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),1],
        [1,random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),random(-1,3),1],
        [1,1,1,1,1,1,1,1,1,1],    

    ];
    var WorldDict={
        0: 'blank',
        1: 'wall',
        2: 'coin',
    }
    function drawWorld() {
        var output = "";
        for (var row = 0; row < map.length; row++) {
            output = output + "<div class='row'>";
            for (var i= 0; i < map[row].length; i++) {
                output = output + "<div class='" + WorldDict[map[row][i]] + "'></div>"
            }
            output = output + "</div>";
        }
        document.getElementById("World").innerHTML = output;
    }
    drawWorld();
    var score=0;
    var lives=3;
    var pacman= {
        x: 1,
        y: 2,
    };
    function drawPacman() {
        document.getElementById("pacman").style.left = pacman.x * 50 + "px";
        document.getElementById("pacman").style.top = pacman.y * 50 + "px";
    }
    drawPacman();
    var enemy = {
        x: 4,
        y: 6,
    }
    function drawEnemy(){
        document.getElementById('enemy').style.top = enemy.y*50+'px'
        document.getElementById('enemy').style.left = enemy.x*50+'px'
    }
    drawEnemy();
    function moveEnemy(){
        var move = random(-1,4);
        if(move ===0 && (map[enemy.y][enemy.x-1] !==1)){//0 = left
          enemy.x--;
        } 
        else if(move ===1 && (map[enemy.y][enemy.x+1] !==1)){//1 = right
          enemy.x++;
        }
        else if(move ===2 && (map[enemy.y-1][enemy.x] !==1)){//2 = up
        enemy.y--;
        }
        else if(move ===3 && (map[enemy.y+1][enemy.x] !==1)){//3 = down
        enemy.y++;
        }
        }
    document.onkeydown = function(e) {
        if (e.keyCode == 37) { //LEFT
            if (map[pacman.y][pacman.x - 1] != 1) {
                pacman.x--;
                if (map[pacman.y][pacman.x] == 2) {
                    score = score + 10;
                }
            }
        } else if (e.keyCode == 38) { //UP
            if (map[pacman.y - 1][pacman.x] != 1) {
                pacman.y--;
                if (map[pacman.y][pacmana.x] == 2) {
                    score = score + 10;
                } 
            }
        } else if (e.keyCode == 39) { //RIGHT
            if (map[pacman.y][pacman.x + 1] != 1) {
                pacman.x++;
                if (map[pacman.y][pacman.x] == 2) {
                    score = score + 10;
                } 
            }
        } else if (e.keyCode == 40) { //DOWN
            if (map[pacman.y + 1][pacman.x] != 1) {
                pacman.y++;
                if (map[pacman.y][pacman.x] == 2) {
                    score = score + 10;
                } 
            }
        }
        if((pacman.x == enemy.x) && (pacman.y == enemy.y)){
            lives -=1;
        }
        if(lives ==0){
            alert("Game Over! You Score="+score);
        }
        map[pacman.y][pacman.x] = 0;
        drawWorld();
        document.getElementById("SCORE").innerHTML = score;
        document.getElementById("Lives").innerHTML = lives;
        drawPacman();
    }
    function Game() {
        drawPacman();
        drawEnemy();
        moveEnemy();
        drawEnemy();
  
        setTimeout(Game, 800)
      }
      Game();
