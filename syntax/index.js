import { muveletletrehoz, muvelt } from "./functions.js"


const inp1 = document.createElement("input")
document.body.appendChild(inp1)

const inp2 = document.createElement("input") 
document.body.appendChild(inp2)

const div = document.createElement("div")
document.body.appendChild(div)

const button = document.createElement("button")
button.innerText = "ÖSSZEADÁS"
document.body.appendChild(button)

button.addEventListener("click",function() {
    const n1 = Number(inp1.value)
    const n2 = Number(inp2.value)
    const {result} = muvelt(n1,n2,muveletletrehoz("+"))
    div.innerText = result
})



const fv = muveletletrehoz("+")
console.log(fv(1,2))

muvelt(n1,n2,muveletletrehoz("+"))
