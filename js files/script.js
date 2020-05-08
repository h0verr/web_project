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
function myFunction() {
    var x;
    x = document.getElementById('item').value;
    let z = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com$/g.test(x);
    try {
        if (!z) throw "please enter to the gmail post";
    }
    catch (err) {
        alert("Input " + err);
        return false;
    }
    let pswr = document.querySelector('#password').value;
    let test = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(pswr);
    try {
        if (!test) throw "please enter to the right password";
    }
    catch (err) {
        alert("Input " + err);
        return false;
    }
    let phone = document.querySelector('#phone').value;
    let test2 = /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g.test(phone);
    try {
        if (!test2) throw "please enter to the right number";
    }
    catch (err) {
        alert("Input " + err);
        return false;
    }
}
