
var random =Math.floor(Math.random()*6+1);
document.querySelectorAll("img")[0].setAttribute("src","dice"+random+".png");
var random2 =Math.floor(Math.random()*6+1);
document.querySelectorAll("img")[1].setAttribute("src","dice"+random2+".png");
if (random>random2)
{
  document.querySelector("h1").innerText="palyer 1 wins!!";
}
else if (random2>random) {
  document.querySelector("h1").innerText="palyer 2 wins!!";

}
else
{
  document.querySelector("h1").innerText="draw!!"
}
