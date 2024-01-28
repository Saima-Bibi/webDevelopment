function loginPage(){
    window.location.assign("proweb.php");
    alert("create acount OR login");
}



//show navbar
const nav = document.querySelector('.nav-menu');
const toggle = document.querySelector('.nav-toggle');

toggle.onclick = function(){
    nav.classList.toggle('show-nav');
}

//remove navbar

const navLink = document.querySelectorAll('.nav-link');

function linkAction(){
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.remove('show-nav');
}

navLink.forEach(n => n.addEventListener('click',linkAction))

//change active color

const linkColor = document.querySelectorAll('.nav-link');
function colorLink(){
    if(linkColor){
        linkColor.forEach(L => L.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(L => L.addEventListener('click',colorLink))


//Contact validaton


function validateForm() {
    
    
    let x = document.forms["myForm"]["Name"].value;
    let y = document.forms["myForm"]["Email"].value;
    let z = document.forms["myForm"]["Phone"].value;
    let m = document.forms["myForm"]["Message"].value;
    let flag = 1;

    //validation for name

    var np = /[A-Za-z]+$/;
    


    if (x.length < 5 || x.length > 12) {
        document.getElementById("nerror").innerHTML = "name must be between 5 to 12 characters";
        flag=0;
        
    }
    else if (!x.match(np)) {
        document.getElementById("nerror").innerHTML = "name should contain alphabets only";
        flag=0;
        
    }
    else
    {
        document.getElementById("nerror").innerHTML = "";
        flag=1;
    }
     
    //validation for email
    
    if (y == "") {
        document.getElementById("eerror").innerHTML = "email field must be filled out";
        flag=0;
      }

    else if (!y.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))) {
        document.getElementById("eerror").innerHTML = "email field must be filled with valid email";
        flag=0;
      }
      else
    {
        document.getElementById("eerror").innerHTML = "";
        flag=1;
    } 

    // validation for Phone
    if (z.length != 11) {
        document.getElementById("perror").innerHTML = "phone number must be of 11 digits";
        flag=0;
      }
    else if (isNaN(z)) {
        document.getElementById("perror").innerHTML = "only digits are allowed";
        flag=0;
    }
    else
    {
        document.getElementById("perror").innerHTML = "";
        flag=1;
    }  


    if(flag){
        return true;
    }
    else{
        return false;
    }


    
        
  }
