
burgur = document.querySelector('.burgur')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')


burgur.addEventListener('click',()=>{
        rightNav.classList.toggle('v-class')
        navlist.classList.toggle('v-class')
        navbar.classList.toggle('h-nav')
})