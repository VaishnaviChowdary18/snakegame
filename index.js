let inputDir = {x:0, y:0};
const foodsound = new Audio('food.mp3');
const  gameoversound = new Audio('gameover.mp3');
const  movesound = new Audio('move.mp3');
const  musicsound = new Audio('music.mp3');
const controls=document.querySelectorAll("#controls i")
let speed = 4;
let score = 0;
let k=0,j=0,f=0;
let  time=0;
var gameRunning = false;
let m=0,n=0,c=0,d=0,p=0;
let lastPaintTime = 0;
let t=0,x=0,w=0,q=0;
let snakeArr = [
    {x:11, y:11}
]
food1 = {x:6, y:7};
food2 ={x:3,y:5};
food3 ={x:10,y:9};
food4 ={x:12,y:12};


function main(ctime){
    window.requestAnimationFrame(main);
   if(p>0)
   {
    if((ctime - lastPaintTime)/1000 <1/speed){
      return;
   }
   lastPaintTime = ctime;
gameEngine();
  }

}
function iscollide(snakeArr){
  if(snakeArr[0].x>=20||snakeArr[0].x<=0||snakeArr[0].y>=20||snakeArr[0].y<=0)
 return true;
}

  
function gameEngine(){
  gameRunning= true;
    if(iscollide(snakeArr)){
      gameoversound.play();
        musicsound.pause();
        inputDir = {x:0,y:0};
        alert("Game over!!!");
        snakeArr = [{x :11, y: 11}];
        t=0,x=0,w=0,q=0;
        musicsound.play();
        score = 0;
        k=0,m=0,n=0,c=0,d=0,p=0;
        const  Timer = document.getElementById('timer');
        time=0;
        
    Timer.textContent = 60-time;
    scoreBox.innerHTML="score:"+score;
        
    }
   
    
   if ((snakeArr[0].y === food1.y && snakeArr[0].x === food1.x))
   {
    foodsound.play();
    
    t++;
    if(t<=1)
    {
      score+=5;
    k++;
   m++; 
    }
   
    if((score>highscoreval)){
      highscoreval = score;
      localStorage.setItem("highscore",JSON.stringify(highscoreval))
      highscoreBox.innerHTML ="Highscore:"+highscoreval;
  }
  scoreBox.innerHTML="score:"+score;

  
  if(k%4!=1&&t<=1)
  {
    
      t=0,x=0,w=0,q=0;
    gameoversound.play(); 
    musicsound.pause();
        inputDir = {x:0,y:0};
        alert("Game over!!!press ok to play again");
        snakeArr = [{x :11, y: 11}];
        musicsound.play();
        score = 0;
        k=0,m=0,n=0,c=0,d=0,p=0,f=0;
        const  Timer = document.getElementById('timer');
        time=0,j=0;
    Timer.textContent = 60-time;
    scoreBox.innerHTML="score:"+score;
    }
  

 if(k%4===0&&k!=0)
{
   t=0,x=0,w=0,q=0;
let a = 2;
  let b = 18;
  m=0;n=0;c=0;d=0;
  time=time-3;
  food1 = {x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())};
  food2 = {x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())};
  food3 = {x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())} ;
  food4 = {x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())};
}

   }
