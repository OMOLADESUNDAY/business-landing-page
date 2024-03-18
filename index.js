var menuopen = document.getElementById("menuopen")
var closemenu = document.getElementById("closemenu")
var nav = document.getElementById("nav")
menuopen.addEventListener("click",()=>{
    nav.classList.add('active')
    
})
closemenu.addEventListener('click',()=>{
    nav.classList.remove("active")
})
document.addEventListener("click",(e)=>{
    const target=e.target
   
    if (target !== menuopen && !menuopen.contains(target)){
        nav.classList.remove("active")
    }
})


