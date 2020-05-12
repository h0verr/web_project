var ban = document.querySelector('#ban');
var razban = document.querySelector('#razban');
var removeUser = document.getElementById('remove');
var userEmail = document.getElementById('emailUser');
const userPassword = document.getElementById('passwordUser');
function addItem() {
    let itemsArray = localStorage.getItem(userEmail.value) ? JSON.parse(localStorage.getItem(userEmail.value)) : [];
    //localStorage.setItem(pushes.value, JSON.stringify(itemsArray));
    itemsArray.push(userPassword.value);
    localStorage.setItem(userEmail.value, JSON.stringify(itemsArray));
    let z = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(userPassword.value);
    let test = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com$/g.test(userEmail.value);
    if (!z) {
        alert('please enter to the rigth gmail post');
        localStorage.removeItem(userEmail.value, JSON.stringify(itemsArray));
    }
    else {
        var btn = document.createElement("ul");
        btn.innerHTML = userEmail.value;
        document.body.appendChild(btn);
    }
    if (!test) {
        alert('please enter to the rigth password');
        localStorage.removeItem(userEmail.value, JSON.stringify(itemsArray));
    }
    var x = userEmail.value;
    userEmail.value = "";
    userPassword.value = "";
    console.log(userPassword.value);
    console.log(x.length);
    console.log(localStorage.key(0));

};
function Paradise() {
    localStorage.removeItem(removeUser.value);
    removeUser = '';
}

function remove() {
    localStorage.clear();

};
var ab, as;
function rise() {
    ab = localStorage.setItem('onban', ban.value);
    //console.log(localStorage.onban);

}
function razbanen() {
    localStorage.removeItem('onban');
    console.log(window.localStorage);
}
function test() {
    var a = document.querySelector("#test").value;
    if (_.isEqual(a, localStorage.onban)) {
        window.location.replace('404.html');
        //console.log(a);
        //console.log(localStorage.onban);
    }
    else {
        alert('ne polychilos');
    }
}
function loginOut() {
    window.location.replace('index.html');
}