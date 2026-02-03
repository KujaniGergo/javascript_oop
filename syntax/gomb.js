import { muveletletrehoz, muvelt } from "./functions.js"

class Gomb{
    constructor(ertek1, ertek2, string, div, gombNev){
        const gomb = document.createElement("button")
        gomb.innerText = gombNev
        gomb.addEventListener("click", function(){

        this.ertek1 = Number(ertek1.value)
        this.ertek2 = Number(ertek2.value)

        this.div = div
        this.div.innerText = muvelt(this.ertek1 ,this.ertek2 ,muveletletrehoz(string)).result})

        div.appendChild(gomb)
    }
}
export {Gomb}