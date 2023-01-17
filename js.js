
const colors = document.querySelectorAll(".container ul li")
let h1 = document.querySelector("h1")


if(localStorage.color != null){
    document.documentElement.style.setProperty("--webkit-color", localStorage.color)
    colors.forEach((e) => {
        e.classList.remove("active")
            if(e.dataset.color === localStorage.color){
                e.classList.add("active")
                }
    })

    
}



colors.forEach((li) => {

    li.addEventListener("click", (e) =>{
        console.log(e.target.dataset.color)
        document.documentElement.style.setProperty("--webkit-color", e.target.dataset.color)
        localStorage.setItem("color", e.target.dataset.color)
        e.target.parentElement.querySelectorAll(".active").forEach((e) => {
            e.classList.remove("active")
        })
        e.target.classList.add("active")
    })

})
// console.log(colors)