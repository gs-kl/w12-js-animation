var image = document.getElementById("image")

image.style.position = "relative";
image.style.left = "0px";

var bearing = "right";

function move(){
  if ((bearing === "right") && (image.clientWidth + parseInt(image.style.left) + 20 < window.innerWidth)) {
    image.style.left = parseInt(image.style.left) + 10 + "px";
  } else if (bearing === "right") {
    bearing = "left";
  } else if ((bearing === "left") && (parseInt(image.style.left) - 20 > 0)) {
    image.style.left = parseInt(image.style.left) - 10 + "px";
  } else if (bearing === "left") {
    bearing = "right";
  }
}


setInterval(move, 50);
