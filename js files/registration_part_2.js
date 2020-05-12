var button1 = document.getElementById("button1");
const inputPush1 = document.getElementById('password');
var ar1 = document.getElementsByClassName('password2');
var ar = document.getElementsByClassName('email');
const inputPush = document.getElementById('item');
let itemsArray = localStorage.getItem('email') ? JSON.parse(localStorage.getItem('email')) : [];
let itemsArray1 = [];
function pushes1() {
    itemsArray.push(inputPush.value);
    localStorage.setItem('email', JSON.stringify(itemsArray));
    inputPush.value = "";
    console.log(itemsArray);
}
button1.onclick = function () {
    itemsArray1.push(inputPush1.value);
    localStorage.setItem('password', JSON.stringify(itemsArray1));
    inputPush1.value = "";
    console.log(itemsArray1);
    pushes1();
}
function save() {
    let up1 = [];
    for (var j = 0; j < ar1.length; j++) {
        up1[j] = ar1[j].value;
    };
    let up = [];
    for (var i = 0; i < ar.length; i++) {
        up[i] = ar[i].value;
    };
    console.log(up1);
    console.log(up);

    if (_.isEqual(itemsArray, up) && _.isEqual(itemsArray, up)) {
        alert('Добро пожаловать');
        return false;
    }
};