var myDiv;
function setup() {
  
a = select('#nom');
  
//a.style("background-color", "#FF0000");
//a.style("font-size", "18pt");
//a.position(100, 100);
a.style.position = "absolute";
a.style.zIndex = "1";

  
  
// myDiv = createDiv("C'est my Div");  --- cree une div en p5
//myDiv.position(20, 20);
  
bout=document.getElementById('bouton');
bout.style.position = "absolute";
bout.style.zIndex = "2";
bout.style.top = "100px";
bout.style.left = "100px";
  	

  
bout.addEventListener('click', function(e) {
          //a.style("visibility", "hidden"); ------ ok
          a.html("Je t'avais prévenu");
          TweenLite.to(bout, 1.5, {x:100, y:1000 });
}, false);



bout.addEventListener('mouseover', function(e) {
          a.html("fais gaffe !");
}, false);

}




function draw() {
// a.style("left", mouseX+"px");  ----- ok
// a.style("top", mouseY+"px");   ----- ok
  

          a.position(mouseX, mouseY-50);
  
}