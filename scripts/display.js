    function display() {
        var display_data = document.getElementById('display_data')
        display_data.innerHTML = "";
        for (var i = 0; i < localStorage.length; i++) {
            var a = localStorage.key(i);
            var b = localStorage.getItem(a);
            display_data.innerHTML += a + b + "<br>";
        }
    }

    function clear() {
        localStorage.clear();
        location.reload();
    }