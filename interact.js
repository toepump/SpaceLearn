var audio = new Audio("sounds/pop.mp3");
var play = true;


function control()
{
    var cont = document.getElementById("control");
    var earth = document.getElementById("earth-orbit");
    var moon = document.getElementById("moon-orbit");
        
    if(play)
    {
        cont.style.backgroundColor = "yellow";
        cont.innerHTML = "Start";
        play=false;
        earth.style.webkitAnimationPlayState="paused";
        moon.style.webkitAnimationPlayState="paused";
    }
    else
    {
        cont.style.backgroundColor = "#ccc";
        cont.innerHTML = "Stop";
        play=true;
        earth.style.webkitAnimationPlayState="running";
        moon.style.webkitAnimationPlayState="running";
    }
}

function sunInfo()
{
    endInfo();
    audio.play();
    
    //planet name
    var para = document.createElement("h2");
    var node = document.createTextNode("The Sun");
    para.appendChild(node);
    var element = document.getElementById("HUD");
    element.appendChild(para);
    element.style.color = "white";
    element.style.textAlign = "center";
    element.style.fontFamily = "Finger Paint";
    
    //photo
    var img = document.createElement("img");
    img.src = "images/sun.jpg";
    var src = document.getElementById("HUD");
    img.style.height = "350px";
    img.style.height = "350px";
    src.appendChild(img);
    
    //info
    var br = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var info = document.createElement("p");
    var node2 = document.createTextNode("Distance from Earth: 1.496 x 10^8 km");
    var node3 = document.createTextNode("Age: 4.6 billion years");
    var node4 = document.createTextNode("Diameter: 4.6 billion years");
    var node5 = document.createTextNode("Mass: 4.6 billion years");
    var node6 = document.createTextNode("Gravitational Acceleration: 4.6 billion years");
    
    info.appendChild(node2);
    info.appendChild(br);
    info.appendChild(node3);
    info.appendChild(br2);
    info.appendChild(node4);
    info.appendChild(br3);
    info.appendChild(node5);
    info.appendChild(br4);
    info.appendChild(node6);
    
    info.style.textAlign = "left";
    
    var element2 = document.getElementById("HUD");
    element2.appendChild(info);
}

function earthInfo()
{
    endInfo();
    audio.play();
    
    var para = document.createElement("h2");
    var node = document.createTextNode("The Earth");
    para.appendChild(node);
    var element = document.getElementById("HUD");
    element.appendChild(para);
    element.style.color = "white";
    element.style.textAlign = "center";
    element.style.fontFamily = "Finger Paint";
    
    var img = document.createElement("img");
    img.src = "images/earth.jpg";
    var src = document.getElementById("HUD");
    img.style.height = "250px";
    img.style.height = "250px";
    src.appendChild(img);
}

function endInfo()
{
    var hud = document.getElementById("HUD").innerHTML = "";
}
