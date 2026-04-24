import { FormView } from "./form.js";
import { ImportView } from "./importexport.js";
import { AuthorManager } from "./manager.js";
import { NavigationBar } from "./navbar.js"
import { TableView } from "./table.js";

const formFields = [{ // létrehozunk egy formfield listát ami alapján példányosítja a form controller a pédányokat
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

const headerArray = ['Szerző', 'Mű', 'Fogalom'] // létreozunk egy header listát

/**
 * @typedef {{id: number, author?: string, work?: string, concept?: string}} AuthorType
 * @typedef {{id: string, label: string, name: string}} FormFieldType
 */


const navbar = new NavigationBar(); //pédányosítjuk a managgert 
navbar.appendTo(document.body); //példányosítjuk a nabart
 
const manager = new AuthorManager(); //hozzáfűzzük a navbart a doc body hoz


const tableView = new TableView("table",headerArray, manager);  //pédányosítjuk a tablet
tableView.appendTo(document.body);//hozzáfűzzük a tablet a dpcument bodhoz
navbar.addViewElement("tablazat",tableView) 

const formView = new FormView("Tableform",formFields,manager);
formView.appendTo(document.body);
navbar.addViewElement("form",formView);

navbar.activate("table"); //meghívjuk a navbar activate metódusát


const importExport = new ImportView("importexport",manager); //hozzáfűzzük az importexportot a navbarhoz
importExport.appendTo(document.body); //hozzáfűzzük a formcontrollert a navbarhoz
navbar.addViewElement("import/export",importExport) //hozzáadjuk az importexportot a navbarhoz
manager.getAllElement();