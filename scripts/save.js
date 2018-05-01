    function saveprofile() {
        var firstname = document.getElementById('first-name').value;
        var lastname = document.getElementById('last-name').value;
        var alias = document.getElementById('alias').value;
        var email = document.getElementById('email').value;
        var gender = document.getElementById('gender').value;
        var dob = document.getElementById('date-of-birth').value;
        localStorage.setItem("First-name", firstname);
        localStorage.setItem("Last-name", lastname);
        localStorage.setItem("Alias", alias);
        localStorage.setItem("Email", email);
        localStorage.setItem("Gender", gender);
        localStorage.setItem("Date-of-birth", dob);
        window.alert("Your profile have been updated");
    }

    function savemember() {
        var firstnamemember = document.getElementById('firstnamemember').value;
        var lastnamemember = document.getElementById('lastnamemember').value;
        var gendermember = document.getElementById('gendermember').value;
        var dobmember = document.getElementById('dobmember').value;
        localStorage.setItem("first-name-member", firstnamemember);
        localStorage.setItem("last-name-member", lastnamemember);
        localStorage.setItem("gender-member", gendermember);
        localStorage.setItem("dob-member", dobmember);
        window.alert("Your profile have been updated");

    }

    function savelogin() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        window.alert("You have been logged");

    }

    function savetree() {
        var title = document.getElementById('title').value;
        var text = document.getElementById('text').value;
        localStorage.setItem("title", title);
        localStorage.setItem("text", text);
        window.alert("Your family tree have been saved");

    }


    function clear() {
        localStorage.clear();
        location.reload();
    }