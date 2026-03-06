/**
 * @callback TableCallback
 * @param {Author[]} authorlist
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
     * @param {import(".").AuthorType} element
     */
    addElement(element){
        const author = new Author();
        author.id = this.#authorList.length
        author.name = element.author
        author.concept = element.concept
        author.work = element.work
        this.#authorList.push(author)
    }
    /**
     * @returns {void}
     */
    getAllElement(){
        this.#tablecallback(this.#authorList);
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
}

export {AuthorManager};