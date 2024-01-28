let base_url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

let dropdown = document.querySelectorAll(".dropdown select");
let btn = document.querySelector('form button');

let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");

let msg = document.querySelector(".msg");




for(let select of dropdown){       //acces elements of array by for of
    for(let code in countryList){  //acces key values by for in
       let newOption = document.createElement("option");
       newOption.innerText= code;
       newOption.value = code;
       if(select.name === 'from' && code === 'USD'){
        newOption.selected = "selected";
       }
       else if(select.name === 'to' && code === 'PKR'){
        newOption.selected = "selected";
       }
       select.append(newOption);
    }
    select.addEventListener('change',(evt)=>{
        updateFlag(evt.target);
    });
};
     

const updateFlag = (element)=>{
     let currCode = element.value;
     let countryCode = countryList[currCode];
     let nsrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
     let img = element.parentElement.querySelector("img");
     img.src = nsrc;

  };

btn.addEventListener('click', async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector('.amount input');
    let amountV = amount.value;
    if(amountV === " " ||  amountV < 1){
        amountV = 1;
        amount.value = "1";
       
    }
   const url = `${base_url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
   let response = await fetch(url);
   let data = await response.json();
   let rate = data[toCurr.value.toLowerCase()];
   //console.log(rate);

    let finalAmount = Math.floor(amountV * rate);
    msg.innerText = `${amountV} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    msg.style.color = "purple"
});


