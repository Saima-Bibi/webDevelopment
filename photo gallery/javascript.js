function update(previewPic){
document.getElementById('image').style.backgroundImage = "url("+ previewPic.src + ")";
document.getElementById('image').innerHTML=previewPic.alt;
}
function unDo(){
   
    document.getElementById('image').innerHTML="Hover on image given below";
    document.getElementById('image').style.backgroundImage="url('')";
    }