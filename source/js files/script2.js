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
function myFunction2() {
    var x;
    x = document.getElementById('email').value;
    let z = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com$/g.test(x);
    try {
        if (!z) throw "please enter to the gmail post";
    }
    catch (err) {
        alert("Input " + err);
    };
    let pswr = document.querySelector('#password2').value;
    let test = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(pswr);
    try {
        if (!test) throw "please enter to the right password";
    }
    catch (err) {
        alert("Input " + err);
    };
};
