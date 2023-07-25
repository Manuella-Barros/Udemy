var body = document.querySelector("body");
var tagsP = document.querySelectorAll("p");
var estilosBody = getComputedStyle(body);
var bodyBackground = estilosBody.backgroundColor;

for(var i = 0; i < tagsP.length; i++){
    tagsP[i].style.backgroundColor = bodyBackground;
    tagsP[i].style.color = "white";
}
