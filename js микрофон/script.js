let body, num, array, width, context, logo, myElements, analyser, src, height;

body = document.querySelector('body');

num = 60;
array = new Uint8Array(num*2);
width = 10;

window.onclick = function(){
    if(context) return;

    body.querySelector('h1').remove();

    for(let i = 0; i< num; i++){
        logo = document.createElement('div');
        logo.className = 'logo';
        logo.style.background = 'red';
        logo.style.minWidth = width+'px';
        body.appendChild(logo);
    }
    myElements = document.getElementsByClassName('logo');
    context = new this.AudioContext();
    analyser = context.createAnalyser();

    this.navigator.mediaDevices.getUserMedia({
        audio: true
    }).then(stream => {
        src = context.createMediaStreamSource(stream);
        src.connect(analyser);
        loop();
    }).catch(error => {
        alert(error + '\r\n\ Отклонено. Страница будет обновлена!');
        location.reload();
    });
}

function loop(){
    window.requestAnimationFrame(loop);
    analyser.getByteFrequencyData(array);
    for (let i = 0; i< num; i++){
        height = array[i+num];
        myElements[i].style.minHeight = height*3+'px';
        myElements[i].style.opacity = 0.008*height
    }
}