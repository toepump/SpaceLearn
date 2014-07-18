var audio = new Audio("sounds/pop.mp3");
var play = true;

myaud = document.getElementById("aud");
myaud.volume=.2;

function control()
{
    var cont = document.getElementById("control");
    var mercury = document.getElementById("mercury-orbit");
    var venus = document.getElementById("venus-orbit");
    var earth = document.getElementById("earth-orbit");
    var moon = document.getElementById("moon-orbit");
    var mars = document.getElementById("mars-orbit");
    var jupiter = document.getElementById("jupiter-orbit");
    var saturn = document.getElementById("saturn-orbit");
    var uranus = document.getElementById("uranus-orbit");
    var neptune = document.getElementById("neptune-orbit");
    
    if(play)
    {
        cont.style.backgroundColor = "yellow";
        cont.innerHTML = "Start";
        play=false;
        mercury.style.webkitAnimationPlayState="paused";
        venus.style.webkitAnimationPlayState="paused";
        earth.style.webkitAnimationPlayState="paused";
        moon.style.webkitAnimationPlayState="paused";
        mars.style.webkitAnimationPlayState="paused";
        jupiter.style.webkitAnimationPlayState="paused";
        saturn.style.webkitAnimationPlayState="paused";
        uranus.style.webkitAnimationPlayState="paused";
        neptune.style.webkitAnimationPlayState="paused";
    }
    else
    {
        cont.style.backgroundColor = "#ccc";
        cont.innerHTML = "Stop";
        play=true;
        mercury.style.webkitAnimationPlayState="running";
        venus.style.webkitAnimationPlayState="running";
        earth.style.webkitAnimationPlayState="running";
        moon.style.webkitAnimationPlayState="running";
        mars.style.webkitAnimationPlayState="running";
        jupiter.style.webkitAnimationPlayState="running";
        saturn.style.webkitAnimationPlayState="running";
        uranus.style.webkitAnimationPlayState="running";
        neptune.style.webkitAnimationPlayState="running";
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
    var node4 = document.createTextNode("Diameter: 1,391,684 km");
    var node5 = document.createTextNode("Mass: 333,000 x Earth");
    var node6 = document.createTextNode("Gravitational Acceleration: 273.13 m/s^2");
    
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

function mercuryInfo()
{
    endInfo();
    audio.play();
    
     //planet name
    var para = document.createElement("h2");
    var node = document.createTextNode("Mercury");
    para.appendChild(node);
    var element = document.getElementById("HUD");
    element.appendChild(para);
    element.style.color = "white";
    element.style.textAlign = "center";
    element.style.fontFamily = "Finger Paint";
    
    //photo
    var img = document.createElement("img");
    img.src = "images/mercury.png";
    var src = document.getElementById("HUD");
    img.style.height = "350px";
    img.style.height = "350px";
    src.appendChild(img);
}

function venusInfo()
{
    endInfo();
    audio.play();
    
    var para = document.createElement("h2");
    var node = document.createTextNode("Venus");
    para.appendChild(node);
    var element = document.getElementById("HUD");
    element.appendChild(para);
    element.style.color = "white";
    element.style.textAlign = "center";
    element.style.fontFamily = "Finger Paint";
    
    var img = document.createElement("img");
    img.src = "images/venus.png";
    var src = document.getElementById("HUD");
    img.style.height = "400px";
    img.style.height = "400px";
    src.appendChild(img);
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

function moonInfo()
{
    endInfo();
    audio.play();
    
      //planet name
    var para = document.createElement("h2");
    var node = document.createTextNode("Our Moon");
    para.appendChild(node);
    var element = document.getElementById("HUD");
    element.appendChild(para);
    element.style.color = "white";
    element.style.textAlign = "center";
    element.style.fontFamily = "Finger Paint";
    
    //photo
    var img = document.createElement("img");
    img.src = "images/moonhd.png";
    var src = document.getElementById("HUD");
    img.style.height = "350px";
    img.style.height = "350px";
    src.appendChild(img);
}

function marsInfo()
{
    endInfo();
    audio.play();
    
    //planet name
    var para = document.createElement("h2");
    var node = document.createTextNode("Mars");
    para.appendChild(node);
    var element = document.getElementById("HUD");
    element.appendChild(para);
    element.style.color = "white";
    element.style.textAlign = "center";
    element.style.fontFamily = "Finger Paint";
    
    //photo
    var img = document.createElement("img");
    img.src = "images/mars.png";
    var src = document.getElementById("HUD");
    img.style.height = "350px";
    img.style.height = "350px";
    src.appendChild(img);
}

function jupiterInfo()
{
    endInfo();
    audio.play();
    
    //planet name
    var para = document.createElement("h2");
    var node = document.createTextNode("Jupiter");
    para.appendChild(node);
    var element = document.getElementById("HUD");
    element.appendChild(para);
    element.style.color = "white";
    element.style.textAlign = "center";
    element.style.fontFamily = "Finger Paint";
    
    //photo
    var img = document.createElement("img");
    img.src = "images/jupiter.png";
    var src = document.getElementById("HUD");
    img.style.height = "350px";
    img.style.height = "350px";
    src.appendChild(img);
}

function saturnInfo()
{
    endInfo();
    audio.play();
    
    //planet name
    var para = document.createElement("h2");
    var node = document.createTextNode("Saturn");
    para.appendChild(node);
    var element = document.getElementById("HUD");
    element.appendChild(para);
    element.style.color = "white";
    element.style.textAlign = "center";
    element.style.fontFamily = "Finger Paint";
    
    //photo
    var img = document.createElement("img");
    img.src = "images/saturnc.png";
    var src = document.getElementById("HUD");
    img.style.height = "350px";
    img.style.height = "350px";
    src.appendChild(img);
}

function uranusInfo()
{
    endInfo();
    audio.play();
    
    //planet name
    var para = document.createElement("h2");
    var node = document.createTextNode("Uranus");
    para.appendChild(node);
    var element = document.getElementById("HUD");
    element.appendChild(para);
    element.style.color = "white";
    element.style.textAlign = "center";
    element.style.fontFamily = "Finger Paint";
    
    //photo
    var img = document.createElement("img");
    img.src = "images/uranus.png";
    var src = document.getElementById("HUD");
    img.style.height = "350px";
    img.style.height = "350px";
    src.appendChild(img);
}

function neptuneInfo()
{
    endInfo();
    audio.play();
    
    //planet name
    var para = document.createElement("h2");
    var node = document.createTextNode("Neptune");
    para.appendChild(node);
    var element = document.getElementById("HUD");
    element.appendChild(para);
    element.style.color = "white";
    element.style.textAlign = "center";
    element.style.fontFamily = "Finger Paint";
    
    //photo
    var img = document.createElement("img");
    img.src = "images/neptune.png";
    var src = document.getElementById("HUD");
    img.style.height = "350px";
    img.style.height = "350px";
    src.appendChild(img);
}

function endInfo()
{
    var hud = document.getElementById("HUD").innerHTML = "";
}
