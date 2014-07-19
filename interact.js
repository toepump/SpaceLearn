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
    var node2 = document.createTextNode("AVG Distance from Earth: 1.496 x 10^8 km");
    var node3 = document.createTextNode("Age: ~4.6 billion years");
    var node4 = document.createTextNode("Diameter: 1,391,684 km");
    var node5 = document.createTextNode("Mass: 1.9891 x 10^30 kg");
    var node6 = document.createTextNode("Gravitational Acc.: 273.13 m/s^2 OR 27.95 g");
    
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
    
    //info
    var br = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var info = document.createElement("p");
    var node2 = document.createTextNode("AVG Distance from Sun: 57 million km");
    var node3 = document.createTextNode("Age: ~4.6 billion years");
    var node4 = document.createTextNode("Diameter: 4,878 km");
    var node5 = document.createTextNode("Mass: 3.3022 x 10^23 kg");
    var node6 = document.createTextNode("Gravitational Acc.: 3.59 m/s^2 OR 0.37 g");
    
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

function venusInfo()
{
    endInfo();
    audio.play();
    
    //planet name
    var para = document.createElement("h2");
    var node = document.createTextNode("Venus");
    para.appendChild(node);
    var element = document.getElementById("HUD");
    element.appendChild(para);
    element.style.color = "white";
    element.style.textAlign = "center";
    element.style.fontFamily = "Finger Paint";
    
    //photo
    var img = document.createElement("img");
    img.src = "images/venus.png";
    var src = document.getElementById("HUD");
    img.style.height = "400px";
    img.style.height = "400px";
    src.appendChild(img);
    
    //info
    var br = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var info = document.createElement("p");
    var node2 = document.createTextNode("AVG Distance from Sun: 108 million km");
    var node3 = document.createTextNode("Age: ~4.6 billion years");
    var node4 = document.createTextNode("Diameter: 12,100 km");
    var node5 = document.createTextNode("Mass: 4.8685 x 10^24 kg");
    var node6 = document.createTextNode("Gravitational Acc.: 8.87 m/s^2 OR 0.90 g");
    
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
    
    //planet name
    var para = document.createElement("h2");
    var node = document.createTextNode("The Earth");
    para.appendChild(node);
    var element = document.getElementById("HUD");
    element.appendChild(para);
    element.style.color = "white";
    element.style.textAlign = "center";
    element.style.fontFamily = "Finger Paint";
    
    //photo
    var img = document.createElement("img");
    img.src = "images/earth.jpg";
    var src = document.getElementById("HUD");
    img.style.height = "250px";
    img.style.height = "250px";
    src.appendChild(img);
    
    //info
    var br = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var info = document.createElement("p");
    var node2 = document.createTextNode("AVG Distance from Sun: 150 million km");
    var node3 = document.createTextNode("Age: ~4.6 billion years");
    var node4 = document.createTextNode("Diameter: 12,742 km");
    var node5 = document.createTextNode("Mass: 5.9736 x 10^24 kg");
    var node6 = document.createTextNode("Gravitational Acc.: 9.81 m/s^2 OR 1 g");
    
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
    
    //info
    var br = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var info = document.createElement("p");
    var node2 = document.createTextNode("AVG Distance from Earth: 1.496 x 10^8 km");
    var node3 = document.createTextNode("Age: ~4.6 billion years");
    var node4 = document.createTextNode("Diameter: 3,473 km");
    var node5 = document.createTextNode("Mass: 7.349 x 10^22 kg");
    var node6 = document.createTextNode("Gravitational Acc.: 1.62 m/s^2 OR 0.17 g");
    
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
    
    //info
    var br = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var info = document.createElement("p");
    var node2 = document.createTextNode("AVG Distance from Sun: 228 million km");
    var node3 = document.createTextNode("Age: ~4.6 billion years");
    var node4 = document.createTextNode("Diameter: 6,779 km");
    var node5 = document.createTextNode("Mass: 6.4185 x 10^23 kg");
    var node6 = document.createTextNode("Gravitational Acc.: 3.77 m/s^2 OR 0.38 g");
    
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
    
    //info
    var br = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var info = document.createElement("p");
    var node2 = document.createTextNode("AVG Distance from Sun: 779 million km");
    var node3 = document.createTextNode("Age: ~4.6 billion years");
    var node4 = document.createTextNode("Diameter: 142,981 km");
    var node5 = document.createTextNode("Mass: 1.8986 x 10^27 kg");
    var node6 = document.createTextNode("Gravitational Acc.: 25.95 m/s^2 OR 2.65g");
    
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
    
    //info
    var br = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var info = document.createElement("p");
    var node2 = document.createTextNode("AVG Distance from Sun:1.43 billion km");
    var node3 = document.createTextNode("Age: ~4.6 billion years");
    var node4 = document.createTextNode("Diameter: 120,536 km");
    var node5 = document.createTextNode("Mass: 5.6846 x 10^26 kg");
    var node6 = document.createTextNode("Gravitational Acc.: 11.08 m/s^2 OR 1.13 g");
    
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
    
    //info
    var br = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var info = document.createElement("p");
    var node2 = document.createTextNode("AVG Distance from Sun: 2.88 billion km");
    var node3 = document.createTextNode("Age: ~4.6 billion years");
    var node4 = document.createTextNode("Diameter: 51,118 km");
    var node5 = document.createTextNode("Mass: 8.6810 x 10^25 kg");
    var node6 = document.createTextNode("Gravitational Acc.: 10.67 m/s^2 OR 1.09 g");
    
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
    
    //info
    var br = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var info = document.createElement("p");
    var node2 = document.createTextNode("AVG Distance from Sun: 4.50 billion km");
    var node3 = document.createTextNode("Age: ~4.6 billion years");
    var node4 = document.createTextNode("Diameter: 49,500 km");
    var node5 = document.createTextNode("Mass: 10.243 x 10^25 kg");
    var node6 = document.createTextNode("Gravitational Acc.: 14.07 m/s^2 OR 1.43 g");
    
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

function instruct()
{
    //planet name
    var para = document.createElement("p");
    var node = document.createTextNode("Discover Planets by Clicking STOP and Then Moving Your Mouse Over Them");
    para.appendChild(node);
    var element = document.getElementById("HUD");
    element.appendChild(para);
    element.style.color = "white";
    element.style.textAlign = "center";
    element.style.fontFamily = "Finger Paint";
}

function endInfo()
{
    var hud = document.getElementById("HUD").innerHTML = "";
}
