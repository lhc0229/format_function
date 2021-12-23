import { getSingleEle } from "./get";

export function insertBefore(target,insert,success){
    const parents = getSingleEle(target).parentElement
    const targets = getSingleEle(target)
    const inserts = document.createElement(insert)
    parents.insertBefore(targets,inserts)
    success()
}

export function insertAfter(target,insert,success){
    const parents = getSingleEle(target).parentElement
    const nextEle = target.nextElementSibling;
    if(nextEle == null){
        parents.appendChild(insert);
    }
    else{
        insertBefore(nextEle,insert,success);
    }
}

export function setEleScrollTop(selector,top){
    const ele = document.querySelector(selector)
    if(ele){
        ele.scrollTop = top
    }
}