console.log("connected to landing page")
const freetrialbtn = document.getElementById("freetrial");
freetrialbtn.addEventListener("click", scroll);


function scroll() {
  const element = document.getElementById("loop");
  element.scrollIntoView();
}