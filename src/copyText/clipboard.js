import Clipboard from 'clipboard'

export default function handleClipboard(text, event,success,error) {
    const clipboard = new Clipboard(event.target, {
        text: () => text
    })
    clipboard.on('success', () => {
        success()
        clipboard.destroy()
    })
    clipboard.on('error', (err) => {
        error(err)
        clipboard.destroy()
    })
    clipboard['onClick'](event)
}
