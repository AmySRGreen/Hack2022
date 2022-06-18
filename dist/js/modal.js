document.getElementById("comida").addEventListener("click", function(){
    document.getElementsByClassName("fondo_transparente")[0].style.display="block";
    return false;

})

document.getElementsByClassName("modal_cerrar")[0].addEventListener("click", function(){
    document.getElementsByClassName("fondo_transparente")[0].style.display="none";
})

document.getElementById("entretenimento").addEventListener("click", function(){
    document.getElementsByClassName("fondo_transparente2")[0].style.display="block";
    return false;

})

document.getElementsByClassName("modal_cerrar2")[0].addEventListener("click", function(){
    document.getElementsByClassName("fondo_transparente2")[0].style.display="none";
})

document.getElementById("cultura").addEventListener("click", function(){
    document.getElementsByClassName("fondo_transparente3")[0].style.display="block";
    return false;

})

document.getElementsByClassName("modal_cerrar3")[0].addEventListener("click", function(){
    document.getElementsByClassName("fondo_transparente3")[0].style.display="none";
})