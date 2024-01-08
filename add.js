const storedData = localStorage.getItem('personData');
const personData = JSON.parse(storedData);


personData.inputValue = [];
personData.priceValue = [];


let input = document.querySelectorAll(".online");

let h3 = document.getElementsByTagName('h3');
let selectedCount = 0;
let priceValueInYear = ["+$10/yr","+$20/yr","+$20/yr"];
let priceValueInMonth =  ["+$1/mo","+$2/mo","+$2/mo"];
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener('click', (e) => {
      if (selectedCount < 2) {
          personData.inputValue.push(h3[i].innerText);
          // console.log(personData);
          selectedCount++;

          // Disable the clicked input
          input[i].disabled = true;
          if(personData.toYear == "yr"){
            personData.priceValue.push(priceValueInYear[i])
            }else if(personData.toYear == "mo"){
            
              personData.priceValue.push(priceValueInMonth[i])
      };
    }
      
  });
}


let a1 = document.querySelector('.a-1');
let btn = document.querySelector('.btn-1');
if(a1.innerHTML == "3"){
          btn.style.backgroundColor = "hsl(206, 94%, 87%)";
          btn.style.border = "0";
          a1.style.color = "black"
}

let figure = document.getElementsByTagName('figure');

let onlineLargerA = [];
if(personData.toYear == "yr"){
    onlineLargerA = ["+$10/yr","+$20/yr","+$20/yr"];
    for(let i = 0; i<figure.length;i++){
      figure[i].innerHTML = onlineLargerA[i]
    }
    }else if(personData.toYear == "mo"){
    onlineLargerA = ["+$1/mo","+$2/mo","+$2/mo"];
      for(let i = 0; i<figure.length;i++){
        figure[i].innerHTML = onlineLargerA[i]
      }
};

let btnBox1 = document.querySelector('.btnbox');
btnBox1.addEventListener('click',function(){
    localStorage.setItem('personData', JSON.stringify(personData));
    window.location.href = "sum.html"
});