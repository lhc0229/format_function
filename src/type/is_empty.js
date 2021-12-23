import {isString,isObject,isArray} from "./typeof.js";

export function isEmptyString(data){
    if(isString(data)){
        const length = data.length
        return length > 0
    }
    return new Error('该参数不是一个字符串')
}

export function isEmptyObject(data){
    if(isObject(data)){
        const length = Object.keys(data).length
        return length > 0
    }
    return new Error('该参数不是一个对象')
}

export function isEmptyArray(data){
    if(isArray(data)){
        const length = data.length
        return length > 0
    }
    return new Error('该参数不是一个数组')
}
