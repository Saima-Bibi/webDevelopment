
function billingFunction(){
if(document.getElementById('same').checked){
   
    var Name= document.getElementById('shippingName').value;
    var zip= document.getElementById('shippingZip').value;
    
document.getElementById('billingName').value= Name;
document.getElementById('billingZip').value=zip; }

else{ 
    document.getElementById('billingName').value=' ';
    document.getElementById('billingZip').value=' ';
}
}