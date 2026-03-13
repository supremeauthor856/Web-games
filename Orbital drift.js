const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let ship={
x:200,
y:200,
vx:0,
vy:0
}

let planet={
x:400,
y:300,
mass:500
}

function gravity(){

let dx = planet.x - ship.x
let dy = planet.y - ship.y

let dist = Math.sqrt(dx*dx+dy*dy)

let force = planet.mass/(dist*dist)

ship.vx += force * dx/dist
ship.vy += force * dy/dist

}

document.addEventListener("touchstart",()=>{

ship.vx += (Math.random()-0.5)*5
ship.vy += (Math.random()-0.5)*5

})

function update(){

gravity()

ship.x += ship.vx
ship.y += ship.vy

}

function draw(){

ctx.fillStyle="black"
ctx.fillRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="blue"
ctx.beginPath()
ctx.arc(planet.x,planet.y,30,0,Math.PI*2)
ctx.fill()

ctx.fillStyle="white"
ctx.beginPath()
ctx.arc(ship.x,ship.y,5,0,Math.PI*2)
ctx.fill()

}

function loop(){

update()
draw()

requestAnimationFrame(loop)

}

loop()
