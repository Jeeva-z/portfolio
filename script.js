let p=document.getElementById("typewriter");
let str = "Hello there! I am Jeeva, A budding web-developer with an optimistic mind. Proactively looking out for oppurtunities and ready to work with challenges.";
let s="";
let c = 0;
const btn = document.getElementById("out");
const trans = () =>
{
  btn.style.transition = "all 1s";
}
addEventListener('mouseout',trans);
const btn1 = document.getElementById("out1");
const trans1 = () =>
{
  btn1.style.transition = "all 1s";
}
addEventListener('mouseout',trans1);
const btn2 = document.getElementById("out2");
const trans2 = () =>
{
  btn2.style.transition = "all 1s";
}
addEventListener('mouseout',trans2);
function print(){
    s+=str[c];
    if(c==str.length - 1)
    {
      clearInterval(clearid);
    }
    p.innerHTML=s;
    c++;
}

const clearid =setInterval (print,100);
