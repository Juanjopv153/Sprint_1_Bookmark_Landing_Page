import { array } from "./data.js"

let simple = document.getElementById('simple')
let speedy = document.getElementById('speedy')
let easy = document.getElementById('easy')
const main = document.getElementById('main')
let count = 0;


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
        default:
            break
    }
})

const showInfo = (index) => {
    main.querySelector('img').src = array[index].url
    main.querySelector('h1').textContent = array[index].title
    main.querySelector('p').textContent = array[index].description
}

document.getElementById('icon1').addEventListener('click', ()=>{
    if(count==0){
    document.getElementById('over1').style = `position: relative;
    transform: translateY(0%);  transition: all 0.5s;`
    document.getElementById('icon1').style = `transform: rotate(180deg); transition: all 0.5s;`
    count = 1    
}
else{
    document.getElementById('over1').style = `transform: translateY(-100%);  transition: all 0.5s;`
    document.getElementById('icon1').style = `transform: rotate(0deg); transition: all 0.5s;`
    // setTimeout(()=>{document.getElementById('over1').style = `position: absolute;`},10000)
    count = 0
}
})