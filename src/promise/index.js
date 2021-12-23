export function promise(callbask){
    return new Promise((resolve, reject) => {
        callbask()
        resolve()
    })
}