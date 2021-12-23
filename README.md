# format-function



| 方法名                          | 使用                                                         |     范畴     |
| ------------------------------- | ------------------------------------------------------------ | :----------: |
| setSingleEleCss(ele,style)      | 设置单个元素的css样式，ele为要操作的单个dom元素，style为样式对象，例如{width:"50px"}，无返回值 |     css      |
| setAllEleCss(ele,style)         | 设置多个元素的css样式，ele为要操作的dom元素集合，style为样式对象，例如{width:"50px"}，无返回值 |     css      |
| array()                         | 一个方法，执行后将会在数组的原型链上追加两个方法，分别是delete、insert，unique，uniqueObject方法。delete(index),index为要删除的索引。insert(index,arr),index为要插入的位置，arr为数组，存放插入的元素。unique方法只是简单的数组去重，使用Array.from(new Set(this))实现。uniqueObject(prop)方法,数组对象去重，prop为根据对象的字段去重 |    array     |
| copyText(text,success,error)    | 复制文本，text为要复制的文本内容，success为复制成功之后的回调函数，error为复制失败后的回调函数，无返回值 |   复制文本   |
| getSingleEle(selector)          | 获取单个dom元素，selector为css选择器，返回值为一个dom元素    |     dom      |
| getAllEle(selector)             | 获取dom元素集合，selector为css选择器，，返回值为一个dom元素集合 |     dom      |
| getPageScrollY()                | 获取页面滚动条的滚动距离，返回值为滚动距离                   |     dom      |
| getPageScrollHeight()           | 获取窗口实际高度，返回值为窗口实际高度                       |     dom      |
| getIsTouchBottom(ele)           | 判断滚动是否触底，ele为要操作的单个dom元素，返回值为一个布尔值 |     dom      |
| imgToBase64(file)               | img图片文件转化base64，返回值为base64数值                    |     img      |
| getObjectKey(object)            | 获取对象的属性，返回值为一个数组                             |    object    |
| getObjectValue(object)          | 获取对象的属性值，返回值为一个数组                           |    object    |
| getObjectParse(object)          | 转换成json对象，返回值为json对象                             |    object    |
| getObjectString(object)         | 转换成json字符串，返回值为json字符串                         |    object    |
| store                           | store为一个对象，分别为store.set(name,value)、store.get(name)、store.remove(name)、store.clearAll() | localStorage |
| strStart(string,start)          | 判断字符串是否以特定开头，返回一个布尔值                     |    sting     |
| strEnd(string,start)            | 判断字符串是否以特定结尾，返回一个布尔值                     |    sting     |
| isEmptyString(data)             | 是否空字符串，返回一个布尔值                                 |    sting     |
| isEmptyObject(data)             | 是否空对象，返回一个布尔值                                   |    object    |
| isEmptyArray(data)              | 是否空数组，返回一个布尔值                                   |    array     |
| isArray(data)                   | 是否是数组，返回一个布尔值                                   |    array     |
| isString(data)                  | 是否是字符串，返回一个布尔值                                 |    sting     |
| isNumber(data)                  | 是否是数值，返回一个布尔值                                   |    number    |
| isBoolean(data)                 | 是否是布尔值，返回一个布尔值                                 |   boolean    |
| isObject(data)                  | 是否是对象，返回一个布尔值                                   |    object    |
| isFun(data)                     | 是否是函数，返回一个布尔值                                   |   function   |
| isHtml(data)                    | 是否是dom元素集合，返回一个布尔值                            |     dom      |
| query                           | 一个对象，包含url上的参数                                    |     url      |
| openNewPage(url)                | 打开一个新页面，无返回值                                     |     url      |
| setUrl(url,query,is_cover)      | 设置url，url为一个完整的url，可包含参数，query为一个对象，is_cover为一个布尔值，当url上的参数query有相同时，query是否覆盖url的参数值，默认值为true，覆盖 |     url      |
| deepClone(origin,target)        | 对象深拷贝，origin为原对象，target为目标对象，返回一个对象   |    object    |
| getSingleEleCss(selector,field) | selector为css选择器,field为要获取的字段的值                  |     dom      |
| getAllEleCss(selector)          | selector为css选择器                                          |     dom      |
| getEleScrollTop(selector)       | 获取元素的scrollTop                                          |     dom      |
| getEleScrollHeight(selector)    | 获取元素的scrollHeight                                       |     dom      |
| getEleClientWidth(selector)     | 获取元素的clientWidth                                        |     dom      |
| getEleClientHeight(selector)    | 获取元素的clientHeight                                       |     dom      |
| getEleOffsetTop(selector)       | 获取元素的offsetTop                                          |     dom      |
| getEleOffsetParent(selector)    | 获取元素的offsetParent                                       |     dom      |
| getEleOffsetHeight(selector)    | 获取元素的offsetHeight                                       |     dom      |
| getEleOffsetWidth(selector)     | 获取元素的offsetWidth                                        |     dom      |
| setEleScrollTop(selector,top)   | top为距离                                                    |     dom      |
|                                 |                                                              |              |
|                                 |                                                              |              |
|                                 |                                                              |              |

