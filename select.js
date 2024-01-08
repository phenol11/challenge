// import { getPersonData } from "./index.js";
const storedData = localStorage.getItem('personData');
const personData = JSON.parse(storedData);

personData.h2Values = [];
personData.h3Values = [];
personData.monThly = "";
personData.toYear = "mo";


//style the circle
let a1 = document.querySelector('.a-1')
let btn = document.querySelector('.btn-1');
if(a1.innerHTML == "2"){
    btn.style.backgroundColor = "hsl(206, 94%, 87%)";
    btn.style.border = "0";
    a1.style.color = "black"
};


let btnBox = document.getElementById('button');
let boxes = document.querySelectorAll('.box');

let hElement = document.getElementsByTagName('h2');
let isClicked = true;

let h3 = document.getElementsByTagName('h3');
let lastClickedIndex = -1;
for(let i = 0;i<boxes.length; i++){
        boxes[i].addEventListener('click', function(e){
         
            e.preventDefault();
            boxes[i].classList.add('click')
              setTimeout(() => {
              boxes[i].classList.remove('click')
             
            }, 500);
            let h2Elem = hElement[i];
            let h3Elem = h3[i];

            if (i !== lastClickedIndex) {
                personData.h2Values = [];
                personData.h3Values = [];
            }
            personData.h2Values.push(h2Elem.innerText);
           
            personData.h3Values.push(h3Elem.innerText)

            
            lastClickedIndex = i;
    

            localStorage.setItem('personData', JSON.stringify(personData));
      });
};
btnBox.addEventListener('click',function(){
    localStorage.setItem('personData', JSON.stringify(personData));
    window.location.href = "add.html"
});



let checkBox = document.getElementById('checkbox');
let monThly = document.querySelector('.before');
let yearly = document.querySelector('.after');


let isState = true;
checkBox.addEventListener('click', function(e){
        if(isState){
          yearly.classList.remove('changeBc')
          monThly.classList.add('changeBc')
          isState = false;
          updateToYear();
          personData.monThly = yearly.innerText;
          localStorage.setItem('personData', JSON.stringify(personData));

        }else{
          monThly.classList.remove('changeBc')
          yearly.classList.add('changeBc')
          isState = true;
          updateToMonth();
          personData.monThly = monThly.innerText;
          localStorage.setItem('personData', JSON.stringify(personData));
        };

});

let marGin = document.querySelectorAll(".margin");

function updateToYear(){
        for(let i = 0; i< h3.length; i++){
          let h3Year = ["$90/yr","$120/yr","$150/yr"]
          h3[i].innerHTML = h3Year[i] + "<br><span>2 months free</span>"
        }
        
        for(let i = 0; i<marGin.length;i++){
          let marValue = ["100px","-30px"]
          marGin[i].style.marginTop = marValue[i]
        }
        personData.toYear = "yr";
      }

function updateToMonth(){
        for(let i = 0; i< h3.length; i++){
          let h3Year = ["$9/mo","$12/mo","$15/mo"]
          h3[i].innerHTML = h3Year[i];
        }
        for(let i = 0; i<marGin.length;i++){
          let marValue = ["120px","-30px"]
          marGin[i].style.marginTop = marValue[i]
        }
        personData.toYear = "mo";
}

