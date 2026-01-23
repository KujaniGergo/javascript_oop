/** 
 * @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType  
 * @typedef {{author: string, title: string, concepts: string, concepts2?: string}} ColspanRowType
 * @typedef {{name: string, colSpan?: number}} HeaderType
 * @visszahivas
 * @param {HTMLTableSectionElement}
*/

/** @type {HeaderType[]}  */
const rowspanHeaderArr = [{name: "Szerző"}, {name: "Mű"}, {name: "Fogalmak"}] 
/** @type {HeaderType[]}   */
const colspanHeaderArr = [{name: "Szerző"},{name: "Mű"} , {name: "Fogalmak" ,colSpan: 2}] 

/** @type {RowspanRowType[]}  */
const rowspanBodyArr = [
    {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút", 
        concepts1: "képvers", 
        title2: "Búcsú",
        concepts2: "avantgárd" 
    },
    {
        author: "Thomas Mann",
        title1: "Mario és a varázsló",
        concepts1: "kisregény" 
    },
    {
        author: "Franz Kafka",
        title1: "A per", 
        concepts1: "képvers", 
        title2: "Az átvlátozás", 
        concepts2: "kisregény" 
    }
]



/** @type {ColspanRowType[]} */
const colspanBodyArr = [ 
    {
        author: "Appolliniare", 
        title: "A megsebzett galamb és a szökőkút",
        concepts: "Képvers",  
        concepts2: "Emlékezés", 
    },
    {
        author: "Appolliniare", 
        title: "Búcsú", 
        concepts: "Avantgárd" 
    },
    {
        author: "Thomas Mann", 
        title: "Mario és a varázsló", 
        concepts: "Kisregény" 
    },
    {
        author: "Franz Kafka",
        title: "A per", 
        concepts: "regény" 
    },
    {
        author: "Franz Kafka", 
        title: "Az átváltozás",
        concepts: "kisregény", 
        concepts2: "groteszk" 
    }
]

// renderColspanBody(makeTableBodyWithHeader(colspanHeaderArr), colspanBodyArr)
// renderRowspanBody(makeTableBodyWithHeader(rowspanHeaderArr), rowspanBodyArr)


/**
 * Class a table-nek
 */
class Table {
    #tbody
    constructor(tableHeaderArray) {

        this.#tbody = makeTableBodyWithHeader(tableHeaderArray)
    }
    get tbody(){
        return this.#tbody
    }
    /**
     * @param {}
     */
    method(param){
        param(this.tbody)
    };
}




class Colspantable extends Table {
    constructor(tableHeaderArray) {
        super(tableHeaderArray)
    }
    /**
     * @type {ColspanRowType}
     */
    Render (ColspanRowType){
        renderColspanBody(this.tbody,ColspanRowType);
    };
}
rowspanTable = new Colspantable(colspanBodyArr);
rowspanTable.Render(colspanBodyArr)


class Rowspantable extends Table {
    constructor(tableHeaderArray) {
        super(tableHeaderArray)
    }
    /**
     * @type {RowspanRowType}
     */
    Render (RowspanRowType){
        renderRowspanBody(this.tbody,RowspanRowType);
    };
} 
colspanTable = new Rowspantable(rowspanBodyArr)
colspanTable.Render(rowspanBodyArr)


const button = document.createElement("button")
document.body.appendChild(button)
button.innerText = "Rowspan hozzáadás"



function buttonEventListene(){
    button.addEventListener("click", function(){
    /**
     * @type {RowspanRowType}
     */
    const obj = {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút", 
        concepts1: "képvers", 
        title2: "Búcsú",
        concepts2: "avantgárd" 
    };

    rowspanTable.method(function(body) {
        const tr = document.createElement("tr");
        body.appendChild(tr);

        td1 = document.createElement("td")
        tr.appendChild(td1)
        td1.innerText = obj.author

        td2 = document.createElement("td")
        tr.appendChild(td2)
        td2.innerText = obj.title1

        td3 = document.createElement("td")
        tr.appendChild(td3)
        td3.innerText = obj.concepts1

        td4 = document.createElement("td")
        tr.appendChild(td4)
        td4.innerText = obj.title2

        td5 = document.createElement("td")
        tr.appendChild(td5)
        td5.innerText = obj.concepts2
    })
});
}

button.addEventListener("click",buttonEventListene.bind(rowspanTable));