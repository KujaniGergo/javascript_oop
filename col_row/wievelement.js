import { hide, show } from "./gomszab.min.js";

class ViewElement {

    /**
     * @type {hmtlDivElement}
     */
    #div; //pédányosításkor létrehozunk egy divet az elemekekt tároljuk el benne
    /**
     * @type {string}
     */
    #id; //privát tulajdonság az osztály pédányának
    /**
     * @type  {ActivateCallback}
     */
    #activateCallback //akkor fut ée amikor megjelenik az elem a képernyőn

    set activateCallback(value){
        this.#activateCallback = value
    }
    get div(){ //getter definiálása
        return this.#div; //visszatér a privát div tulajdonságával
    }

    get id() { //getter az azonosítónak 
        return this.#id //visszatér a privát id tulajdonságával
    }
    constructor(id) {//konstruktor a bemeneti azonosítóval
        this.#id = id; //azonosító beállítása
        this.#div = document.createElement("div"); //div létrehozása, privát tulajdonság beállítása
        this.#div.id = id; //div azonosítójának beállítása
    }

    /**
     * 
     * @param {htmlelemt} parent 
     * @returns {void}
     */
    appendTo(parent){ //definiálunk egy függvényt a pédánynak a bementi param egy html ele,e
        parent.appendChild(this.#div); //a html elemehez hozzácsatoljuk a div tulajdonságot
    }
    /**
     * @param {string}
     */
    activate(id){ // függvényt definiálunk a példányoknak
        if (this.#id  === id) { //összehasonlítjuk a bemeneti id paraméterét az id tulajdonsággal
            show(this.#div);
            if (this.#activateCallback) { //ha van activate callback 
                this.#activateCallback(); //akkor mehívjuk 
            }
        }else{
            hide(this.#div); // hozzáfűzzük az elemhe a hidden css osztályt
        }
    }
}
export {ViewElement}; // exportáljuk a viewelementet