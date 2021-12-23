class Store{
    set(name,value){
        localStorage.setItem(name,value)
    }
    get(name){
        return localStorage.getItem(name)
    }
    remove(name){
        localStorage.removeItem(name)
    }
    clearAll(){
        localStorage.clear()
    }
}

const store = new Store()

export default store

