function FuncAdmin() {
    var a = {
        email: 'admin@gmail.com',
        password: 'Admin123!'
    };
    var b = document.querySelector('#email');
    var c = document.querySelector('#password2');
    if (b.value == a.email && c.value == a.password) {
        alert('welcom');
        window.location.replace('admin_panel.htm');
    }
    if (b.value == localStorage.key(0) || b.value == localStorage.key(1) || b.value == localStorage.key(2) || b.value == localStorage.key(3)) {
        alert('welcom');
        window.location.replace('admin_panel.htm');
    }

    //console.log(a.email);
    //console.log(b.value);
    //console.log(c.value)
    //console.log(a.password);
}