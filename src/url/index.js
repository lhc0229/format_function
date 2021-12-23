function getRouterQuery(href){
    const url = href || window.location.href
    const params = url.split('?')
    let query = {}
    if(params.length>1){
        const query_params = params[1].split('&')
        if(query_params.length>0){
            query_params.forEach(item=>{
                query[item.split('=')[0]] = item.split('=')[1]
                if(!isNaN(Number(item.split('=')[1]))&&item.split('=')[1]){
                    query[item.split('=')[0]] = Number(item.split('=')[1])
                }
                if(item.split('=')[1]==='null'){
                    query[item.split('=')[0]] = null
                }
                if(item.split('=')[1]==='false'){
                    query[item.split('=')[0]] = false
                }
                if(item.split('=')[1]==='true'){
                    query[item.split('=')[0]] = true
                }
            })
        }
    }
    return query
}

export const query = getRouterQuery()

export function openNewPage(url){
    window.open(url,"_blank");
}

export function setUrl(url,query={},is_cover=true){
    let old_query = getRouterQuery(url)
    let new_query = {...old_query,...query}
    if(!is_cover){
        new_query = {...query}
    }
    let new_url = url.split('?')[0]
    if(Object.keys(new_query).length>0){
        Object.keys(new_query).forEach((item,index)=>{
            if(index===0){
                new_url = new_url + '?' + item + '=' + new_query[item]
                return
            }
            new_url = new_url + '&' +　item　+ '=' + new_query[item]
        })
    }
    window.location.href = new_url
}