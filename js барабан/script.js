document.getElementsByClassName('circle')[0].addEventListener('click',function(e){
    e.target.style.transform = 'rotate('+Math.random()*1000+'rad)';
    return false;
});