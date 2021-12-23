import {isEmptyArray,isEmptyObject,isEmptyString} from "./src/type/is_empty.js";
import {isArray,isBoolean,isFun,isNumber,isObject,isString,isHtml,isNull} from "./src/type/typeof.js";
import copyText from "./src/copyText/index.js";
import {query,openNewPage,setUrl} from "./src/url/index";
import {setSingleEleCss,setAllEleCss} from "./src/css/setCss";
import {deepClone} from "./src/object/deepClone";
import {getObjectKey,getObjectValue,getObjectParse,getObjectString} from "./src/object/transformation";
import store from "./src/storage";
import {
    getPageScrollHeight,
    getPageScrollTop,
    getAllEle,
    getSingleEle,
    getIsTouchBottom,
    getEleScrollTop,
    getEleScrollHeight,
    getEleClientWidth,
    getEleClientHeight,
    getEleOffsetTop,
    getEleOffsetWidth,
    getEleOffsetParent,
    getEleOffsetHeight
} from "./src/ele/get";
import {strStart,strEnd} from "./src/string";
import {insertBefore,insertAfter,setEleScrollTop} from "./src/ele/set";
import {imgToBase64} from "./src/img";
import {promise} from "./src/promise";
import {array} from "./src/array";
import {downloadBlob} from "./src/download";
import {getSingleEleCss,getAllEleCss} from "./src/css/getCss";

export {
    isArray,
    isBoolean,
    isFun,
    isNumber,
    isObject,
    isString,
    isHtml,
    isNull,
    isEmptyArray,
    isEmptyObject,
    isEmptyString,
    copyText,
    query,
    setUrl,
    openNewPage,
    getAllEle,
    getSingleEle,
    setSingleEleCss,
    setAllEleCss,
    getObjectKey,
    getObjectValue,
    getObjectParse,
    getObjectString,
    getSingleEleCss,
    getAllEleCss,
    store,
    getPageScrollHeight,
    getPageScrollTop,
    strStart,
    strEnd,
    insertBefore,
    insertAfter,
    setEleScrollTop,
    imgToBase64,
    promise,
    array,
    getIsTouchBottom,
    downloadBlob,
    deepClone,
    getEleScrollTop,
    getEleScrollHeight,
    getEleClientWidth,
    getEleClientHeight,
    getEleOffsetHeight,
    getEleOffsetTop,
    getEleOffsetWidth,
    getEleOffsetParent
}