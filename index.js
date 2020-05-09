function randomDice(){
  var x=Math.random();
  x*=6;
  x=Math.floor(x);
  x=x+1;
  return x;
}
var im1=randomDice();
var im2=randomDice();
document.querySelector(".img1").setAttribute("src","images/dice"+im1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+im2+".png");
if(im1>im2){
  document.querySelector("h1").innerText="Player 1 wins!";
}
else if(im1<im2){
  document.querySelector("h1").innerText="Player 2 wins!";
}
else document.querySelector("h1").innerText="Draw!";
