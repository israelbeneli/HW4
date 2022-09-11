let x = prompt("אנא בחר מספר");
let y = prompt(" אנא בחר מספר נוסף");
let z = prompt(" אנא בחר פעולה מטמטית");
let toz=0;
if (z == "+") 
{
    toz=parseInt(x)+parseInt(y);
    alert(toz);
}
if (z == "-"){
    toz=parseInt(x)-parseInt(y);
    alert(toz);
}
if (z == "*"){
    toz=parseInt(x)*parseInt(y);
    alert(toz);
}
if (z == "/"){
    toz=parseInt(x)/parseInt(y);
    alert(toz);
}
