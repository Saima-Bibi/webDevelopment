let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let new_btn = document.querySelector("#new-btn");
let msgCon = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO =true; //playerX, playerO

const winPatterns = [   //2D array
          [ 0, 1, 2 ],
          [ 0, 3, 6 ],
          [ 0, 4, 8 ],
          [ 2, 5, 8 ],
          [ 2, 4, 6 ],
          [ 3, 4, 5 ],
          [ 6, 7, 8 ],
        ];

 boxes.forEach((box)=>{
 box.addEventListener('click',()=>{
  //console.log("box is clicked");
  if(turnO){  //playerO
    box.innerText = "O";
    turnO = false;
  }
  else{   //playerX
    box.innerText = "X";
    turnO = true;
  }
   box.disabled = true;
   checkWinner();
 });
 
 }) ; 

 
 const checkWinner = () => {
    for(let pattern of winPatterns){
       // console.log(pattern[0],pattern[1],pattern[2]);
        //console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log('winner',pos1);
                showWinner(pos1);
            }
            
        }
    }
 };
 const showWinner = (winner)=>{
     msg.innerText = `Congratulations! Winner is ${winner}`;
     msgCon.classList.remove("hide");
     disableBoxes();
 }
 const  disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled =true;
    }
 };
 const  enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText ="";
    }
 };
 const resetGame =()=>{
    turnO=true;
    enableBoxes();
    msgCon.classList.add("hide");
 }

 reset_btn.addEventListener('click',resetGame);
 new_btn.addEventListener('click', resetGame);
