(function () {
    var updateButton = document.getElementById('updateDetails');
    var cancelButton = document.getElementById('cancel1');
    var favDialog = document.getElementById('favDialog');
    updateButton.addEventListener('click', function () {
        favDialog.showModal();
    });
    cancelButton.addEventListener('click', function () {
        favDialog.close();
    });
})();
(function () {
    var login = document.getElementById('login');
    var cancel2 = document.getElementById('cancel2');
    var loginIn = document.getElementById('loginIn');
    login.addEventListener('click', function () {
        loginIn.showModal();
    });
    cancel2.addEventListener('click', function () {
        loginIn.close();
    });
})();
function myFunction() {
    var x;
    x = document.getElementById('email').value;
    let z = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com$/g.test(x);
    try {
        if (!z) throw "please enter to the gmail post";
    }
    catch (err) {
        alert("Input " + err);
    }
    let pswr = document.querySelector('#password').value;
    let test = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(pswr);
    try {
        if (!test) throw "please enter to the right password";
    }
    catch (err) {
        alert("Input " + err);
    }
    let phone = document.querySelector('#phone').value;
    let test2 = /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g.test(phone);
    try {
        if (!test2) throw "please enter to the right number";
    }
    catch (err) {
        alert("Input " + err);
    }
}
function dtr() {
    const input = document.getElementById('item');
    let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
    localStorage.setItem('items', JSON.stringify(itemsArray));
    function myFunction() {
        itemsArray.push(input.value);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        input.value = ''
    }
    myFunction();
}
/*function emailValidation() {
    var email = document.querySelectorAll('input[data-rule]');
    for (let input of email) {
        input.addEventListener('blur', function () {
            let rule = this.dataset.rule;
            let value = this.value;
            let check;
            switch (rule) {
                case 'number':
                    check = /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g.test(value);
                    break;
                case 'email':
                    check = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com$/g.test(value);
                    break;
                case 'password':
                    check = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(value);
                    break;
            }
            if (check) {
                this.classList.add("valid");
            }
            else {
                this.classList.remove("valid");
                return false;
            }
        });
    }
}
emailValidation();*/