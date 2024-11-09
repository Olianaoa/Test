let curPage = 0;
const pages = document.getElementsByClassName('page')

document.getElementById('menu1').addEventListener('click', () => {
    pages[curPage].classList.add('no')
    pages[0].classList.remove('no')
    curPage = 0
})
document.getElementById('menu2').addEventListener('click', () => {
    pages[curPage].classList.add('no')
    pages[1].classList.remove('no')
    curPage = 1
})
document.getElementById('menu3').addEventListener('click', () => {
    pages[curPage].classList.add('no')
    pages[2].classList.remove('no')
    curPage = 2
})
document.getElementById('menu4').addEventListener('click', () => {
    pages[curPage].classList.add('no')
    pages[3].classList.remove('no')
    curPage = 3
})