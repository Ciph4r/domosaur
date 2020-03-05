const hapli = document.querySelector('.mess-with-me-more');
hapli.style.fontSize = '3em';
hapli.style.color = 'green';

const hidePic = document.querySelector('#hide-me');
hidePic.style.visibility = "hidden";

const firstPic = document.querySelector('#triceratops');
firstPic.style.width = "324px";

const makeOj = () =>{
    hapli.style.color = 'orange'
}

hapli.addEventListener('click',makeOj)

const redborder = () => {
    firstPic.style.border = "thick solid red";
}
firstPic.addEventListener('click',redborder)

const trans = () => {
    document.querySelector("#feathers").style.opacity = '0.5'
}

document.querySelector("#feathers").addEventListener('click',trans)

let bcolors = true


const bcolor = () => {
    bcolors ? 
    (document.querySelector('#row').style.backgroundColor = 'red' , bcolors = false)
    :
    (document.querySelector('#row').style.backgroundColor = 'white' , bcolors = true)

}

document.querySelector('#toggle').addEventListener('click',bcolor)

const biggie = () => {

    document.querySelector('#biggify').style.height = "200px"
    document.querySelector('#biggify').style.width = "200px"
  
}

document.querySelector('#biggify').addEventListener('mouseover',biggie)

const cE = () => {
    document.querySelector('#biggify').style.height = ""
    document.querySelector('#biggify').style.width = ""
}
document.querySelector('#biggify').addEventListener("mouseleave",cE)


