let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("ОПП");
        habilidades[3].classList.add("React");
        habilidades[4].classList.add("TypeScript");
        habilidades[5].classList.add("JSON");
        habilidades[6].classList.add("HTTP");
        habilidades[7].classList.add("Redux(toolkit");
        habilidades[8].classList.add("AJAX");
        habilidades[9].classList.add("GitHub");
    }
}


window.onscroll = function(){
    efectoHabilidades();
} 

