export const downloadBlob = (blob,filename,success)=>{
    const data = new Blob([blob]);
    const fileName = filename
    const link = document.createElement("a");
    link.href = URL.createObjectURL(data);
    link.download = fileName;
    link.click()
    success()
}