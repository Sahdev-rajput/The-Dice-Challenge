const arr=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"]
var n1=Math.random();
n1=Math.floor(arr.length*n1);
var n2=Math.random();
n2=Math.floor(arr.length*n2);
document.getElementById("img-1").setAttribute("src", "/images/" + arr[n1]);
document.getElementById("img-2").setAttribute("src", "/images/" + arr[n2]);
if(n1>n2)
{
    document.getElementById("answer").innerHTML="Player 1 Won";
}
else if(n1<n2)
{
    document.getElementById("answer").innerHTML="Player 2 Won";
}
else
{
    document.getElementById("answer").innerHTML="Match Tied";
}
