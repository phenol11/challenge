const storedData = localStorage.getItem('personData');
const personData = JSON.parse(storedData);

console.log(personData)

let a1 = document.querySelector('.a-1');
let btn = document.querySelector('.btn-1');
if(a1.innerHTML == "4"){
          btn.style.backgroundColor = "hsl(206, 94%, 87%)";
          btn.style.border = "0";
          a1.style.color = "black"
};


let textI = document.querySelector('.text1');
let spanWithMotor = document.getElementById('motoyr');
let f1 = document.querySelector('.f-1');
let f2 = document.querySelector('.f-2');


let options = document.getElementsByTagName('option');
let select = document.getElementById('items');
let tagWithFClass = document.querySelectorAll('.f');
let perMonth = document.querySelector('.permonth');
let tagWithHClass = document.querySelectorAll('.h2-2');



window.addEventListener('load', function() {
    if(personData.toYear === "yr"){
        if(personData.h2Values[0] === "Arcade"){
            textI.innerText =  personData.h2Values[0] + " (Yearly)";
            select.selectedIndex = 1;
            if(personData.h3Values[0] === "$9/mo"){
               personData.h3Values[0] = "$90/yr"
            }else if(personData.h3Values[0] === "$12/mo"){
                personData.h3Values[0] = "$120/yr"
            }else if(personData.h3Values[0] === "$15/mo"){
                personData.h3Values[0] = "$150/yr"
            }
            f1.innerText = personData.h3Values[0];
            for(let i = 0;i<tagWithFClass.length && tagWithHClass.length;i++){
                tagWithFClass[i].innerText = personData.priceValue[i];
                tagWithHClass[i].innerText = personData.inputValue[i];
            };
            perMonth.innerText = '(per year)'
            if(personData.h3Values[0] === "$90/yr" && tagWithFClass[0].innerText === "+$10/yr" && tagWithFClass[1].innerText === "+$20/yr"){
                f2.innerText = "$110/yr"
            };
            if(personData.h3Values[0] === "$120/yr" && tagWithFClass[0].innerText === "+$10/yr" && tagWithFClass[1].innerText === "+$20/yr"){
                f2.innerText = "$150/yr"
            };
            if(personData.h3Values[0] === "$150/yr" && tagWithFClass[0].innerText === "+$10/yr" && tagWithFClass[1].innerText === "+$20/yr"){
                f2.innerText = "$180/yr"
            };
            if(personData.h3Values[0] === "$90/yr" && tagWithFClass[0].innerText === "+$20/yr" && tagWithFClass[1].innerText === "+$20/yr"){
                f2.innerText = "$130/yr"
            }if(personData.h3Values[0] === "$120/yr" && tagWithFClass[0].innerText === "+$20/yr" && tagWithFClass[1].innerText === "+$20/yr"){
                f2.innerText = "$160/yr"
            }if(personData.h3Values[0] === "$150/yr" && tagWithFClass[0].innerText === "+$20/yr" && tagWithFClass[1].innerText === "+$20/yr"){
                f2.innerText = "$190/yr"
            }
        }
        if(personData.h2Values[0] === "Advance"){
            textI.innerText =  personData.h2Values[0] + " (Yearly)";
            select.selectedIndex = 2;
            if(personData.h3Values[0] === "$9/mo"){
               personData.h3Values[0] = "$90/yr"
            }else if(personData.h3Values[0] === "$12/mo"){
                personData.h3Values[0] = "$120/yr"
            }else if(personData.h3Values[0] === "$15/mo"){
                personData.h3Values[0] = "$150/yr"
            }
            f1.innerText = personData.h3Values[0];
            for(let i = 0;i<tagWithFClass.length && tagWithHClass.length;i++){
                tagWithFClass[i].innerText = personData.priceValue[i];
                tagWithHClass[i].innerText = personData.inputValue[i];
            };
            perMonth.innerText = '(per year)'
            if(personData.h3Values[0] === "$90/yr" && tagWithFClass[0].innerText === "+$10/yr" && tagWithFClass[1].innerText === "+$20/yr"){
                f2.innerText = "$120/yr"
            };
            if(personData.h3Values[0] === "$120/yr" && tagWithFClass[0].innerText === "+$10/yr" && tagWithFClass[1].innerText === "+$20/yr"){
                f2.innerText = "$150/yr"
            };
            if(personData.h3Values[0] === "$150/yr" && tagWithFClass[0].innerText === "+$10/yr" && tagWithFClass[1].innerText === "+$20/yr"){
                f2.innerText = "$180/yr"
            };
            if(personData.h3Values[0] === "$90/yr" && tagWithFClass[0].innerText === "+$20/yr" && tagWithFClass[1].innerText === "+$20/yr"){
                f2.innerText = "$130/yr"
            }if(personData.h3Values[0] === "$120/yr" && tagWithFClass[0].innerText === "+$20/yr" && tagWithFClass[1].innerText === "+$20/yr"){
                f2.innerText = "$160/yr"
            }if(personData.h3Values[0] === "$150/yr" && tagWithFClass[0].innerText === "+$20/yr" && tagWithFClass[1].innerText === "+$20/yr"){
                f2.innerText = "$190/yr"
            }
        }
        if(personData.h2Values[0] === "Pro"){
            textI.innerText =  personData.h2Values[0] + " (Yearly)";
            select.selectedIndex = 3;
            if(personData.h3Values[0] === "$9/mo"){
               personData.h3Values[0] = "$90/yr"
            }else if(personData.h3Values[0] === "$12/mo"){
                personData.h3Values[0] = "$120/yr"
            }else if(personData.h3Values[0] === "$15/mo"){
                personData.h3Values[0] = "$150/yr"
            }
            f1.innerText = personData.h3Values[0];
            for(let i = 0;i<tagWithFClass.length && tagWithHClass.length;i++){
                tagWithFClass[i].innerText = personData.priceValue[i];
                tagWithHClass[i].innerText = personData.inputValue[i];
            };
            perMonth.innerText = '(per year)'
            if(personData.h3Values[0] === "$90/yr" && tagWithFClass[0].innerText === "+$10/yr" && tagWithFClass[1].innerText === "+$20/yr"){
                f2.innerText = "$110/yr"
            };
            if(personData.h3Values[0] === "$120/yr" && tagWithFClass[0].innerText === "+$10/yr" && tagWithFClass[1].innerText === "+$20/yr"){
                f2.innerText = "$150/yr"
            };
            if(personData.h3Values[0] === "$150/yr" && tagWithFClass[0].innerText === "+$10/yr" && tagWithFClass[1].innerText === "+$20/yr"){
                f2.innerText = "$180/yr"
            };
            if(personData.h3Values[0] === "$90/yr" && tagWithFClass[0].innerText === "+$20/yr" && tagWithFClass[1].innerText === "+$20/yr"){
                f2.innerText = "$130/yr"
            }if(personData.h3Values[0] === "$120/yr" && tagWithFClass[0].innerText === "+$20/yr" && tagWithFClass[1].innerText === "+$20/yr"){
                f2.innerText = "$160/yr"
            }if(personData.h3Values[0] === "$150/yr" && tagWithFClass[0].innerText === "+$20/yr" && tagWithFClass[1].innerText === "+$20/yr"){
                f2.innerText = "$190/yr"
            }
        }
    }else if(personData.toYear === "mo"){
        if(personData.h2Values[0] === "Arcade"){
            textI.innerText =  personData.h2Values[0] + " (Monthly)";
            select.selectedIndex = 1;
            // if(personData.h3Values[0] === "$9/mo"){
            //    personData.h3Values[0] = "$90/yr"
            // }else if(personData.h3Values[0] === "$12/mo"){
            //     personData.h3Values[0] = "$120/yr"
            // }else if(personData.h3Values[0] === "$15/mo"){
            //     personData.h3Values[0] = "$150/yr"
            // }
            f1.innerText = personData.h3Values[0];
            for(let i = 0;i<tagWithFClass.length && tagWithHClass.length;i++){
                tagWithFClass[i].innerText = personData.priceValue[i];
                tagWithHClass[i].innerText = personData.inputValue[i];
            };
            perMonth.innerText = '(per month)'
            if(personData.h3Values[0] === "$9/mo" && tagWithFClass[0].innerText === "+$1/mo" && tagWithFClass[1].innerText === "+$2/mo"){
                f2.innerText = "$12/mo"
            };
            if(personData.h3Values[0] === "$12/mo" && tagWithFClass[0].innerText === "+$1/mo" && tagWithFClass[1].innerText === "+$2/mo"){
                f2.innerText = "$15/mo"
            };
            if(personData.h3Values[0] === "$15/mo" && tagWithFClass[0].innerText === "+$1/mo" && tagWithFClass[1].innerText === "+$2/mo"){
                f2.innerText = "$18/mo"
            };
            if(personData.h3Values[0] === "$9/mo" && tagWithFClass[0].innerText === "+$2/mo" && tagWithFClass[1].innerText === "+$2/mo"){
                f2.innerText = "$13/mo"
            }if(personData.h3Values[0] === "$12/mo" && tagWithFClass[0].innerText === "+$2/mo" && tagWithFClass[1].innerText === "+$2/mo"){
                f2.innerText = "$16/mo"
            }if(personData.h3Values[0] === "$15/mo" && tagWithFClass[0].innerText === "+$2/mo" && tagWithFClass[1].innerText === "+$2/mo"){
                f2.innerText = "$19/mo"
            }
        }
        if(personData.h2Values[0] === "Advance"){
            textI.innerText =  personData.h2Values[0] + " (Monthly)";
            select.selectedIndex = 2;
            // if(personData.h3Values[0] === "$9/mo"){
            //    personData.h3Values[0] = "$90/yr"
            // }else if(personData.h3Values[0] === "$12/mo"){
            //     personData.h3Values[0] = "$120/yr"
            // }else if(personData.h3Values[0] === "$15/mo"){
            //     personData.h3Values[0] = "$150/yr"
            // }
            f1.innerText = personData.h3Values[0];
            for(let i = 0;i<tagWithFClass.length && tagWithHClass.length;i++){
                tagWithFClass[i].innerText = personData.priceValue[i];
                tagWithHClass[i].innerText = personData.inputValue[i];
            };
            perMonth.innerText = '(per month)'
            if(personData.h3Values[0] === "$9/mo" && tagWithFClass[0].innerText === "+$1/mo" && tagWithFClass[1].innerText === "+$2/mo"){
                f2.innerText = "$12/mo"
            };
            if(personData.h3Values[0] === "$12/mo" && tagWithFClass[0].innerText === "+$1/mo" && tagWithFClass[1].innerText === "+$2/mo"){
                f2.innerText = "$15/mo"
            };
            if(personData.h3Values[0] === "$15/mo" && tagWithFClass[0].innerText === "+$1/mo" && tagWithFClass[1].innerText === "+$2/mo"){
                f2.innerText = "$18/mo"
            };
            if(personData.h3Values[0] === "$9/mo" && tagWithFClass[0].innerText === "+$2/mo" && tagWithFClass[1].innerText === "+$2/mo"){
                f2.innerText = "$13/mo"
            }if(personData.h3Values[0] === "$12/mo" && tagWithFClass[0].innerText === "+$2/mo" && tagWithFClass[1].innerText === "+$2/mo"){
                f2.innerText = "$16/mo"
            }if(personData.h3Values[0] === "$15/mo" && tagWithFClass[0].innerText === "+$2/mo" && tagWithFClass[1].innerText === "+$2/mo"){
                f2.innerText = "$19/mo"
            }
        }
        if(personData.h2Values[0] === "Pro"){
            textI.innerText =  personData.h2Values[0] + " (Monthly)";
            select.selectedIndex = 3;
            // if(personData.h3Values[0] === "$9/mo"){
            //    personData.h3Values[0] = "$90/yr"
            // }else if(personData.h3Values[0] === "$12/mo"){
            //     personData.h3Values[0] = "$120/yr"
            // }else if(personData.h3Values[0] === "$15/mo"){
            //     personData.h3Values[0] = "$150/yr"
            // }
            f1.innerText = personData.h3Values[0];
            for(let i = 0;i<tagWithFClass.length && tagWithHClass.length;i++){
                tagWithFClass[i].innerText = personData.priceValue[i];
                tagWithHClass[i].innerText = personData.inputValue[i];
            };
            perMonth.innerText = '(per month)'
            if(personData.h3Values[0] === "$9/mo" && tagWithFClass[0].innerText === "+$1/mo" && tagWithFClass[1].innerText === "+$2/mo"){
                f2.innerText = "$12/mo"
            };
            if(personData.h3Values[0] === "$12/mo" && tagWithFClass[0].innerText === "+$1/mo" && tagWithFClass[1].innerText === "+$2/mo"){
                f2.innerText = "$15/mo"
            };
            if(personData.h3Values[0] === "$15/mo" && tagWithFClass[0].innerText === "+$1/mo" && tagWithFClass[1].innerText === "+$2/mo"){
                f2.innerText = "$18/mo"
            };
            if(personData.h3Values[0] === "$9/mo" && tagWithFClass[0].innerText === "+$2/mo" && tagWithFClass[1].innerText === "+$2/mo"){
                f2.innerText = "$13/mo"
            }if(personData.h3Values[0] === "$12/mo" && tagWithFClass[0].innerText === "+$2/mo" && tagWithFClass[1].innerText === "+$2/mo"){
                f2.innerText = "$16/mo"
            }if(personData.h3Values[0] === "$15/mo" && tagWithFClass[0].innerText === "+$2/mo" && tagWithFClass[1].innerText === "+$2/mo"){
                f2.innerText = "$19/mo"
            }
        }
    };
});

