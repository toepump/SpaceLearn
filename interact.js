var audio = new Audio("sounds/pop.mp3");

$("#sun").onmouseover(function(e){
    e.stopPropagation();
});

function sunInfo()
{
    audio.play();
    
    //planet name
    var para = document.createElement("h2");
    var node = document.createTextNode("The Sun");
    para.appendChild(node);
    var element = document.getElementById("HUD");
    element.appendChild(para);
    element.style.color = "white";
    element.style.textAlign = "center";
    element.style.fontFamily = "Futura";
    
    //photo
    var img = document.createElement("img");
    img.src = "images/sun.jpg";
    var src = document.getElementById("HUD");
    img.style.height = "350px";
    img.style.height = "350px";
    src.appendChild(img);
    
    //info
    var br = document.createElement("br");
    var info = document.createElement("p");
    var node2 = document.createTextNode("Distance from Earth: 1.496x10^8 km");
    var node3 = document.createTextNode("Age: 4.6 billion years");
    info.appendChild(node2);
    info.appendChild(br);
    info.appendChild(node3);
    var element2 = document.getElementById("HUD");
    element2.appendChild(info);
    
    stopPropogation();
}

function earthInfo()
{
    event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true)
}

function endInfo()
{
    var hud = document.getElementById("HUD").innerHTML = "";
}
