let body = document.querySelector('body')
let btn = document.querySelector('#btn')
let rec = document.querySelector('.rec')
let circle = document.querySelectorAll('.circle')
let red = document.querySelector('.red')
let grn = document.querySelector('.green')
let ylw = document.querySelector('.yellow')
var recognizer = new webkitSpeechRecognition();
recognizer.interimResults = true;
recognizer.lang = 'en-Us';
circle.forEach((item)=>{
    console.log(item);
})
    recognizer.onresult = function (event) {
        
  var result = event.results[event.resultIndex];
  if (result.isFinal) {
    body.style.backgroundColor = result[0].transcript
    rec.textContent = result[0].transcript
    if(result[0].transcript === 'yellow'){
        ylw.style.background = result[0].transcript
    }else    if(result[0].transcript === 'green'){
      grn.style.background = result[0].transcript
  }else    if(result[0].transcript === 'red'){
    red.style.background = result[0].transcript
}

  } else {
    console.log('Промежуточный результат: ', result[0].transcript);
  }
};
// console.log(result[0].transcript);


recognizer.start();
// console.log(recognizer.start());



    