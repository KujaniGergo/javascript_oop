/**
 * @callback TableCallback
 * @param {Author[]} authorlist
 * @returns {void}
 * @callback AddElementResultCallback
 * @param {string} messege
 * @returns {void}
 * @callback importResultCallback
 * @param {string} messege
 * @returns {void}
 */


class AuthorManager {
    /**
     * @type {Author[]}
     */
    #authorList
    /**
     * @type {TableCallback}
     */
    #tablecallback
    /**
     * @type {importResultCallback}
     */
    #importResultCallback
    set importResultCallback(value){
        this.#importResultCallback = value;
    }

    constructor() {
        this.#authorList = []
    }

    /**
     * @param {TableCallback} value 
     */
    set tableCallback(value){
        this.#tablecallback = value
    }
    /**
     * @param {AddElementResultCallback} value
     */
    #addElementResultCallback

    /**
     * @param {import(".").AuthorType} element
     */
    addElement(element){
        const author = new Author();
        author.id = this.#authorList.length
        author.name = element.author
        author.concept = element.concept
        author.work = element.work
        if (author.validate()) {
            this.#authorList.push(author)
            this.#addElementResultCallback("Sikeres elemfelvétel");
        }else{
            this.#addElementResultCallback("Nem volt sikeres az elem felvétel!")
        }

    }
    /**
     * 
     * @param {import(".").AuthorType} elementList 
     */
    addElementList(elementList){
        for (const elem of elementList) {
            const author = new Author();
            author.id = this.#authorList.length;
            author.name = elem.author;
            author.work = elem.author;
            author.concept = elem.concept;
            if (author.validate()) {
                this.#authorList.push(author);
                this.#importResultCallback ("sikeres")
                
            }else{
                this.#importResultCallback("sikertelen")
            }
        }
    }

    /**
     * @returns {void}
     */
    getAllElement(){
        this.#tablecallback(this.#authorList);
    }

    getExportString(){
        const result = []
        for(const author of this.#authorList){
            result.push(`${author.name};${author.work};${author.concept}`)
        }
        return result.join("\n");
    }
}



class Author {
    #id
    #name
    #work
    #conecpt

    get id(){
        return this.#id;
    }

    get name(){
        return this.#name
    }

    get work (){
        return this.#work
    }

    get concept(){
        return this.#conecpt
    }

    set id (value){
        this.#id = value;
    }

    set name (vlaue){
        this.#name = vlaue
    }

    set work (vlaue){
        this.#work = vlaue
    }
    set concept (vlaue){
        this.#conecpt = vlaue
    }

    /**
     * @returns {boolean}
     */
    vladate ( ){
        return this.#name && this.#conecpt && this.#work;
    }
}

export {AuthorManager};