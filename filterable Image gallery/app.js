let btn = document.querySelectorAll("ul li");
let images = document.querySelectorAll(".products img");

 


btn.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log('btn clicked');
        
        if (e.target.innerHTML == "Birds") {
            activeBtn("bird");
            console.log('birds');
            showImages("bird");
        } else if (e.target.innerHTML == "Animals") {
            activeBtn("animal");
            console.log('animal');
            showImages("animal");
        } else if (e.target.innerHTML == "Nature") {
            activeBtn("nature");
            console.log('nature');
            showImages("nature");
        }
        else{
            activeBtn("all");
            console.log('all');
            showImages("all");
        }
        
    });
    
});

const showImages = (category) => {
    images.forEach((img) => {
        if (!img.classList.contains(category)) {
            img.classList.add("hide");
        } else {
            img.classList.remove("hide");
        }
    });   }

    const activeBtn = (category) => {
        const buttonIds = ["btn1", "btn2", "btn3", "btn4"];
    
        // Remove "active" class from all buttons
        buttonIds.forEach((id) => {
            document.querySelector(`#${id}`).classList.remove("active");
        });
    
        // Add "active" class to the button corresponding to the selected category
        if (category === "bird") {
            document.querySelector("#btn2").classList.add("active");
        } else if (category === "animal") {
            document.querySelector("#btn3").classList.add("active");
        } else if (category === "nature") {
            document.querySelector("#btn4").classList.add("active");
        } else if (category === "all") {
            document.querySelector("#btn1").classList.add("active");
        }
    };
    

