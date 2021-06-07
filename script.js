const textEl = document.getElementById('text')
const speed = document.getElementById('speed')
const text = 'we love programming'
let idx = 1
let fast = 300 / speed.value
writeText()
function writeText() {
    textEl.innerText = text.slice(0, idx)
    idx++
    if (idx > text.length) {
        idx = 1
    }
    setTimeout(writeText, fast)
}
speed.addEventListener('input', (e) => fast = 300 / e.target.value)
