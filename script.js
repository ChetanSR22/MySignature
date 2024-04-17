const color = document.getElementById('clrpkr')
const back = document.getElementById('bkpkr')
const canvas = document.getElementById('mycanvas')
const clear = document.getElementById('clear')
const save = document.getElementById('save')
const retrieve = document.getElementById('retrieve')
const font = document.getElementById('Brushsize')

const ctx = canvas.getContext('2d')

color.addEventListener('change',(e)=>{
    ctx.strokeStyle = e.target.value
    ctx.fillStyle = e.target.value
})

canvas.addEventListener('mousedown',(e)=>{
    isDrawing = true
    lastX = event.offsetX
    lastY = event.offsetY
})

canvas.addEventListener('mousemove',(e)=>{
    if(isDrawing){
        ctx.beginPath()
        ctx.moveTo(lastX,lastY)
        ctx.lineTo(event.offsetX,event.offsetY)
        ctx.stroke()
        lastX = event.offsetX
        lastY = event.offsetY
    }
})

canvas.addEventListener('mouseup',(e)=>{
    isDrawing = false
})

back.addEventListener('change',(e)=>{
    ctx.fillStyle = e.target.value
    ctx.fillRect(0,0,800,500)
})

font.addEventListener('change',(e)=>{
    ctx.lineWidth = e.target.value
})

clear.addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
})

save.addEventListener('click',()=>{
    localStorage.setItem('canvas',canvas.toDataURL())
    let link =document.createElement('a')
    link.download = 'my-sign.png'
    link.href=canvas.toDataURL()
    link.click()
})

retrieve.addEventListener('click',()=>{
    let saved = localStorage.getItem('canvas')

    if(saved){
        let img = new Image()
        img.src = saved
        ctx.drawImage(0,0)
    }
})