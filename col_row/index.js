import { FormView } from "./form.js";
import { ImportView } from "./importexport.js";
import { AuthorManager } from "./manager.js";
import { NavigationBar } from "./navbar.js"
import { TableView } from "./table.js";

const formFields = [{
    id: 'author',
    label: 'Név',
    name: 'author'
},
{
    id: 'work',
    label: 'Mű',
    name: 'work'
},
{
    id: 'concept',
    label: 'Fogalom',
    name: 'concept'
}]

const headerArray = ['Szerző', 'Mű', 'Fogalom']

/**
 * @typedef {{id: number, author?: string, work?: string, concept?: string}} AuthorType
 * @typedef {{id: string, label: string, name: string}} FormFieldType
 */


const navbar = new NavigationBar();
navbar.appendTo(document.body);
 
const manager = new AuthorManager();


const tableView = new TableView("table",headerArray, manager);
tableView.appendTo(document.body);
navbar.addViewElement("tablazat",tableView)

const formView = new FormView("Tableform",formFields,manager);
formView.appendTo(document.body);
navbar.addViewElement("form",formView);

navbar.activate("table");

const importExport = new ImportView("importexport",manager);
importExport.appendTo(document.body);
navbar.addViewElement("import/export",importExport)
manager.getAllElement();