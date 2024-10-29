let username = document.getElementById("we")
let password = document.getElementById("er")
let pass = password.value
let spu = document.querySelector(".spu")
let spp = document.querySelector(".spp")
function funu(){
    let user = username.value
    if (user.length < 12){
        spu.innerHTML = "کمتر از 12 کاراکتر است "
        spu.style.color = "red"
        spu.style.display = "inline"
    }else{
        spu.innerHTML = "مجاز است "
        spu.style.color = "green"
        spu.style.display = "inline"

        
    }
}
function funp(){
    let pass = password.value
    if (pass.length < 8){
        spp.innerHTML = "کمتر از 8 کاراکتر است "
        spp.style.color = "red"
        spp.style.display = "inline"
    }else{
        spp.innerHTML = "مجاز است "
        spp.style.color = "green"
        spp.style.display = "inline"

        
    }
}





