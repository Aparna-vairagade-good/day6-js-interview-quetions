// 3
function checktime(){
    const today =new Date()
    let h =today.getHours();
    let m =today.getMinutes();
    let s =today.getSeconds();
    let a=document.getElementById('ampm').innerText;
    console.log(a);
    if(h>12){
        h=h-12;
        document.getElementById('ampm').innerHTML='pm'
    }
    else{
        document.getElementById('ampm').innerHTML='am'
    }
    if(h<10){
        h= '0'+ h;
    }
    if(m<10){
        m= '0'+ m;
    }
    if(s<10){
        s= '0'+ s;
    }
   
    document.getElementById('hrs').innerHTML=h
    document.getElementById('mins').innerHTML=m;
    document.getElementById('secs').innerHTML=s;
}
setInterval(checktime,1000)


// 4
function changingtext() {
    document.getElementById('world').innerText = 'Welcome to Elevation Academy'
   }

// 5
function hide(){
    document.getElementById("remove").innerHTML=""
}

// 1
function openh1(){
    document.getElementById("Heading").innerHTML= '<h1>Mern stack</h1>'
}

// 2
document.getElementsByTagName("h1")[0].innerHTML = "hello!";


