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
    x = document.getElementById('item').value;
    let z = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com$/g.test(x);
    if (!z) {
        alert(" please enter to the gmail post");
        return false;
    }
    let pswr = document.querySelector('#password').value;
    let test = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(pswr);
    if (!test) {
        alert("please enter to the gmail post");
        return false;
    }
    let phone = document.querySelector('#phone').value;
    let test2 = /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g.test(phone);
    if (!test2) {
        alert("please enter to the gmail post");
        return false;
    }
}
function dtr() {
    const input = document.getElementById('item');
    let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
    localStorage.setItem('items', JSON.stringify(itemsArray));
    function myFunction1() {
        itemsArray.push(input.value);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        input.value = ''
    }
    const input1 = document.getElementById('password');
    let itemsArray1 = localStorage.getItem('items1') ? JSON.parse(localStorage.getItem('items1')) : [];
    localStorage.setItem('items1', JSON.stringify(itemsArray1));
    function myFunction2() {
        itemsArray1.push(input1.value);
        localStorage.setItem('items1', JSON.stringify(itemsArray1));
        input1.value = ''
    }
    const input2 = document.getElementById('phone');
    let itemsArray2 = localStorage.getItem('items2') ? JSON.parse(localStorage.getItem('items2')) : [];
    localStorage.setItem('items2', JSON.stringify(itemsArray2));
    function myFunction3() {
        itemsArray2.push(input2.value);
        localStorage.setItem('items2', JSON.stringify(itemsArray2));
        input2.value = ''
    }
    myFunction();
    myFunction1();
    myFunction2();
    myFunction3();
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