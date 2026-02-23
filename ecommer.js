let bar = document.getElementById('bar');
let nev = document.getElementById('navbar');
let close = document.getElementById('close');



if(bar){
  bar.addEventListener('click', ()=>{
    nev.classList.add('active');
  })
}
if(close){
  close.addEventListener('click', ()=>{
    nev.classList.remove('active');
  })
}


var Mainimg = document.getElementById("Mainimg")
var smalling = document.getElementsByClassName("smail-img");

    smalling[0].onclick = function(){
      Mainimg.src = smalling[0].src;
    }
    smalling[1].onclick = function(){
      Mainimg.src = smalling[1].src;
    }
    smalling[2].onclick = function(){
      Mainimg.src = smalling[2].src;
    }
    smalling[3].onclick = function(){
      Mainimg.src = smalling[3].src;
    }
