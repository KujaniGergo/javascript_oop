import { createInputAndErrorDiv } from "./gomszab.min.js";
import { AuthorManager } from "./manager.js";
import { ViewElement } from "./wievelement.js";

class FormView extends ViewElement {

    /**
     * @type {FormInput[]}
     */
    #formInputList;
    /**
     * @type {AuthorManager}
     */
    #manager
    /**
     * @type {HTMLFormElement}
     */
    #form

    /**
     * 
     * @param {@param} id 
     * @param {import"{"id./index.js"}.FormFieldType[]";} FormfiledList
     * @param {AuthorManager} manager 
     */
    constructor(id,FormfiledList,manager) {
        super(id)
        this.#manager = manager;
        this.#formInputList = [];
        const form = document.createElement("form");
        for (const field of FormfiledList) {
            const formField = new FormField(field.id,field.label,field.name,form);
            this.#formInputList.push(formField);
        }
        const button = document.createElement("button");
        button.innerText = "Küldés";
        form.appendChild(button);
        const reultDiv = document.createElement("div");
        reultDiv.innerText= "Eredmény"
        this.div.appendChild(reultDiv);
        this.div.appendChild(form);
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
            const elem = this.createElement();
            this.#manager.addElement(elem);
            

        });
        this.div.appendChild(form);
        this.#manager.addElementResultCallback = (result) => {
            resultDiv.innerText = result
            setTimeout(()=>{
                reultDiv.innerText = "";

            }, 1500)
        }
    }

    /**
     * @returns {import("./index.js").AuthorType}
     */
    #createElement(){
        /**
         * @type {import("./index.js").AuthorType}
         */
        let reult = {}
        for (const field of this.#formInputList) {
            if (field.Validate()) {
                reult[field.name] = field.value;
            }
        }
        return result;
    }
}

class FormField {
    /**
     * @type {HTMLInputElement}
     */
    #inputElement
    /**
     * @type {HTMLDivElement}
     */
    #errorDiv
    /**
     * @type {string}
     */
    #name

    get name(){
        return this.#name
    }

    /**
     * @param {string} id
     * @param {string} label
     * @param {string} name
     * @param {HTMLFormElement} paremt
     */
    get value(){
        return this.#inputElement.value ? this.#inputElement.value : undefined;
    }
    constructor(id,label,name,parent) {
        const {input,errorDiv} = createInputAndErrorDiv({id,label,name,parent});
        this.#name = name;
        this.#inputElement = input;
        this.#errorDiv = errorDiv;
    }

    Validate(){
        let result = true;
        if (!this.value) {
            this.#errorDiv.innerText = "Mező kitöltése kötelező!"
        }else{
            this.#errorDiv.innerText = ""
        }
        return result;
    }
    
}

export {FormView};