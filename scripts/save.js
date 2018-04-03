    function save() {
    var firstname = document.getElementById('first-name').value;
    var lastname = document.getElementById('last-name').value;
    var alias = document.getElementById('alias').value;
    var email = document.getElementById('email').value;
    var gender = document.getElementById('gender').value;
    localStorage.setItem("first-name",firstname);
    localStorage.setItem("last-name", lastname);
    localStorage.setItem("alias", alias);
    localStorage.setItem("email", email);
    localStorage.setItem("gender", gender);
}

        function display() {
            var display_data = document.getElementById('display_data')
    display_data.innerHTML = "";
            for (var i = 0; i < localStorage.length; i++) {
                var a = localStorage.key(i);
    var b = localStorage.getItem(a);
                display_data.innerHTML +=  b + "<br>";
}
}

        function clear() {
            localStorage.clear();
        location.reload();
    }