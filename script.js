let [h,m,s,ms]=["0"+0,"0"+0,"0"+0,"0"+0];
let displayTime=document.querySelector("#display-time");
let startbtn=document.querySelector("#button2");
let stopbtn=document.querySelector("#button1");
let resetbtn=document.querySelector("#button3");
let lapbtn=document.querySelector("#button4");
let lapnote=document.querySelector(".lapnote");
let num=0;
startbtn.addEventListener("click",()=>{
    startbtn.disabled=true;
    stopbtn.disabled=false;
    resetbtn.disabled=false;

    settimer=setInterval(()=>{

        ms++
        ms=ms<10?"0"+ms:ms;
        if(ms==100){
            ms=0;
            s++
            s=s<10?"0"+s:s;
            if(s==60){
                s=0;
                m++
                m=m<10?"0"+m:m;
                if(m==60){
                    m=0;
                    h++
                    h=h<10?"0"+h:h;
                }
                 
            }  

        }
        displayTime.innerText=`${h}:${m}:${s}:${ms}`;

    },10)

})


stopbtn.addEventListener("click",()=>{
    startbtn.disabled=false;
    stopbtn.disabled=true;
    resetbtn.disabled=false;
    clearInterval(settimer);
})
resetbtn.addEventListener("click",()=>{
    startbtn.disabled=false;
    stopbtn.disabled=false;
    resetbtn.disabled=true;
    clearInterval(settimer);
    [h,m,s,ms]=["0"+0,"0"+0,"0"+0,"0"+0]
    displayTime.innerText=`${h}:${m}:${s}:${ms}`;
    lapnote.classList.add("hide");
    num=0;
    while(lapnote.firstChild){
        lapnote.removeChild(lapnote.firstChild);
    }
})
lapbtn.addEventListener("click",()=>{
    num++;
     let laptime=document.createElement("p");
     laptime.innerText=`${num}.${h}:${m}:${s}:${ms}`;
     lapnote.appendChild(laptime);
     lapnote.classList.remove("hide");

})
