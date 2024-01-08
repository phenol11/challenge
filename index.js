        //style the circle
        let a1 = document.querySelector('.a-1');
        let btn = document.querySelector('.btn-1');
        if(a1.innerHTML == "1"){
        btn.style.backgroundColor = "hsl(206, 94%, 87%)";
        btn.style.border = "0";
        a1.style.color = "black";
        };
        
        
        let personName = document.getElementById("name");
        let emailAddress = document.getElementById("email-address");
        let phoneNumber = document.getElementById("phone-number");

        let personData = {
            name:"",
            email:"",
            phone:"",
            h2:[]
        };
        //get button to navigate to another page
        let btnBox = document.getElementById('button');
        function getPersonData(){
            personData.name = personName.value;
            personData.email = emailAddress.value;
            personData.phone = phoneNumber.value;
            personData.h2.push = "new";


            if( !personData.email.includes("@gmail") && !personData.email.includes("@yahoo")){
                emailAddress.reportValidity();
            }else{
                localStorage.setItem('personData', JSON.stringify(personData));
                window.location.href= "select.html";
            };
        };
        btnBox.addEventListener('click', (e)=>{
            e.preventDefault();
            getPersonData();
        });

        export {getPersonData}
    
        