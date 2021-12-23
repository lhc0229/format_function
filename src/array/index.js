export function array(){
    Array.prototype.delete = function(index){
        this.splice(index,1)
        return this
    }

    Array.prototype.insert = function(index,insertArr){
        let new_insert_arr = insertArr || []
        this.splice(index, 0, ...new_insert_arr)
        return this
    }

    Array.prototype.unique = function(){
        return Array.from(new Set(this))
    }

    Array.prototype.uniqueObject = function(prop){
        const temp = []
        const target = []
        this.forEach(item=>{
            if(!temp.includes(item[prop])){
                target.push(item)
                temp.push(item[prop])
            }
        })
        return target
    }
}