import { createRadioButton } from "./gomszab.min.js";
import { ViewElement } from "./wievelement.js";

class NavigationBar extends ViewElement{ //navigation bar
    /**
     * @type {ViewElement[]}
     */
    #viewElementList; //a privát tulajdonság ami tartalmazza a megjelenítendő view element leszármazottakat

    constructor(parameter) { //konstruktor definíció
        super('navbar') //meghívjuk a szülő osztály konstruktorát

        this.#viewElementList = [];

        this.div.addEventListener("change", (e) => { //feliratkozunk a div change eseményére
            const radioButtonValue = e.target.value; //elkérjük a target value értékét
            console.log(radioButtonValue) //meghívjuk az activate függvényt 
            this.activate(radioButtonValue); //
        });
    }

    /**
     * @param {string} label
     * @param {ViewElement} viewElement
     */
    addViewElement(label, viewElement) { //
        this.#viewElementList.push(viewElement);

        const viewElementId = viewElement.id;
        console.log(viewElement)
        const div = createRadioButton({
            id: viewElementId,
            name: this.id,
            label: label
        });

        this.div.appendChild(div);
    }

    /**
     * @param {string} value
     */
    activate(value) {
        for (const viewElement of this.#viewElementList) {
            viewElement.activate(value); //
        }

        const radio = this.div.querySelector(`#${value}`); // a diven belül lekérjük a megeggyező id eleneü
        if (radio) {
            radio.checked = true;
        }
    }
}

export { NavigationBar };