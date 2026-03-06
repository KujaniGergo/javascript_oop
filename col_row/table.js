import { createTableCell, createTableHeader } from './gomszab.min.js';
import { AuthorManager } from './manager.js';
import {ViewElement} from './wievelement.js';
class TableView extends ViewElement {
    /**
     * @type {AuthorManager}
     */
    #manager
    /**
     * @type {HTMLTableSelectionElement}
     */
    #tbody
    /**
     * @param {string} id
     * @param {string[]} tableHeader 
     * @param {AuthorManager} manager 
     */
    constructor(id,tableHeader, manager) {
        super(id);
        this.#manager = manager;
        const table = document.createElement("table");
        this.div.appendChild(table);
        const thead = createTableHeader(tableHeader)
        table.appendChild(thead);
        this.#tbody = document.createElement("tbody")
        table.appendChild(this.#tbody)
        this.#manager.tableCallback = (authorlist) => {
            for(const author of authorlist){
                const tr = document.createElement('tr')
                this.#tbody.appendChild(tr);
                createTableCell(tr, author.name)
                createTableCell(tr, author.work)
                createTableCell(tr, author.concept)
            }
        }
    }
}


export {TableView};