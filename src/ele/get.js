export function getSingleEle(ele){
    return document.querySelector(ele)
}

export function getAllEle(ele){
    return document.querySelectorAll(ele)
}

export function getPageScrollTop(){
    return document.documentElement.scrollTop || document.body.scrollTop
}

export function getPageScrollHeight (){
    return document.documentElement.scrollHeight || document.body.scrollHeight
}

export function getIsTouchBottom(ele){
    return (ele.scrollHeight - ele.scrollTop === ele.clientHeight)
}

export function getEleScrollTop(selector){
    const ele = document.querySelector(selector)
    if(ele){
        return ele.scrollTop
    }
}

export function getEleScrollHeight(selector){
    const ele = document.querySelector(selector)
    if(ele){
        return ele.scrollHeight
    }
}

export function getEleClientWidth(selector){
    const ele = document.querySelector(selector)
    if(ele){
        return ele.clientWidth
    }
}

export function getEleClientHeight(selector){
    const ele = document.querySelector(selector)
    if(ele){
        return ele.clientHeight
    }
}

export function getEleOffsetTop(selector){
    const ele = document.querySelector(selector)
    if(ele){
        return ele.offsetTop
    }
}

export function getEleOffsetParent(selector){
    const ele = document.querySelector(selector)
    if(ele){
        return ele.offsetParent
    }
}

export function getEleOffsetWidth(selector){
    const ele = document.querySelector(selector)
    if(ele){
        return ele.offsetWidth
    }
}

export function getEleOffsetHeight(selector){
    const ele = document.querySelector(selector)
    if(ele){
        return ele.offsetHeight
    }
}

