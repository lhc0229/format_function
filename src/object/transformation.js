import {isEmptyObject} from "../type/is_empty";

export function getObjectKey(object){
    if(isEmptyObject(object)){
        return Object.keys(object)
    }
}

export function getObjectValue(object){
    if(isEmptyObject(object)){
        let value = []
        Object.keys(object).forEach(item=>{
            value.push(object['item'])
        })
        return value
    }
}

export function getObjectParse(object){
    if(isEmptyObject(object)){
        return JSON.parse(object)
    }
}

export function getObjectString(object){
    if(isEmptyObject(object)){
        return JSON.stringify(object)
    }
}