else if ((snakeArr[0].y === food2.y && snakeArr[0].x === food2.x))
   {
    foodsound.play();
    x++;
    if(x<=1)
    {
    score+=5;
    k++;
    n++;
    }
   
    if((score>highscoreval)){
      highscoreval = score;
      localStorage.setItem("highscore",JSON.stringify(highscoreval))
      highscoreBox.innerHTML ="Highscore:"+highscoreval;
  }
  scoreBox.innerHTML="score:"+score;
  
  if(k%4!=2&& x<=1)
  {
    
    
    gameoversound.play(); 
    musicsound.pause();
        inputDir = {x:0,y:0};
        alert("Game over!!!press ok to play again");
        snakeArr = [{x :11, y: 11}];
        musicsound.play();
        score = 0;
        t=0,x=0,w=0,q=0;
        k=0;m=0;n=0,c=0,d=0;
        const  Timer = document.getElementById('timer');
        time=0;
    Timer.textContent = 60-time;  
    scoreBox.innerHTML="score:"+score;
  }
  
if(k%4===0&&k!=0)
{
  x=0,t=0,w=0,q=0;
let a = 2;
  let b = 18;
  m=0;n=0;c=0;d=0;
  time=time-3;
  food1 = {x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())};
  food2 = {x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())};
  food3 = {x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())} ;
  food4 = {x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())};
}

   }
  
   
 else if ((snakeArr[0].y === food3.y && snakeArr[0].x === food3.x))
   {
    foodsound.play();
    w++;
    if(w<=1)
    {
    score+=5;
    k++;
    c++;
    }
    if((score>highscoreval)){
      highscoreval = score;
      localStorage.setItem("highscore",JSON.stringify(highscoreval))
      highscoreBox.innerHTML ="Highscore:"+highscoreval;
  }
  scoreBox.innerHTML="score:"+score;
 
  
  if(k%4!=3&& w<=1)
  {
    gameoversound.play(); 
    musicsound.pause();
        inputDir = {x:0,y:0};
        t=0,x=0,w=0,q=0;
        alert("Game over!!!press ok to play again");
        snakeArr = [{x :11, y: 11}];
        musicsound.play();
        score = 0;
        k=0;m=0;n=0,c=0,d=0,p=0;
        scoreBox.innerHTML="score:"+score;
        const  Timer = document.getElementById('timer');
        time=0;
    Timer.textContent =60- time;
  }
  
 if(k%4===0&&k!=0)
{
  w=0,t=0,x=0,q=0;
let a = 2;
  let b = 18;
  m=0;n=0;c=0;d=0;
  time=time-3;
  food1 = {x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())};
  food2 = {x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())};
  food3 = {x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())} ;
  food4 = {x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())};
}

   }
   
   else  if ((snakeArr[0].y === food4.y && snakeArr[0].x === food4.x))
   {
   foodsound.play();
   q++;
   if(q<=1)
   {
   score+=5;
   k++;
    d++;
   }     
       if((score>highscoreval)){
         highscoreval = score;
         localStorage.setItem("highscore",JSON.stringify(highscoreval))
         highscoreBox.innerHTML ="Highscore:"+highscoreval;
     }
     scoreBox.innerHTML="score:"+score;
    
     
  if(k%4!=0&&q<=1)
  {
    
    gameoversound.play(); 
    musicsound.pause();
        inputDir = {x:0,y:0};
        alert("Game over!!!press ok to play again");
        t=0,x=0,w=0,q=0;
        snakeArr = [{x :11, y: 11}];
        musicsound.play();
        score = 0;
        k=0;m=0;n=0,c=0,d=0,p=0;
        scoreBox.innerHTML="score:"+score;
        const  Timer = document.getElementById('timer');
        time=0;
        
    Timer.textContent = 60-time;
    
      
  }
if(k%4===0&&k!=0)
{
  t=0,x=0,w=0,q=0;
let a = 2;
  let b = 18;
  m=0;n=0;c=0;d=0;
  time=time-3;
  food1 = {x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())};
  food2 = {x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())};
  food3 = {x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())} ;
  food4 = {x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())};

}
   }
   
   for(i = 1; i>=0; i--){
        
    snakeArr[i+1] = {...snakeArr[i]};
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;
board.innerHTML = "";
musicsound.play();
snakeArr.forEach((e, index)=>{
snakeElement = document.createElement('div');
snakeElement.style.gridRowStart = e.y;
snakeElement.style.gridColumnStart = e.x; 
snakeElement.classList.add('head');
board.appendChild(snakeElement);
});

foodElement =document.createElement('div');
foodElement.style.gridRowStart = food1.y;
foodElement.style.gridColumnStart = food1.x;
if ((snakeArr[0].y != food1.y || snakeArr[0].x != food1.x)&&m===0)
{
foodElement.classList.add('food1');
board.appendChild(foodElement);
}
foodElement =document.createElement('div');
foodElement.style.gridRowStart = food2.y;
foodElement.style.gridColumnStart = food2.x;
if ((snakeArr[0].y != food2.y || snakeArr[0].x != food2.x)&&n===0)
{
foodElement.classList.add('food2');
board.appendChild(foodElement);
}
foodElement =document.createElement('div');
foodElement.style.gridRowStart = food3.y;
foodElement.style.gridColumnStart = food3.x;
if ((snakeArr[0].y != food3.y || snakeArr[0].x != food3.x)&&c===0)
{
foodElement.classList.add('food3');
board.appendChild(foodElement);
}
foodElement =document.createElement('div');
foodElement.style.gridRowStart = food4.y;
foodElement.style.gridColumnStart = food4.x;
if ((snakeArr[0].y != food4.y || snakeArr[0].x != food4.x)&&d===0)
{
foodElement.classList.add('food4');
board.appendChild(foodElement);
}

      let highscore = localStorage.getItem("highscore");
if(highscore ===null){
highscoreval = 0;
localStorage.setItem("highscore",JSON.stringify(highscoreval));
}
else{
highscoreval = JSON.parse(highscore);
highscoreBox.innerHTML ="Highscore:"+highscore;
}
    }
   
    

  
window.requestAnimationFrame(main);
function times(){
  
  if (time > 60) {

    gameoversound.play(); 
    musicsound.pause();
        inputDir = {x:0,y:0};
        alert("Game over!!!press ok to play again");
        snakeArr = [{x :11, y: 11}];
        musicsound.play();
        score = 0;
        t=0,x=0,w=0,q=0;
        k=0;m=0;n=0,c=0,d=0,p=0;
        scoreBox.innerHTML="score:"+score;
      const  Timer = document.getElementById('timer');
        time=0;
    Timer.textContent = 60-time;
  main(ctime);

} else {
  if(p>0)
  {  const Timer = document.getElementById('timer');
    Timer.textContent = 60 - time;
    time++;
}
}
}
interval = setInterval(times, 1000);
const startButton = document.getElementById('start-button');

startButton.addEventListener('click', function() {
p++;
});

const changeDirection= (e) =>{
    inputDir={x:0,y:1}
    movesound.play();
  
  
    switch (e.key){
      case "ArrowUp":
       console.log("ArrowUp");
       inputDir.x = 0;
       inputDir.y = -1;
       break;

       case "ArrowDown":
       console.log("ArrowDown");
       inputDir.x = 0;
       inputDir.y = 1;
       break;

       case "ArrowLeft":
       console.log("ArrowLeft");
       inputDir.x = -1;
       inputDir.y = 0;
       break;
       
       case "ArrowRight":
       console.log("ArrowRight");
       inputDir.x = 1;
       inputDir.y = 0;
       break;
     default:
      break; 
    }
  
};
window.addEventListener("keydown",changeDirection);
controls.forEach(key =>{ 
  key.addEventListener("click",()=> changeDirection({key:key.dataset.key}));

}  );
