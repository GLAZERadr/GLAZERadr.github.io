function play_music(){
    const audio = new Audio('music.mp3');

    audio.play();
    document.getElementById('cake').src = 'nyala.png'
}

function tiup_lilin(){
    document.getElementById('cake').src='mati.png';
}

function bubbles(){
    var count = 200;
    var section = document.querySelector('section');
    var i = 0;
    
    while(i < count){
        var bubble = document.createElement('i');
        var x = Math.floor(Math.random() * window.innerWidth);
        var y = Math.floor(Math.random() * window.innerHeight);
        var size = Math.random() * 25;
        bubble.style.left = x + 'px';
        bubble.style.top = y + 'px';
        bubble.style.width = 1 + size + 'px';
        bubble.style.height = 1 + size + 'px';
        section.appendChild(bubble);
        i++;
    }
}
bubbles();

function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);