let link = document.querySelector('.bt');

// matrix


var c = document.getElementById('c');
var cxt = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;



var chinese = "weareconnected";
chinese = chinese.split("");

var font_size =10;
var columns = c.width/font_size; 

var drops = [];

for(var x=0;x<columns;x++){
  drops[x]=1;
}

function draw(){
  cxt.fillStyle="rgba(0,0,0,0.05)";
  cxt.fillRect(0,0,c.width,c.height);
  
  cxt.fillStyle = "#0F0";
  cxt.font = font_size+'px arial';
  
  
  for(var i=0;i<drops.length;i++){
    var text = chinese[Math.floor(Math.random()*chinese.length)];
    cxt.fillText(text,i*font_size,drops[i]*font_size);
    
    if(drops[i]*font_size>c.height && Math.random() >0.975)
      drops[i]=0;
    
    //increment y coordinate
    drops[i]++;
}
  
}
// setInterval(draw,33);

let matrix = document.querySelector('#c');
let text = document.querySelector('#text');
let scene = document.querySelector('#scene');
let bg = document.querySelector('.bg-1');

link.addEventListener('click',backgroundChange);

function backgroundChange(){
    text.style.display = 'none';
    scene.style.display = 'none';
    bg.style.display = 'none';
    matrix.style.display = 'block';
    setInterval(draw,33);
    setTimeout(() => {
        window.location.href ="http://127.0.0.1:5000/index";
    }, 6000)
}