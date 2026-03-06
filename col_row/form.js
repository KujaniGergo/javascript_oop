import { ViewElement } from "./wievelement.js";

class FormView extends ViewElement {
    constructor(id) {
        super(id)
        this.div.innerText= "form";
    }
}
export {FormView};