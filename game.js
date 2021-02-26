var canvas = document.getElementById("canvasEnemy");
var canvasBg = document.getElementById("canvasBg");
var canvasH = document.getElementById("canvasHero");
var ctx = canvas.getContext("2d");
var ctxBg = canvasBg.getContext("2d");
var ctxE = canvasH.getContext("2d");
let width = 1000;
if (screen.width <= 1000) {
  width = screen.width;
  canvas.height = canvasBg.height = canvasH.width = canvas.width/2;
}
canvas.width = canvasBg.width = canvasH.width = width;
canvas.height = canvasBg.height = canvasH.height = canvas.width/2;

let imgwidth = 0;
let scrollSpeed = width/200;
let h = 0;
let yT = canvas.height/1.38;
let xT = canvas.width+100;
let EnemySpeed = canvas.width/100;
let score = 0;
let bg = new Image();
bg.src = "Asset/full-background.png";
var charWalk = new Array();
  charWalk[0] = "Asset/karakter/0.png";
  charWalk[1] = "Asset/karakter/1.png";
  charWalk[2] = "Asset/karakter/2.png";
  charWalk[3] = "Asset/karakter/3.png";
  charWalk[4] = "Asset/karakter/4.png";
  charWalk[5] = "Asset/karakter/5.png";
  charWalk[6] = "Asset/karakter/6.png";
  charWalk[7] = "Asset/karakter/7.png";
  charWalk[8] = "Asset/karakter/8.png";
  charWalk[9] = "Asset/karakter/9.png";
  charWalk[10] = "Asset/karakter/10.png";
  charWalk[11] = "Asset/karakter/11.png";
  charWalk[12] = "Asset/karakter/12.png";
  charWalk[13] = "Asset/karakter/13.png";
  charWalk[14] = "Asset/karakter/14.png";
  charWalk[15] = "Asset/karakter/15.png";
  charWalk[16] = "Asset/karakter/16.png";
  charWalk[17] = "Asset/karakter/17.png";

var enemy = new Array();
  enemy[0] = "Asset/enemy/0.png";
  enemy[1] = "Asset/enemy/1.png";
  enemy[2] = "Asset/enemy/2.png";
  enemy[3] = "Asset/enemy/3.png";
  enemy[4] = "Asset/enemy/4.png";
  enemy[5] = "Asset/enemy/5.png";
  enemy[6] = "Asset/enemy/6.png";
  enemy[7] = "Asset/enemy/7.png";

var GameLoop = setInterval(Walk, 600);
var ScoreControl = setInterval(Score, 1000/30);
var GameControl = setInterval(Control, 1000/30);
document.addEventListener("keydown", jump);

function loop() {
  ctxBg.drawImage(bg, imgwidth, 0,canvas.width,canvas.height);
  ctxBg.drawImage(bg, imgwidth + canvas.width, 0,canvas.width,canvas.height);
  imgwidth -= scrollSpeed;

  if (imgwidth <= -canvas.width) {
    imgwidth = 0;
  }
}
function Control(){
  if(xT<canvas.width/2.5 && xT>canvas.width/3.3 && yT == canvas.height/1.38){
    clearInterval(GameLoop);
    clearInterval(ScoreControl);
    document.getElementById("start").style.display = "none";
    document.getElementById("game-score").innerHTML = `Score: ${score}`;
    document.getElementById("defeat").classList.add("animate-defeat");
  }
}
function Score(){
  if(xT < canvas.width/2.9 && xT>canvas.width/3){
    score++;
  }
  document.getElementById("score").innerHTML = `Score: ${score}`;
}
function drawChar(h, yT) {
  character = new Image();
  character.src = charWalk[h];
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(character, canvas.width/3, yT ,canvas.width/6,canvas.height/6);
}
function drawEnemy(h, xT) {
  Cenemy = new Image();
  Cenemy.src = enemy[h];
  ctxE.clearRect(0, 0, canvas.width, canvas.height);
  ctxE.drawImage(Cenemy, xT, canvas.height/1.28, canvas.width/13, canvas.height/10);
}
function jumpBtn(){
    if(yT == canvas.height/1.38){
      document.getElementById("start").classList.add("animate-start");
      for (let i = 0; i <= 10; i++) {
        if (i <= 10) {
          setTimeout(function () {
            yT -= canvas.height/63;
          }, delay(i));
        }
      }
    }
  setTimeout(function () {
      if(parseInt(yT) == parseInt(((canvas.height/1.38)-((canvas.height/63)*11))) ){
        for (let i = 0; i <= 10; i++) {
            if (i <= 10) {
              setTimeout(function () {
                yT += canvas.height/63;
              }, delay(i));
            }
        }
      }
  }, 500);
}
function jump(e) {
  if (e.keyCode == 38) {
    if(yT == canvas.height/1.38){
      document.getElementById("start").classList.add("animate-start");
      for (let i = 0; i <= 10; i++) {
        if (i <= 10) {
          setTimeout(function () {
            yT -= canvas.height/63;
          }, delay(i));
        }
      }
    }
  } 
  setTimeout(function () {
      if(parseInt(yT) == parseInt(((canvas.height/1.38)-((canvas.height/63)*11))) ){
        for (let i = 0; i <= 10; i++) {
            if (i <= 10) {
              setTimeout(function () {
                yT += canvas.height/63;
              }, delay(i));
            }
        }
      }
  }, 500);
}
function delay(i) {
  if (i == 0) {
    return 33;
  }
  return i * 33 + 33;
}
function enemys(i){
    if(i<8){
      xT -= EnemySpeed;
      drawEnemy(h, xT);
      if(xT < 0){
        xT = canvas.width+100;
      }
    }
    else{
      xT -= EnemySpeed;
      drawEnemy(7, xT);
    } 
}
function Walk() {
  for (let i = 0; i <= 17; i++) {
      setTimeout(function () {
        loop();
        h = i;
        drawChar(h, yT);
      }, delay(i));
      setTimeout(function(){
        enemys(i);
      }, delay(i));
  }
}
