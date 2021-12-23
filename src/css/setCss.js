import {getAllEle,getSingleEle} from "../ele/get";
import { isEmptyObject } from "../type/is_empty";
import {isHtml} from "../type/typeof";

export function setSingleEleCss(ele,css){
    const element =  getSingleEle(ele)
    if(isEmptyObject(css)){
        Object.keys(css).forEach(item=>{
            element.style[item] = css[item]
        })
    }
}

export function setAllEleCss(ele,css){
    const element =  getAllEle(ele)
    if(isEmptyObject(css)&&isHtml(ele)){
        const len = element.length
        for(let i = 0;i < len; i++){
            Object.keys(css).forEach(item=>{
                element[i].style[item] = css[item]
            })
        }
    }
}