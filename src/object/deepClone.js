export const deepClone = (origin,target)=>{
    const new_target = target || {}
    for (const prop in origin) {
        if(origin.hasOwnProperty(prop)){
            if((typeof (origin[prop]) === 'object') && (origin[prop] !== null)){
                new_target[prop] = Object.prototype.toString.call(origin[prop] === '[object Array]') ? [] : {}
                deepClone(origin[prop],new_target[prop])
            }else{
                new_target[prop] = origin[prop]
            }
        }
    }
    return new_target
}