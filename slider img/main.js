let sliderimg=document.querySelectorAll('.slider')


sliderimg.forEach((slides,index)=>{
slides.style.left=`${index*100}%`
})

let rightbtn=document.querySelector('#right')
let count=0
rightbtn.addEventListener("click",function(){
    count++;
    if(count>sliderimg.length-1){
            count=0
        }
    sliderimg.forEach((ev)=>{
        ev.style.transform=`translateX(-${count*100}%)`
        
    })
})

let leftbtn=document.querySelector('#left');

leftbtn.addEventListener('click',function(){
    count--;
    if(count<0){
            count=sliderimg.length-1
        }
    sliderimg.forEach((ev)=>{
        ev.style.transform=`translateX(-${count*100}%)`

        })
})   

 
let start=document.querySelector("#start");
let interval;

start.addEventListener('click',function(){
    if (interval) {
        clearInterval(interval);
    }
    interval=setInterval(()=>{
        count++;
        if(count>sliderimg.length-1){
            count=0
        }
        sliderimg.forEach((ev)=>{
            ev.style.transform=`translateX(-${count*100}%)`
            
        })
    },1500)
})

let stop=document.querySelector("#stop");

stop.addEventListener('click',()=>{
clearInterval(interval);
})