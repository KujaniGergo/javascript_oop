import { hide, show } from "./gomszab.min.js";

class ViewElement {

    /**
     * @type {hmtlDivElement}
     */
    #div;
    /**
     * @type {string}
     */
    #id;
    /**
     * @type  {ActivateCallback}
     */
    #activateCallback

    get div(){
        return this.#div;
    }
    constructor(id) {
        this.#id = id;
        this.#div = document.createElement("div");
        this.#div.id = id;
    }

    /**
     * 
     * @param {htmlelemt} parent 
     */
    appendTo(parent){
        parent.appendChild(this.#div);
    }
    /**
     * 
     * @param {string
     */
    activate(id){
        if (this.#id  === id) {
            show(this.#div);
            if (this.#activateCallback) {
                this.#activateCallback();
            }
        }else{
            hide(this.#div);
        }
    }
}
export {ViewElement};