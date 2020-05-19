function ranDom(i, b){
   return (Math.random() * b).toFixed() + i; 
}
function mouselog(event){
    let button = document.getElementById('btn');
    button.style.top = ranDom("%", 1000);
    button.style.left = ranDom("%", 10);
}
