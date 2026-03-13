const canvas=document.getElementById("game")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

const size=20
const cols=20
const rows=20

let player={x:0,y:0}

let goal={x:19,y:19}

document.addEventListener("touchstart",()=>{

player.x+=Math.floor(Math.random()*3)-1
player.y+=Math.floor(Math.random()*3)-1

})

function draw(){

ctx.fillStyle="black"
ctx.fillRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="green"
ctx.fillRect(player.x*size,player.y*size,size,size)

ctx.fillStyle="gold"
ctx.fillRect(goal.x*size,goal.y*size,size,size)

}

function update(){

if(player.x===goal.x && player.y===goal.y){

goal.x=Math.floor(Math.random()*cols)
goal.y=Math.floor(Math.random()*rows)

}

}

function loop(){

update()
draw()

requestAnimationFrame(loop)

}

loop()
