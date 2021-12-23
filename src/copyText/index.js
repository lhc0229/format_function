import handleClipboard from "./clipboard.js";
export default function copyText(text,success,error) {
    const button = document.createElement('button')
    button.textContent = text
    button.onclick = (event) => {
        handleClipboard(text, event,success,error)
    }
    button.click()
}
