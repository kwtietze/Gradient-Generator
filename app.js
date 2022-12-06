const picker1 = document.getElementById('picker-1')
const picker2 = document.getElementById('picker-2')
const form = document.getElementById('form')
const gradient = document.getElementById('gradient-code')
const btn = document.getElementById('random-button')
const copyButton = document.getElementById('copy-button')

picker1.addEventListener('input', generate)
picker2.addEventListener('input', generate)
btn.addEventListener('click', randomize)
copyButton.addEventListener('click', copy)

function generate() {
    const color1 = picker1.value
    const color2 = picker2.value
    console.log(color1)
    console.log(color2)
    document.body.style.background = `linear-gradient(${color1}, ${color2})`
    gradient.textContent = `linear-gradient(${color1}, ${color2})`
}

function randomize() {
    picker1.value = randomColor()
    picker2.value = randomColor()
    generate()
}

function copy() {
    navigator.clipboard.writeText(gradient.textContent).then(() => {
        alert('Copied to clipboard!')
    })
}

window.onload = randomize()


