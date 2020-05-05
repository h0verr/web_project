function myFunction2() {
    var x;
    x = document.getElementById('eMail').value;
    let z = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com$/g.test(x);
    try {
        if (!z) throw "please enter to the gmail post";
    }
    catch (err) {
        alert("Input " + err);
    }
    let pswr = document.querySelector('#password2').value;
    let test = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(pswr);
    try {
        if (!test) throw "please enter to the right password";
    }
    catch (err) {
        alert("Input " + err);
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