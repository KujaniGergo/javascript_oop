import { createRadioButton } from "./gomszab.min.js";
import { ViewElement } from "./wievelement.js";

class NavigationBar extends ViewElement{
    /**
     * @type {ViewElement[]}
     */
    #viewElementList;

    constructor(parameter) {
        super('navbar')

        this.#viewElementList = [];

        this.div.addEventListener("change", (e) => {
            const radioButtonValue = e.target.value;
            this.activate(radioButtonValue);
        });
    }

    /**
     * @param {string} label
     * @param {ViewElement} viewElement
     */
    addViewElement(label, viewElement) {
        this.#viewElementList.push(viewElement);

        const viewElementId = viewElement.id;

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
            viewElement.activate(value);
        }

        const radio = this.div.querySelector(`#${value}`);
        if (radio) {
            radio.checked = true;
        }
    }
}

export { NavigationBar };