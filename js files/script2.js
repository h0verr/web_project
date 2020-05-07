function singIn() {
    var x;
    x = document.getElementById('eMail').value;
    let z = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com$/g.test(x);
    if (!z) {
        alert('please enter to the right email');
        return false
    }
    else {
        alert('Welcome' + ' ' + x + '');
    }
    let pswr = document.querySelector('#password2').value;
    let test = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(pswr);
    if (!test) {
        alert('please enter to the right password');
        return false;
    }
    const email = document.getElementById('email');
    var password = document.querySelector('#password');
    var newAnimal;
    var mas = [];
    function save() {
        newAnimal = document.getElementById("test").value// находим и записываем в переменную значение первого элемента input в документе
        mas.unshift(newAnimal);
    }
    function myFunc() {
        let itemsArr = [];
        itemsArr.push(email.value);
        localStorage.setItem(password.value, JSON.stringify(itemsArr));
        email.value = '';
        password.value = '';
        itemsArr.shift(email.value);
        save();
        if (mas[newAnimal] == itemsArr[email]) {
            alert('Hey motherfuker');
        } else {
            alert('govno');
            return false;
        }
    }

/*function emailValidation() {
    var email = document.querySelectorAll('input[data-rule]');
    for (let input of email) {
        input.addEventListener('blur', function () {
            let rule = this.dataset.rule;
            let value = this.value;
            let check;
            switch (rule) {
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
}*/
//emailValidation();