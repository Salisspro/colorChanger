let first = document.querySelector('h1')
first.style.padding = '1em'

let head = document.getElementById('h')
    head.style.backgroundColor = 'blue'
    head.style.position = 'center'
    console.log(head)


const nav = document.getElementsByTagName('li')

//nav[1].style.color = 'red'
//nav[0].textContent = 'HOME'

for(let i = 0; i < nav.length; i++){
    nav[i].style.color = 'green'
}

function func() {
    document.body.style.backgroundColor = 'yellow'
    let color = document.getElementById('text')
    color.style.fontFamily = 'courier'
    console.log(color)
    color.style.color = 'red'
    head.style.backgroundColor = 'blue'
}

function call(color) {
    document.body.style.backgroundColor = color;
    head.style.backgroundColor = '#316'
}
