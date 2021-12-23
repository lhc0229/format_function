import {getSingleEle} from "../ele/get";

export function getSingleEleCss(ele,field){
    const element =  getSingleEle(ele)
    if(element){
       return { [field]:getComputedStyle(element)[field]}
    }
}

export function getAllEleCss(ele){
    const element =  getSingleEle(ele)
    if(element){
        return getComputedStyle(element)
    }
}