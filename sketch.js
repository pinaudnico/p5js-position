var myDiv;
function setup() {
  
  a = select('#nom');
  
  a.style("background-color", "#FF0000");
  a.style("font-size", "18pt");
  a.position(50, 50);
  
  
  // myDiv = createDiv("C'est my Div");  --- cree une div en p5
  // myDiv.position(20, 20);
  
    document.getElementById('bouton').onclick = function(evt) {
    a.style("visibility", "hidden");
    
    }
  
  
}

function draw() {
  // a.style("left", mouseX+"px");  ----- ok
  // a.style("top", mouseY+"px");   ----- ok
  a.position(mouseX, mouseY);     
  
}