export function imgToBase64(file){
    return new Promise((resolve, reject) => {
        const img = new Image();
        const url = window.URL || window.webkitURL;
        img.src = url.createObjectURL(file);
        img.onload = function () {
            const canvas = document.createElement("canvas");
            canvas.width = this.width;
            canvas.height = this.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(this, 0, 0, this.width, this.height);
            const ext = this.src.substring(this.src.lastIndexOf(".") + 1).toLowerCase();
            const dataURL = canvas.toDataURL("image/" + ext);
            resolve(dataURL)
        }
    })
}