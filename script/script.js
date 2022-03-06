import { array } from "./data.js"

let simple = document.getElementById('simple')
let speedy = document.getElementById('speedy')
let easy = document.getElementById('easy')
const main = document.getElementById('main')
let count = 0;
const nav = document.getElementById('navHeader')
const submit = document.getElementById('submit')

submit.addEventListener('click', () => {
    let email = document.getElementById('email').value
    if (email == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "No has escrito nada!"
          })
    }
    else {
        window.location = `https://github.com/${email}`
        document.getElementById('email').value = ""
    }
})


document.addEventListener('click', (e) => {
    switch (e.target.id) {
        case "simple":
            simple.style = `
            border-bottom: 2px solid var(--primaryColorRed);
            transition: 0.3s all;
            `
            speedy.style = `
            border-bottom:1px solid black;;
            transition: 0.3s all;
            `
            easy.style = `
            border-bottom:1px solid black;;
            transition: 0.3s all;
            `
            showInfo(0)
            break
        case "speedy":
            simple.style = `
            border-bottom: 1px solid black;;
            transition: 0.3s all;
            `
            speedy.style = `
            border-bottom:2px solid var(--primaryColorRed);
            transition: 0.3s all;
            `
            easy.style = `
            border-bottom:1px solid black;;
            transition: 0.3s all;
            `
            showInfo(1)
            break
        case "easy":
            simple.style = `
            border-bottom: 1px solid black;;
            transition: 0.3s all;
            `
            speedy.style = `
            border-bottom:1px solid black;;
            transition: 0.3s all;
            `
            easy.style = `
            border-bottom:2px solid var(--primaryColorRed);
            transition: 0.3s all;
            `
            showInfo(2)
            break
        case "hamburger":
            nav.style = `transform:translateY(0%)`
            break
        case "cerrar":
            nav.style = `transform:translateY(-101%)`
            break
        case "features":
            nav.style = `transform:translateY(-101%)`
            break
        case "login":
            nav.style = `transform:translateY(-101%)`
            break
        case "pricing":
            nav.style = `transform:translateY(-101%)`
            break
        case "contact":
            nav.style = `transform:translateY(-101%)`
            break
        case "imgFace":
            nav.style = `transform:translateY(-101%)`
            break
        case "imgTwit":
            nav.style = `transform:translateY(-101%)`
            break
        default:
            break
    }
})

const showInfo = (index) => {
    main.querySelector('img').src = array[index].url
    main.querySelector('h1').textContent = array[index].title
    main.querySelector('p').textContent = array[index].description
}

document.getElementById('icon1').addEventListener('click', () => {
    if (count == 0) {
        icon('icon1', 1)
        icon('icon2', 0)
        icon('icon3', 0)
        icon('icon4', 0)
        over('over1', 1)
        over('over2', 0)
        over('over3', 0)
        over('over4', 0)
        count = 1
    }
    else {
        icon('icon1', 0)
        over('over1', 0)
        count = 0
    }
})

document.getElementById('icon2').addEventListener('click', () => {
    if (count == 0) {
        icon('icon1', 0)
        icon('icon2', 1)
        icon('icon3', 0)
        icon('icon4', 0)
        over('over1', 0)
        over('over2', 1)
        over('over3', 0)
        over('over4', 0)
        count = 1
    }
    else {
        icon('icon2', 0)
        over('over2', 0)
        count = 0
    }
})

document.getElementById('icon3').addEventListener('click', () => {
    if (count == 0) {
        icon('icon1', 0)
        icon('icon2', 0)
        icon('icon3', 1)
        icon('icon4', 0)
        over('over1', 0)
        over('over2', 0)
        over('over3', 1)
        over('over4', 0)
        count = 1
    }
    else {
        icon('icon3', 0)
        over('over3', 0)
        count = 0
    }
})

document.getElementById('icon4').addEventListener('click', () => {
    if (count == 0) {
        icon('icon1', 0)
        icon('icon2', 0)
        icon('icon3', 0)
        icon('icon4', 1)
        over('over1', 0)
        over('over2', 0)
        over('over3', 0)
        over('over4', 1)
        count = 1
    }
    else {
        icon('icon4', 0)
        over('over4', 0)
        count = 0
    }
})




const icon = (id, count) => {
    if (count == 1) {
        document.getElementById(id).style.transform = "rotate(180deg)"
    }
    else {
        document.getElementById(id).style.transform = "rotate(0deg)"
    }
}

const over = (id, count) => {

    if (count == 1) {
        document.getElementById(id).style.transform = "translateY(0%)"
        document.getElementById(id).style.position = "relative"
    }
    else {
        document.getElementById(id).style.transform = "translateY(-100%)"
        document.getElementById(id).style.position = "absolute"
    }
}
