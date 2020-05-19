
const arr = [];
let   addTextInPage = ``;

function makeid(length) {
   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   var charactersLength = characters.length;
   let result = '';
   for ( var i = 0; i < length; i++ ) {
      result   += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return   arr.push(result);
}

 for(let i = 0; i<10; i++){
    let randomNumber = ((Math.random() * 10).toFixed());
    console.log(randomNumber);
    
     makeid(randomNumber)

 }

 arr.forEach(function(arr) {
   addTextInPage += ` ${arr}`;
 });
 
 document.getElementById('content').innerHTML = addTextInPage;
