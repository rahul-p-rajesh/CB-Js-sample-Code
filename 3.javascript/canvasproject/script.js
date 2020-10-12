let paintbox = document.getElementById("paintbox");
var context = paintbox.getContext("2d");
let gameOn = true;
let playerSpeed = 5
class Box {
  constructor(size, color) {
    this.size = size
    this.color = color
    this.x = 0
    this.y = 0
  }
}
class GoalBox {
  constructor(height,width, color,x,y) {
    this.height = height
    this.width = width
    this.color = color
    this.x = x
    this.y = y
  }
}

class Player extends Box {
  constructor() {
    super(50, 'blue')
    this.x = 0
    this.y = 225
    this.speed = 0;
    
    
  }
  move(){
    this.x += this.speed;
  
    
  }
  
}

class Enemy extends Box {
  constructor(speed) {
    super(50, 'red')
    this.speed = speed;
  }
  move(){
    this.y += this.speed;
    
    this.x += this.speed;
    if(this.x + this.speed > 500){
      this.speed = -Math.abs(this.speed);
    }
    
    if(this.y + this.speed > 450){
      this.speed = -Math.abs(this.speed);
    }

    if(this.y < 0){
      this.speed = +Math.abs(this.speed);
    }
  }
}
let player = new Player();
let e1 = new Enemy(1);
let e2 = new Enemy(2);
let e3 = new Enemy(3);
e1.x = 0;
e2.x = 500;
e2.y = 500;
e3.x = 250;
let goalbox = new GoalBox(500,10,"pink",500,480);

paintbox.addEventListener('mousedown', () => {
  player.speed = playerSpeed
  console.log("mousedown")
})

paintbox.addEventListener('mouseup', () => {
  player.speed = 0;
})
function drawBow(box){
  context.fillStyle = box.color;
  context.fillRect(box.x,box.y,box.size,box.size);
}
function drawGoalBox(GoalBox){
  context.fillStyle = GoalBox.color;
  context.fillRect(480,0,25,500);
}
setInterval(() => {
  playerSpeed =  5 + parseInt(Math.random() * 10)
  player.y = 100 + (Math.random() * 300)
}, 2000)
function isCollided(box1, box2) {
  /* box1   1_______2
            |       |
           4|_______|3  
            
  */
if (box1.x < box2.x + 50 &&
  box1.x + 50 > box2.x &&
  box1.y < box2.y + 50 &&
  box1.y + 50 > box2.y) {
   // collision detected!
   return true;
} 
}

function gameLoop(){
  if (!gameOn) return
  context.clearRect(0,0,500,500)
    e1.move();
    e2.move();
    e3.move();
    if (isCollided(e1, player) || isCollided(e2, player) || isCollided(e3, player)) {
      gameOn = false  
      window.alert('Game Over')
    }
    
    drawGoalBox(goalbox);
    if (isCollided(goalbox, player) ) {
      gameOn = false  
      window.alert('You Won')
    }
    drawBow(e1);
    drawBow(e2);
    drawBow(e3);
    player.move();
    drawBow(player)
    window.requestAnimationFrame(gameLoop);

}

gameLoop()