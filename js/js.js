const timer=document.querySelector('.timer');
const button=document.querySelector('button');
let myInterval;

document.addEventListener('DOMContentLoaded',function(){
    forTime()
})

function forTime(){
    let timeToLeft=60;
    
    myInterval = setInterval(function(){
        timeToLeft--;
        timer.innerHTML=timeToLeft;
      if(timeToLeft<=0){
          window.location.href="https://www.digikala.com";
       }
    },1000)
}



button.addEventListener('click',function(){
clearInterval(myInterval);
this.innerHTML="stop done";
setTimeout(function(){
    window.location.href="https://www.google.com";
},4000)
})