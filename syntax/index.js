import { Gomb } from "./gomb.js"

const inp1 = document.createElement("input")
const inp2 = document.createElement("input") 
const div = document.createElement("div")
document.body.appendChild(div)

new Gomb(inp1,inp2,"+",div,"Összeadás");
const br = document.createElement("br");
div.appendChild(br)
new Gomb(inp1,inp2,"-",div,"Kivonás");
const br2 = document.createElement("br");
div.appendChild(br2)
new Gomb(inp1,inp2,"*",div,"Szorzás");
const br3 = document.createElement("br");
div.appendChild(br3)

div.appendChild(inp1)
div.appendChild(inp2)



