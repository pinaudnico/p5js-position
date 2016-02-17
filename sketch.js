var myDiv;
function setup() {
  
  a = select('#nom');
  
  a.style("background-color", "#FF0000");
  a.style("font-size", "18pt");
  //a.position(100, 100);
  a.style.position= "relative";
  a.style.zIndex = "1";
  
  
  // myDiv = createDiv("C'est my Div");  --- cree une div en p5
  // myDiv.position(20, 20);
  
  	bout=document.getElementById('bouton');
  	bout.style.position= "relative";
  	bout.style.zIndex = "2";
  	//bout.style("z-index", 2);
  	
    bout.onclick = function(evt) {
    a.style("visibility", "hidden");
    
    }
  
  
}

function draw() {
  // a.style("left", mouseX+"px");  ----- ok
  // a.style("top", mouseY+"px");   ----- ok
  a.position(mouseX, mouseY);
       
  
}