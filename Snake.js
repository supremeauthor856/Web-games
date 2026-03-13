const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const grid = 20

let snake = [{x:10,y:10}]
let food = {x:15,y:15}

let dx = 1
let dy = 0

document.addEventListener("touchstart", e=>{
dx = Math.random() > 0.5 ? 1 : -1
dy = Math.random() > 0.5 ? 1 : -1
})

function update(){

const head = {
x:snake[0].x + dx,
y:snake[0].y + dy
}

snake.unshift(head)

if(head.x === food.x && head.y === food.y){

food.x = Math.floor(Math.random()*20)
food.y = Math.floor(Math.random()*20)

}else{

snake.pop()

}

}

function draw(){

ctx.fillStyle="black"
ctx.fillRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="lime"

snake.forEach(s=>{
ctx.fillRect(s.x*grid,s.y*grid,grid,grid)
})

ctx.fillStyle="red"
ctx.fillRect(food.x*grid,food.y*grid,grid,grid)

}

function loop(){
update()
draw()
requestAnimationFrame(loop)
}

loop()
