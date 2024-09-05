const myinput = document.getElementById("myinput");
const celtofah = document.getElementById("celtofah");
const fahtocel = document.getElementById("fahtocel");
const mysubmit = document.getElementById("mysubmit");
const myp1 = document.getElementById("myp1");
let temp;
function convert(){
    if(celtofah.checked){
        temp = myinput.value;
        temp = Number(temp);
        myp1.textContent = temp*9/5 +32 +"F"
    }else if(fahtocel.checked){
        temp = myinput.value;
        temp = Number(temp);
        myp1.textContent= temp-32 * 5/9+"C"
    }else{
        myp1.textContent = "select a unit"
    }
    console.log (navigator.cookieEnabled);
}