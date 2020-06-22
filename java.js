var f=0;
const calculation=function(val)
{   
    if(f===1){document.getElementById("answer-display").value = " "; f=0;}
    document.getElementById("answer-display").value += val
}
const answer=function()
{    
    f=1
    var ans=eval(document.getElementById("answer-display").value)
    document.getElementById("answer-display").value = ans
}
const remove=function()
{
    document.getElementById("answer-display").value = " "
}
document.getElementById("num1").onclick = function(){calculation('1')}
document.getElementById("num2").onclick = function(){calculation('2');}
document.getElementById("num3").onclick = function(){calculation('3');}
document.getElementById("num4").onclick = function(){calculation('4');}
document.getElementById("num5").onclick = function(){calculation('5');}
document.getElementById("num6").onclick =function() {calculation('6');}
document.getElementById("num7").onclick = function(){calculation('7');}
document.getElementById("num8").onclick =function() {calculation('8');}
document.getElementById("num9").onclick = function(){calculation('9');}
document.getElementById("num0").onclick = function(){calculation('0');}
document.getElementById("front").onclick =function() {calculation('(');}
document.getElementById("back").onclick =function() {calculation(')');}
document.getElementById("modulo").onclick =function(){ calculation('%');}
document.getElementById("plus").onclick =function() {calculation('+');}
document.getElementById("minus").onclick = function(){calculation('-');}
document.getElementById("mult").onclick = function(){calculation('*');}
document.getElementById("divi").onclick = function(){calculation('/');}
document.getElementById("deci").onclick = function(){calculation('.');}
document.getElementById("equal").onclick =function() {answer();}
document.getElementById("ce").onclick = function(){remove();}

