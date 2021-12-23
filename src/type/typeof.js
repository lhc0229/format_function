export function isArray(data){
    return Object.prototype.toString.call(data)==='[object Array]'
}

export function isString(data){
    return Object.prototype.toString.call(data)==='[object String]'
}

export function isNumber(data){
    return Object.prototype.toString.call(data)==='[object Number]'
}

export function isBoolean(data){
    return Object.prototype.toString.call(data)==='[object Boolean]'
}

export function isObject(data){
    return Object.prototype.toString.call(data)==='[object Object]'
}

export function isFun(data){
    return Object.prototype.toString.call(data)==='[object Function]'
}

export function isHtml(data){
    return Object.prototype.toString.call(data)==='[object HTMLCollection]'
}

export function isNull(data,init_value={}){
    if(data === null){
        return init_value
    }
    return data
}
