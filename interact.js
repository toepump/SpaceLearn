function sunInfo()
{
    var para = document.createElement("p");
    var node = document.createTextNode("The Sun");
    para.appendChild(node);
    var element = document.getElementById("HUD");
    element.appendChild(para);
    element.style.color = "white";
    element.style.textAlign = "center";
    element.style.fontSize = "4em";
    element.style.fontFamily = "Futura";
    
    var img = document.createElement("img");
    img.src = "images/sun.jpg";
    var src = document.getElementById("HUD");
    img.style.height = "350px";
    img.style.height = "350px";
    src.appendChild(img);
}

function endSunInfo()
{
    var hud = document.getElementById("HUD").innerHTML = "";
}
